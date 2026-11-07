import { useEffect, useState } from "react";
import {
  checkApiHealth,
  generateImage,
  generateVideo,
} from "./api/client";
import { GenerationCanvas } from "./components/GenerationCanvas";
import { PromptPanel } from "./components/PromptPanel";
import { StudioFooter } from "./components/StudioFooter";
import { StudioHeader } from "./components/StudioHeader";
import { StudioSidebar } from "./components/StudioSidebar";
import { studioStyles as styles } from "./styles";
import type { ApiStatus, GenerationMode, OutputKind } from "./types";

function isValidImageUrl(value: string): boolean {
  if (!value.trim()) return false;
  try {
    const url = new URL(value);
    return url.protocol === "https:" || url.protocol === "http:";
  } catch {
    return false;
  }
}

function App() {
  const [mode, setMode] = useState<GenerationMode>("image");
  const [imagePrompt, setImagePrompt] = useState("");
  const [videoPrompt, setVideoPrompt] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [generatedImageUrl, setGeneratedImageUrl] = useState<string | null>(null);
  const [outputUrl, setOutputUrl] = useState<string | null>(null);
  const [outputKind, setOutputKind] = useState<OutputKind>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [apiStatus, setApiStatus] = useState<ApiStatus>("checking");

  useEffect(() => {
    let active = true;
    checkApiHealth().then(
      () => active && setApiStatus("online"),
      () => active && setApiStatus("offline"),
    );
    return () => {
      active = false;
    };
  }, []);

  const prompt = mode === "image" ? imagePrompt : videoPrompt;
  const validImageUrl = isValidImageUrl(imageUrl);
  const canGenerate =
    prompt.trim().length > 0 && (mode === "image" || validImageUrl);

  async function handleGenerate() {
    if (!canGenerate || isGenerating) return;
    setIsGenerating(true);
    setError(null);
    setOutputUrl(null);
    setOutputKind(null);

    try {
      const result =
        mode === "image"
          ? await generateImage(imagePrompt.trim())
          : await generateVideo(videoPrompt.trim(), imageUrl.trim());

      if ("error" in result) {
        setError(result.error);
        return;
      }

      setOutputUrl(result.outputUrl);
      setOutputKind(mode);
      if (mode === "image") {
        setGeneratedImageUrl(result.outputUrl);
        setImageUrl(result.outputUrl);
      }
    } catch (generationError) {
      setError(
        generationError instanceof Error
          ? generationError.message
          : "Something went wrong. Please try again.",
      );
    } finally {
      setIsGenerating(false);
    }
  }

  function changeMode(nextMode: GenerationMode) {
    setMode(nextMode);
    setError(null);
  }

  function animateLastImage() {
    if (generatedImageUrl) {
      setImageUrl(generatedImageUrl);
      setMode("video");
    }
  }

  return (
    <main className={styles.app}>
      <StudioSidebar apiStatus={apiStatus} />
      <div className={styles.main}>
        <StudioHeader apiStatus={apiStatus} />
        <section id="studio" className={styles.workspace}>
          <PromptPanel
            mode={mode}
            imagePrompt={imagePrompt}
            videoPrompt={videoPrompt}
            imageUrl={imageUrl}
            generatedImageUrl={generatedImageUrl}
            isGenerating={isGenerating}
            canGenerate={canGenerate}
            validImageUrl={validImageUrl}
            error={error}
            onModeChange={changeMode}
            onImagePromptChange={setImagePrompt}
            onVideoPromptChange={setVideoPrompt}
            onImageUrlChange={setImageUrl}
            onGenerate={handleGenerate}
          />
          <GenerationCanvas
            mode={mode}
            outputKind={outputKind}
            outputUrl={outputUrl}
            prompt={outputKind === "image" ? imagePrompt : videoPrompt}
            isGenerating={isGenerating}
            generatedImageUrl={generatedImageUrl}
            onAnimateImage={animateLastImage}
          />
        </section>
        <StudioFooter />
      </div>
    </main>
  );
}

export default App;

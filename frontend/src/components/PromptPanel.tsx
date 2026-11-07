import type { GenerationMode, PromptPanelProps } from "../types";
import { studioStyles as styles } from "../styles";
import { Icon } from "./Icon";

const promptIdeas: Record<GenerationMode, string[]> = {
  image: [
    "A tiny glass greenhouse on a rainy city rooftop, cinematic lighting",
    "A dreamy desert road trip at golden hour, shot on 35mm film",
    "An iridescent koi fish swimming through a midnight-blue sky",
  ],
  video: [
    "Slow camera push-in, soft breeze moving through the scene",
    "The camera gently pans left as the light shifts to sunset",
    "Subtle motion, floating particles, cinematic slow movement",
  ],
};

export function PromptPanel({
  mode,
  imagePrompt,
  videoPrompt,
  imageUrl,
  generatedImageUrl,
  isGenerating,
  canGenerate,
  validImageUrl,
  error,
  onModeChange,
  onImagePromptChange,
  onVideoPromptChange,
  onImageUrlChange,
  onGenerate,
}: PromptPanelProps) {
  const prompt = mode === "image" ? imagePrompt : videoPrompt;

  return (
    <div className={styles.panel}>
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-violet-300">AI CREATIVE STUDIO</p>
          <h1 className="mt-2 text-[22px] font-semibold tracking-[-0.04em] text-white">Create your next idea</h1>
          <p className="mt-1.5 text-sm leading-6 text-[#96949f]">Turn a few words into a visual story.</p>
        </div>
        <div className={styles.headingIcon}><Icon name="sparkles" size={20} /></div>
      </div>

      <div className="mt-7">
        <div className="mb-2.5 flex items-center justify-between">
          <label className={styles.label} id="mode-label">CREATE</label>
          <span className="text-[11px] text-[#777680]">CHOOSE A FORMAT</span>
        </div>
        <div className={styles.modeTabs} role="group" aria-labelledby="mode-label">
          <button
            type="button"
            onClick={() => onModeChange("image")}
            className={mode === "image" ? styles.modeActive : styles.modeButton}
            aria-pressed={mode === "image"}
          >
            <Icon name="image" size={16} /> Image
          </button>
          <button
            type="button"
            onClick={() => onModeChange("video")}
            className={mode === "video" ? styles.modeActive : styles.modeButton}
            aria-pressed={mode === "video"}
          >
            <Icon name="video" size={16} /> Video
            <span className={styles.modeTag}>IMAGE TO VIDEO</span>
          </button>
        </div>
      </div>

      {mode === "video" && (
        <div className="mt-6">
          <div className="flex items-center justify-between">
            <label className={styles.label} htmlFor="image-url">STARTING IMAGE</label>
            {generatedImageUrl && (
              <button
                type="button"
                className={styles.textButton}
                onClick={() => onImageUrlChange(generatedImageUrl)}
              >
                Use last generated
              </button>
            )}
          </div>
          <input
            id="image-url"
            className={styles.input}
            type="url"
            placeholder="Paste an image URL or generate one first"
            value={imageUrl}
            onChange={(event) => onImageUrlChange(event.target.value)}
            aria-invalid={imageUrl.length > 0 && !validImageUrl}
          />
          {imageUrl && !validImageUrl && (
            <p className="mt-2 text-xs text-rose-300">Enter a valid http or https image URL.</p>
          )}
        </div>
      )}

      <div className="mt-6 flex items-center justify-between">
        <label className={styles.label} htmlFor="prompt">
          {mode === "image" ? "DESCRIBE YOUR IMAGE" : "DESCRIBE THE MOTION"}
        </label>
        <span className="text-xs tabular-nums text-[#777680]">{prompt.length} characters</span>
      </div>
      <textarea
        id="prompt"
        className={styles.textarea}
        placeholder={
          mode === "image"
            ? "A quiet Japanese garden after rain, soft morning light filtering through maple leaves..."
            : "A gentle breeze stirs the leaves as the camera slowly pushes in..."
        }
        value={prompt}
        onChange={(event) =>
          mode === "image"
            ? onImagePromptChange(event.target.value)
            : onVideoPromptChange(event.target.value)
        }
        rows={5}
      />

      <div className="mt-5">
        <div className={styles.suggestHeading}>
          <span>NEED A LITTLE INSPIRATION?</span>
          <Icon name="sparkles" size={14} />
        </div>
        <div className="mt-2.5 flex flex-col gap-2">
          {promptIdeas[mode].map((idea) => (
            <button
              className={styles.suggestion}
              key={idea}
              type="button"
              onClick={() =>
                mode === "image"
                  ? onImagePromptChange(idea)
                  : onVideoPromptChange(idea)
              }
            >
              <span>{idea}</span><span className="text-lg leading-none text-[#777680]">+</span>
            </button>
          ))}
        </div>
      </div>

      {error && (
        <div className={styles.error} role="alert">
          <span className="font-semibold">Generation failed.</span> {error}
        </div>
      )}

      <button
        className={styles.generateButton}
        type="button"
        onClick={onGenerate}
        disabled={!canGenerate || isGenerating}
      >
        {isGenerating ? (
          <><span className={styles.spinner} /> Creating your {mode}...</>
        ) : (
          <><Icon name="sparkles" size={17} /> Generate {mode}<span className="ml-auto text-xs font-medium text-white/65">✦ &nbsp; AI</span></>
        )}
      </button>
      <p className="mt-3 text-center text-[11px] leading-5 text-[#777680]">
        {mode === "image" ? "Your image will appear in the canvas." : "Video generation uses your starting image."}
      </p>
    </div>
  );
}

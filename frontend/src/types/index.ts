export type GenerationMode = "image" | "video";
export type OutputKind = GenerationMode | null;
export type ApiStatus = "checking" | "online" | "offline";

export type PromptPanelProps = {
  mode: GenerationMode;
  imagePrompt: string;
  videoPrompt: string;
  imageUrl: string;
  generatedImageUrl: string | null;
  isGenerating: boolean;
  canGenerate: boolean;
  validImageUrl: boolean;
  error: string | null;
  onModeChange: (mode: GenerationMode) => void;
  onImagePromptChange: (value: string) => void;
  onVideoPromptChange: (value: string) => void;
  onImageUrlChange: (value: string) => void;
  onGenerate: () => void;
};

export type GenerationCanvasProps = {
  mode: GenerationMode;
  outputKind: OutputKind;
  outputUrl: string | null;
  prompt: string;
  isGenerating: boolean;
  generatedImageUrl: string | null;
  onAnimateImage: () => void;
};

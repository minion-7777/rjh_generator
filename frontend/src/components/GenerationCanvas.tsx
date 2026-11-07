import type { GenerationCanvasProps } from "../types";
import { studioStyles as styles } from "../styles";
import { Icon } from "./Icon";

export function GenerationCanvas({
  mode,
  outputKind,
  outputUrl,
  prompt,
  isGenerating,
  generatedImageUrl,
  onAnimateImage,
}: GenerationCanvasProps) {
  return (
    <section className={styles.canvasPanel} aria-label="Generation canvas">
      <div className={styles.canvasHeader}>
        <div>
          <h2 className="text-sm font-semibold text-[#f3f2f5]">Canvas</h2>
          <p className="mt-1 text-xs text-[#85838e]">
            {outputKind ? `Latest ${outputKind} generation` : "Your creations will appear here"}
          </p>
        </div>
        {outputUrl && (
          <a className={styles.openButton} href={outputUrl} target="_blank" rel="noreferrer">
            <Icon name="arrow" size={14} /> Open original
          </a>
        )}
      </div>

      <div className={styles.canvas}>
        {isGenerating ? (
          <div className="flex max-w-sm flex-col items-center px-6 text-center">
            <div className={styles.loadingMark}>
              <Icon name={mode === "image" ? "image" : "video"} size={25} />
            </div>
            <p className="mt-5 text-base font-medium text-white">Bringing your idea to life</p>
            <p className="mt-2 text-sm leading-6 text-[#8e8c97]">
              This can take a little while. Keep this tab open while we create.
            </p>
            <div className={styles.progressTrack}><div className={styles.progressBar} /></div>
          </div>
        ) : outputUrl && outputKind ? (
          <div className="relative flex h-full w-full items-center justify-center">
            {outputKind === "image" ? (
              <img
                className="h-full max-h-[660px] w-full rounded-xl object-contain"
                src={outputUrl}
                alt={prompt || "AI generated image"}
              />
            ) : (
              <video
                className="h-full max-h-[660px] w-full rounded-xl object-contain"
                src={outputUrl}
                controls
                playsInline
              />
            )}
            <span className={styles.resultBadge}>
              <Icon name="check" size={13} /> {outputKind === "image" ? "IMAGE READY" : "VIDEO READY"}
            </span>
          </div>
        ) : (
          <div className="flex max-w-sm flex-col items-center px-6 text-center">
            <div className={styles.emptyIllustration}>
              <div className={styles.emptyFrame}>
                <Icon name={mode === "image" ? "image" : "video"} size={30} />
              </div>
              <span className={styles.emptySparkle}><Icon name="sparkles" size={17} /></span>
            </div>
            <p className="mt-6 text-base font-medium text-[#eeedf1]">Your canvas is waiting</p>
            <p className="mt-2 text-sm leading-6 text-[#85838e]">
              {mode === "image"
                ? "Write a prompt and generate an image to see your creation here."
                : "Add a starting image and describe how you want the scene to move."}
            </p>
            <div className={styles.canvasHint}>
              <Icon name="clock" size={14} /> Generated results stay here while you create
            </div>
          </div>
        )}
      </div>

      <div className={styles.canvasFooter}>
        <span className="flex items-center gap-2">
          <span className={styles.statusDot} />
          {outputUrl ? "Saved to this session" : "Ready for your next idea"}
        </span>
        {generatedImageUrl && (
          <button className={styles.textButton} type="button" onClick={onAnimateImage}>
            Animate this image <Icon name="play" size={13} />
          </button>
        )}
      </div>
    </section>
  );
}

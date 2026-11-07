import { higgsfield, type V2Response } from "@higgsfield/client/v2";

const IMAGE_MODEL = "z-image/turbo";
const VIDEO_MODEL = "kling-video/v2.5-turbo/pro/image-to-video";
const FAIL = "Generation failed. Please try again later.";

export type GenerationResult = {
  outputUrl: string | null;
  error: string | null;
};

function outputUrl(res: V2Response): string | null {
  return res.images?.[0]?.url ?? res.video?.url ?? null;
}

export async function generateImage(prompt: string): Promise<GenerationResult> {
  try {
    const res = await higgsfield.subscribe(IMAGE_MODEL, {
      input: {
        prompt,
        resolution: "1k",
        aspect_ratio: "1:1",
        prompt_extend: false,
      },
      withPolling: true,
    });

    const url = outputUrl(res);
    return url
      ? { outputUrl: url, error: null }
      : { outputUrl: null, error: FAIL };
  } catch (error) {
    console.log(error);
    return { outputUrl: null, error: null };
  }
}

export async function generateVideo(prompt: string,imageUrl: string): Promise<GenerationResult> {
  try {
    const res = await higgsfield.subscribe(VIDEO_MODEL, {
      input: {
        prompt,
        image_url: imageUrl,
      },
      withPolling: true,
    });
    const url = outputUrl(res);
    return url
      ? { outputUrl: url, error: null }
      : { outputUrl: null, error: FAIL };
  } catch (error) {
    console.log(error);
    return { outputUrl: null, error: null };
  }
}

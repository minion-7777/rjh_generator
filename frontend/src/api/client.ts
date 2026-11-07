const API = import.meta.env.VITE_API_URL ?? "http://localhost:3000";
const GENERATION_FAILED = "Generation failed. Please try again later.";

type GenerationResponse = { outputUrl: string } | { error: string };

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

async function postGeneration(
  path: "image" | "video",
  body: { prompt: string; imageUrl?: string },
): Promise<GenerationResponse> {
  const response = await fetch(`${API}/api/generations/${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  let data: unknown;
  try {
    data = await response.json();
  } catch {
    data = null;
  }

  if (isRecord(data) && typeof data.outputUrl === "string" && data.outputUrl) {
    return { outputUrl: data.outputUrl };
  }

  const message =
    isRecord(data) && typeof data.error === "string" && data.error
      ? data.error
      : response.ok
        ? GENERATION_FAILED
        : `The generation service returned an error (${response.status}).`;

  return { error: message };
}

export async function checkApiHealth(): Promise<void> {
  const response = await fetch(`${API}/api/health`);
  if (!response.ok) {
    throw new Error(`The generation API returned an error (${response.status}).`);
  }
}

export function generateImage(prompt: string): Promise<GenerationResponse> {
  return postGeneration("image", { prompt });
}

export function generateVideo(
  prompt: string,
  imageUrl: string,
): Promise<GenerationResponse> {
  return postGeneration("video", { prompt, imageUrl });
}

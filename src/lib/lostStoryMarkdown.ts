const LOST_STORY_STORY_RE = /<LostStory\s+story="([^"]+)"\s*\/?>/g;

export type LostStoryBodySegment =
  | { type: "markdown"; content: string }
  | { type: "lostStory"; story: string };

export function hasLostStoryTags(body: string): boolean {
  return /<LostStory\s+story="([^"]+)"\s*\/?>/.test(body);
}

export function isMdxEntry(entry: { filePath?: string }): boolean {
  return Boolean(entry.filePath?.endsWith(".mdx"));
}

export function parseLostStorySegments(body: string): LostStoryBodySegment[] {
  const segments: LostStoryBodySegment[] = [];
  let lastIndex = 0;

  for (const match of body.matchAll(LOST_STORY_STORY_RE)) {
    const index = match.index ?? 0;
    if (index > lastIndex) {
      const chunk = body.slice(lastIndex, index).trim();
      if (chunk) {
        segments.push({ type: "markdown", content: chunk });
      }
    }
    segments.push({ type: "lostStory", story: match[1] });
    lastIndex = index + match[0].length;
  }

  const rest = body.slice(lastIndex).trim();
  if (rest) {
    segments.push({ type: "markdown", content: rest });
  }

  return segments;
}

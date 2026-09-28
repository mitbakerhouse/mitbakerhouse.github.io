import type { AuthorsEntry } from "@/types";

const HOUSETEAM_ORDER = [
  "john-malvina",
  "rachael",
  "paige",
  "jenny-and-judah",
  "lucas-and-charlotte",
  "anique",
  "haley",
  "angel",
  "elijah",
  "evan-and-marlene",
  "nancy",
  "cat-and-nick",
];

export const sortHouseteam = (entries: AuthorsEntry[]): AuthorsEntry[] => {
  return [...entries].sort((a, b) => {
    const ai = HOUSETEAM_ORDER.indexOf(a.id);
    const bi = HOUSETEAM_ORDER.indexOf(b.id);
    return (ai === -1 ? 999 : ai) - (bi === -1 ? 999 : bi);
  });
};

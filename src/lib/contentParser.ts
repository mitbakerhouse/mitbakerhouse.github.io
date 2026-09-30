import { getEntry, getCollection, type CollectionKey } from "astro:content";
import type { GenericEntry } from "@/types";

export const getIndex = async (collection: CollectionKey): Promise<GenericEntry> => {
  const index = await getEntry(collection, "-index");
  return index;
};

export const getEntries = async (
  collection: CollectionKey,
  sortFunction?: ((array: any[]) => any[]),
  noIndex = true,
  noDrafts = true
): Promise<GenericEntry[]> => {
  let entries: GenericEntry[] = await getCollection(collection);
  entries = noIndex
    ? entries.filter((entry: GenericEntry) => !entry.id.match(/^-/))
    : entries;
  entries = noDrafts
    ? entries.filter((entry: GenericEntry) => "draft" in entry.data && !entry.data.draft)
    : entries;
  entries = sortFunction ? sortFunction(entries) : entries;
  return entries;
};

// Fetch all pages in all specified collections, flattened into a single array
export const getEntriesBatch = async (
  collections: CollectionKey[],
  sortFunction?: ((array: any[]) => any[]),
  noIndex = true,
  noDrafts = true
): Promise<GenericEntry[]> => {
  const allCollections = await Promise.all(
    collections.map(async (collection) => {
      return await getEntries(collection, sortFunction, noIndex, noDrafts);
    })
  );
  return allCollections.flat();
};

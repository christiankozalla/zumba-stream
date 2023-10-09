import { useSanityClient } from "@sanity/astro";
import imageUrlBuilder from "@sanity/image-url";

export const imageBuilder = imageUrlBuilder(useSanityClient());

export function urlForImage(source) {
  if (source === undefined) return { url: () => "" };
  return imageBuilder.image(source);
}
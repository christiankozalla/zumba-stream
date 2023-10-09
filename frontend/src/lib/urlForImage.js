import { useSanityClient } from "@sanity/astro";
import imageUrlBuilder from "@sanity/image-url";

export const imageBuilder = imageUrlBuilder(useSanityClient());

function mockImageBuilder() {}

mockImageBuilder.format = () => this;
mockImageBuilder.url = () => "";

export function urlForImage(source) {
  if (source === undefined) return mockImageBuilder;
  return imageBuilder.image(source);
}
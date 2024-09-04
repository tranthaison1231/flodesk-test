import type { ImageBlockProps, TextBlockProps } from "@/lib/types";

export default function Image({ src, alt, ...style }: ImageBlockProps) {
  return <img src={src} alt={alt} style={{ ...style }} />;
}

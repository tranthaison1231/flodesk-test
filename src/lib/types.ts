import { CSSProperties } from "react";

export enum BlockType {
  Selection = "selection",
  Paragraph = "paragraph",
  Heading = "heading",
  Image = "image",
  Video = "video",
  Space = "space",
  Button = "button",
}

export enum Direction {
  Top = "top",
  Bottom = "bottom",
}

export interface Metadata {
  paddingTop?: string;
  backgroundColor?: string;
  paddingInline?: string;
  textAlign?: string;
}

export interface Template {
  id: string;
  name: string;
  metadata?: Metadata;
  components: Component[];
  html: string;
}

export interface TextBlockProps extends CSSProperties {
  onChange?: (value: string) => void;
  content?: string;
}

export interface ImageBlockProps extends CSSProperties {
  src?: string;
  alt?: string;
}

export type BlockProps = CSSProperties & TextBlockProps & ImageBlockProps;

export interface Component {
  id: string;
  blockType: BlockType;
  props: BlockProps;
}

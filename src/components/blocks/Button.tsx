import { CSSProperties } from "react";

export interface ButtonProps extends CSSProperties {}

export default function Button({ content, ...style }: ButtonProps) {
  return <button style={style}>{content} </button>;
}

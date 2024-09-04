import type { TextBlockProps } from "@/lib/types";
import { useRef } from "react";

export default function Paragraph({
  content,
  onChange,
  ...style
}: TextBlockProps) {
  const textRef = useRef<HTMLDivElement>(null);

  const onBlur = (event: React.FocusEvent<HTMLDivElement>) => {
    const text = event.target.innerText;

    onChange?.(text);
  };

  return (
    <div ref={textRef} style={{ ...style }} contentEditable onBlur={onBlur}>
      {content}
    </div>
  );
}

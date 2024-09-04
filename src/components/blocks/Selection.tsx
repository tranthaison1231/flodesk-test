import { BlockType } from "@/lib/types";

interface SelectionProps {
  onSelect: (type: BlockType) => void;
}

interface Selection {
  type: BlockType;
  title: string;
}

const SELECTIONS: Selection[] = [
  {
    type: BlockType.Image,
    title: "Image",
  },
  {
    type: BlockType.Heading,
    title: "Heading",
  },
  {
    type: BlockType.Paragraph,
    title: "Paragraph",
  },
];

export default function Selection({ onSelect }: SelectionProps) {
  return (
    <div className="flex gap-4 justify-center p-4">
      {SELECTIONS.map((selection) => (
        <button
          key={selection.type}
          onClick={() => onSelect(selection.type)}
          className="bg-white p-2 rounded shadow-xl size-20 text-xs text-gray-500 hover:border border-black"
        >
          {selection.title}
        </button>
      ))}
    </div>
  );
}

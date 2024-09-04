import React from "react";
import { Button } from "../ui/button";

interface TemplateEditorHeaderProps {
  onExport: () => void;
}

export default function TemplateEditorHeader({
  onExport,
}: TemplateEditorHeaderProps) {
  return (
    <div className="fixed w-full left-0 z-20 bg-white h-14 shadow-xl flex justify-end items-center px-10">
      <Button onClick={onExport}>Export HTML</Button>
    </div>
  );
}

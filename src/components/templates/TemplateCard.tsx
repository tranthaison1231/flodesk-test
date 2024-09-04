import { Button } from "@/components/ui/button";
import type { Template } from "@/lib/types";

interface TemplateProps {
  data: Template;
}

export default function TemplateCard({ data }: TemplateProps) {
  return (
    <div className="bg-white relative shadow-lg group hover:shadow-xl rounded-xl">
      <iframe className="h-96 w-full" srcDoc={data.html}></iframe>
      <div className="hidden bg-black/60 rounded-t-lg group-hover:flex bg-black-40 w-full items-center justify-center absolute top-0 h-96 cursor-pointer">
        <Button variant="outline"> Edit </Button>
      </div>
      <div className="px-8 py-4 border-t">
        <p className="text-neutral-500 text-sm">{data.name}</p>
      </div>
    </div>
  );
}

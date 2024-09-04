import TemplateCard from "@/components/templates/TemplateCard";
import { templates } from "@/data/template";
import Link from "next/link";

export default function TemplateListContainer() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14">
      {templates.map((template) => (
        <Link href={`/templates/${template.id}`} key={template.id}>
          <TemplateCard data={template} />
        </Link>
      ))}
    </div>
  );
}

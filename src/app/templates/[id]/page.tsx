"use client";
import TemplateContainer from "@/containers/Template";
import { templates } from "@/data/template";
import type { Template } from "@/lib/types";
import { SettingProvider } from "@/stores/setting";
import { TemplateProvider } from "@/stores/template";

export default function Template({ params }: { params: { id: string } }) {
  const initialTemplate = templates.find(
    (template) => template.id === params.id,
  );

  if (!initialTemplate) {
    return <div>Template not found</div>;
  }

  return (
    <TemplateProvider initialTemplate={initialTemplate}>
      <SettingProvider>
        <TemplateContainer />
      </SettingProvider>
    </TemplateProvider>
  );
}

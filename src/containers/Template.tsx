import TemplateEditor from "@/components/template-editor/TemplateEditor";
import TemplateEditorHeader from "@/components/template-editor/TemplateEditorHeader";
import { convertToHTML } from "@/lib/convert-to-html";
import { downloadFile } from "@/lib/download-file";
import { useTemplateContext } from "@/stores/template";

export default function TemplateContainer() {
  const { template } = useTemplateContext();

  const onExport = () => {
    const html = convertToHTML(template);

    downloadFile(html, "template.html");
  };

  return (
    <div className="h-screen">
      <TemplateEditorHeader onExport={onExport} />
      <TemplateEditor />
    </div>
  );
}

import { getNumberFromPx } from "@/lib/style";
import { Template } from "@/lib/types";
import { useTemplateContext } from "@/stores/template";

export default function GlobalEditorSetting() {
  const { template, setTemplate } = useTemplateContext();

  const changeBackgroundColor = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTemplate((prev: Template) => {
      return {
        ...prev,
        metadata: {
          ...prev.metadata,
          backgroundColor: e.target.value,
        },
      };
    });
  };

  const changeContentWidth = (e: React.ChangeEvent<HTMLInputElement>) => {
    const changeContentWidth = e.target.value;
    setTemplate((prev: Template) => {
      return {
        ...prev,
        metadata: {
          ...prev.metadata,
          paddingInline: changeContentWidth + "px",
        },
      };
    });
  };

  return (
    <div className="w-96 fixed right-0 z-10 bg-white h-[calc(100vh-56px)] shadow-xl p-4">
      <p className="text-center p-3 font-medium text-xl border-b">
        Global Setting
      </p>
      <div className="pt-9">Background Color:</div>
      <input
        type="color"
        className="mt-3"
        onChange={changeBackgroundColor}
        value={template.metadata?.backgroundColor || "#ffffff"}
      />

      <div className="pt-9">Content Width:</div>
      <input
        type="range"
        className="mt-3"
        step={2}
        onChange={changeContentWidth}
        value={getNumberFromPx(template.metadata?.paddingInline ?? "1px")}
      />
    </div>
  );
}

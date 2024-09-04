import { getNumberFromPx } from "@/lib/style";
import { Template } from "@/lib/types";
import { useSettingContext } from "@/stores/setting";
import { useTemplateContext } from "@/stores/template";

export default function ImageEditorSetting() {
  const { setting } = useSettingContext();
  const { template, setTemplate } = useTemplateContext();

  const component = template.components.find(
    (temp) => temp.id === setting?.componentId,
  );

  const changeSize = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTemplate((prev: Template) => {
      const newComponents = prev.components.map((comp) => {
        if (comp.id === setting?.componentId) {
          return {
            ...comp,
            props: {
              ...comp.props,
              width: e.target.value + "px",
            },
          };
        }
        return comp;
      });

      return { ...prev, components: newComponents };
    });
  };

  return (
    <div className="w-96 fixed right-0 z-10 bg-white h-[calc(100vh-56px)] shadow-xl p-4">
      <p className="text-center p-3 font-medium text-xl border-b">
        Image Setting
      </p>
      <div className="pt-9">Change size:</div>
      <input
        type="range"
        className="mt-3"
        min={300}
        step={10}
        max={800}
        onChange={changeSize}
        value={getNumberFromPx(String(component?.props?.width) ?? "1px")}
      />
    </div>
  );
}

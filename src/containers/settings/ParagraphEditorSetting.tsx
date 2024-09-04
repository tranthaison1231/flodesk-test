import { getNumberFromPx } from "@/lib/style";
import { Template } from "@/lib/types";
import { useSettingContext } from "@/stores/setting";
import { useTemplateContext } from "@/stores/template";

export default function GlobalEditorSetting() {
  const { setting } = useSettingContext();
  const { template, setTemplate } = useTemplateContext();

  const component = template.components.find(
    (temp) => temp.id === setting?.componentId,
  );

  const changeTextColor = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTemplate((prev: Template) => {
      const newComponents = prev.components.map((comp) => {
        if (comp.id === setting?.componentId) {
          return {
            ...comp,
            props: {
              ...comp.props,
              color: e.target.value,
            },
          };
        }
        return comp;
      });

      return { ...prev, components: newComponents };
    });
  };

  const changeFontSize = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTemplate((prev: Template) => {
      const newComponents = prev.components.map((comp) => {
        if (comp.id === setting?.componentId) {
          return {
            ...comp,
            props: {
              ...comp.props,
              fontSize: e.target.value + "px",
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
        Paragraph Setting
      </p>
      <div className="pt-9">Text Color:</div>
      <input
        type="color"
        className="mt-3"
        onChange={changeTextColor}
        value={component?.props.color || "#ffffff"}
      />

      <div className="pt-9">Font size:</div>
      <input
        type="range"
        className="mt-3"
        step={2}
        onChange={changeFontSize}
        value={getNumberFromPx(String(component?.props?.fontSize) ?? "1px")}
      />
    </div>
  );
}

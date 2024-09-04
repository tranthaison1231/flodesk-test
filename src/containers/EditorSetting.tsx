import { SettingType, useSettingContext } from "@/stores/setting";
import GlobalEditorSetting from "./settings/GlobalSettings";
import ParagraphEditorSetting from "./settings/ParagraphEditorSetting";
import { BlockType } from "@/lib/types";
import HeadingEditorSetting from "./settings/HeadingEditorSetting";
import ImageEditorSetting from "./settings/ImageEditorSetting";

function BlockEditorSetting() {
  const { setting } = useSettingContext();

  switch (setting?.blockType) {
    case BlockType.Paragraph:
      return <ParagraphEditorSetting />;
    case BlockType.Heading:
      return <HeadingEditorSetting />;
    case BlockType.Image:
      return <ImageEditorSetting />;
    default:
      return null;
  }
}

export default function EditorSetting() {
  const { setting } = useSettingContext();

  switch (setting?.type) {
    case SettingType.Global:
      return <GlobalEditorSetting />;
    case SettingType.Block:
      return <BlockEditorSetting />;
    default:
      return null;
  }
}

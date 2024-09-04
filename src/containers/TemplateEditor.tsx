"use client";

import Space from "@/components/blocks/Space";
import Paragraph from "@/components/blocks/Paragraph";
import Heading from "@/components/blocks/Heading";
import Image from "@/components/blocks/Image";

import { SortableItem } from "@/components/dnd/SortableItem";
import AddButton from "@/components/template-editor/AddButton";
import EditorSetting from "./EditorSetting";
import { useSensorConfig } from "@/hooks/useSensorConfig";
import { useTemplateEditor } from "@/hooks/useTemplateEditor";
import { transformMetadataToReactStyle } from "@/lib/style";
import { BlockType, Component, Direction } from "@/lib/types";
import { closestCenter, DndContext } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { useCallback } from "react";
import Selection from "@/components/blocks/Selection";
import { useTemplateContext } from "@/stores/template";
import { SettingType, useSettingContext } from "@/stores/setting";

export default function TemplateEditor() {
  const { template } = useTemplateContext();
  const { setSetting } = useSettingContext();
  const sensors = useSensorConfig();

  const { addComponent, onDragEnd, onTextChange, onSelect } =
    useTemplateEditor();

  const renderComponent = useCallback(
    (component: Component) => {
      switch (component.blockType) {
        case BlockType.Selection:
          return (
            <Selection
              key={component.id}
              onSelect={(type) => onSelect(component.id, type)}
            />
          );
        case BlockType.Heading:
          return (
            <Heading
              key={component.id}
              {...component.props}
              onChange={(text) => onTextChange(component.id, text)}
            />
          );
        case BlockType.Paragraph:
          return (
            <Paragraph
              key={component.id}
              {...component.props}
              onChange={(text) => onTextChange(component.id, text)}
            />
          );
        case BlockType.Image:
          // eslint-disable-next-line jsx-a11y/alt-text
          return <Image key={component.id} {...component.props} />;
        case BlockType.Space:
          return <Space key={component.id} {...component.props} />;
        default:
          return null;
      }
    },
    [onTextChange, onSelect],
  );
  const components = template.components;

  return (
    <div className="flex pt-14 z-10">
      <div
        className="p-10 relative w-[calc(100%-384px)] min-h-[calc(100vh-56px)] overflow-y-auto"
        onClick={(e) => {
          e.stopPropagation();
          setSetting({
            type: SettingType.Global,
          });
        }}
        style={
          template?.metadata
            ? transformMetadataToReactStyle(template.metadata)
            : undefined
        }
      >
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={onDragEnd}
        >
          <SortableContext
            items={components.map((component) => component.id)}
            strategy={verticalListSortingStrategy}
          >
            {components.map((component) => (
              <SortableItem key={component.id} id={component.id}>
                <div
                  key={component.id}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSetting({
                      type: SettingType.Block,
                      componentId: component.id,
                      blockType: component.blockType,
                    });
                  }}
                  className="group relative hover:border hover:border-blue-500"
                >
                  <AddButton
                    className="-top-2 z-40"
                    onClick={() => addComponent(component.id, Direction.Top)}
                  />
                  {renderComponent(component)}
                  <AddButton
                    className="-bottom-2 z-40"
                    onClick={() => addComponent(component.id, Direction.Bottom)}
                  />
                </div>
              </SortableItem>
            ))}
          </SortableContext>
        </DndContext>
      </div>
      <EditorSetting />
    </div>
  );
}

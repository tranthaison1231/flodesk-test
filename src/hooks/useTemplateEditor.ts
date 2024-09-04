"use client";

import { DragEndEvent } from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";
import { BlockType, Component, Direction, Template } from "@/lib/types";
import { getDefaultProps } from "@/lib/get-default-props";
import { useTemplateContext } from "@/stores/template";

export function useTemplateEditor() {
  const { setTemplate } = useTemplateContext();

  const addComponent = (id: string, direction: Direction) => {
    const newComponent: Component = {
      id: crypto.randomUUID(),
      blockType: BlockType.Selection,
      props: {},
    };

    setTemplate((prevTemplate: Template) => {
      const newComponents: Component[] = [];

      for (const component of prevTemplate.components) {
        newComponents.push(component);

        if (component.id === id && direction === Direction.Top) {
          newComponents.splice(newComponents.length - 1, 0, newComponent);
        }

        if (component.id === id && direction === Direction.Bottom) {
          newComponents.push(newComponent);
        }
      }
      return { ...prevTemplate, components: newComponents };
    });
  };

  const onDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (active.id !== over?.id) {
      setTemplate((prevTemplate: Template) => {
        const prevComponents = prevTemplate.components;
        const oldIndex = prevComponents.findIndex(
          (component) => component.id === active.id,
        );
        const newIndex = prevComponents.findIndex(
          (component) => component.id === over?.id,
        );

        return {
          ...prevTemplate,
          components: arrayMove(prevComponents, oldIndex, newIndex),
        };
      });
    }
  };

  const onTextChange = (text: string) => {
    setTemplate((prevTemplate: Template) => {
      const newComponents = prevTemplate.components.map((component) => {
        if (
          component.blockType === BlockType.Paragraph ||
          component.blockType === BlockType.Heading
        ) {
          return { ...component, props: { ...component.props, content: text } };
        }
        return component;
      });

      return { ...prevTemplate, components: newComponents };
    });
  };

  const onSelect = (id: string, type: BlockType) => {
    setTemplate((prevTemplate: Template) => {
      const newComponents = prevTemplate.components.map((component) => {
        if (component.id === id) {
          return {
            ...component,
            blockType: type,
            props: getDefaultProps(type),
          };
        }
        return component;
      });

      return { ...prevTemplate, components: newComponents };
    });
  };

  return {
    addComponent,
    onDragEnd,
    onTextChange,
    onSelect,
  };
}

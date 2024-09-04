import { CSSProperties } from "react";
import { BlockType, Component, Template } from "./types";

export const convertStyleToCSS = (style: CSSProperties) => {
  const css = Object.entries(style)
    .map(([key, value]) => {
      const cssKey = key.replace(
        /[A-Z]/g,
        (match) => `-${match.toLowerCase()}`,
      );
      return `${cssKey}: ${value};`;
    })
    .join("");

  return css;
};

export const convertToBody = (components: Component[]) => {
  const body = components
    .map((component) => {
      const { content, src, alt, ...style } = component.props;

      switch (component.blockType) {
        case BlockType.Paragraph:
          return `<p style="${convertStyleToCSS(style)}">${component.props.content}</p>`;
        case BlockType.Heading:
          return `<h1 style="${convertStyleToCSS(style)}">${component.props.content}</h1>`;
        case BlockType.Image:
          return `<img style="${convertStyleToCSS(style)}" src="${src}" alt="${alt}" />`;
        case BlockType.Space:
          return `<div style="${convertStyleToCSS(component.props)}"></div>`;
        default:
          return "";
      }
    })
    .join("");

  return body;
};

export const convertToHTML = (template: Template) => {
  const body = convertToBody(template.components);

  const bodyStyle = template?.metadata
    ? `style="${convertStyleToCSS(template.metadata)}"`
    : "";

  return `
    <!doctype html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Email Template</title>
      </head>
      <body ${bodyStyle}>
        ${body}
      </body>
    </html>
  `;
};

import { Metadata } from "./types";

export const getNumberFromPx = (value: string) => {
  return parseInt(value.replace("px", ""));
};

export const transformMetadataToReactStyle = (metadata: Metadata) => {
  const paddingInline = getNumberFromPx(metadata.paddingInline ?? "0px");
  return {
    paddingTop: metadata.paddingTop + "px",
    backgroundColor: metadata.backgroundColor,
    paddingInline: paddingInline + "px",
  };
};

export const transformMetadataToStyle = (metadata: Metadata) => {
  const paddingInline = getNumberFromPx(metadata.paddingInline ?? "0px");

  return `
    padding-top: ${metadata.paddingTop}px;
    background-color: ${metadata.backgroundColor};
    padding-inline: ${paddingInline}px;
  `;
};

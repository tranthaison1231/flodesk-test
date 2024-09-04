import { BlockProps, BlockType } from "./types";

export const getDefaultProps = (type: BlockType): BlockProps => {
  switch (type) {
    case BlockType.Heading:
      return {
        fontSize: "32px",
        textAlign: "center",
        paddingTop: "10px",
        fontWeight: "bold",
        color: "black",
        content: "Lorem ipsum",
      };
    case BlockType.Paragraph:
      return {
        fontSize: "14px",
        textAlign: "center",
        paddingTop: "10px",
        color: "black",
        content: "Lorem ipsum dolor sit amet consectetur adipiscing elit",
      };
    case BlockType.Image:
      return {
        width: "300px",
        margin: "0 auto",
        height: "auto",
        src: "https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2023/11/22/1270623/CAO-BANG-11.jpg",
        alt: "placeholder",
      };
    default:
      return {};
  }
};

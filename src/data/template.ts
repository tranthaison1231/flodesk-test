import { BlockType, Template } from "@/lib/types";

export const templates: Template[] = [
  {
    id: "1",
    name: "E-commerce showcase",
    metadata: {
      paddingTop: "60px",
      backgroundColor: "#f4ebdc",
      paddingInline: "20px",
      textAlign: "center",
    },
    components: [
      {
        id: "1",
        blockType: BlockType.Space,
        props: {
          height: "100px",
        },
      },
      {
        id: "2",
        blockType: BlockType.Space,
        props: {
          height: "100px",
        },
      },
      {
        id: "3",
        blockType: BlockType.Paragraph,
        props: {
          fontSize: "14px",
          textAlign: "center",
          paddingTop: "10px",
          color: "#f00000",
          content: "Hello, World!",
        },
      },
      {
        id: "4",
        blockType: BlockType.Paragraph,
        props: {
          fontSize: "14px",
          textAlign: "center",
          paddingTop: "40px",
          paddingBottom: "40px",
          color: "#000000",
          content: "Hello, World!",
        },
      },
      {
        id: "5",
        blockType: BlockType.Paragraph,
        props: {
          fontSize: "14px",
          textAlign: "center",
          paddingTop: "40px",
          paddingBottom: "40px",
          color: "#000000",
          content: "Hello, World!",
        },
      },
    ],
    html: `
    <!doctype html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Email Template</title>
      </head>
      <body style="background-color:#f4ebdc">
        <div style="height: 100px;"></div><div style="height: 100px;"></div><p style="font-size: 14px;text-align: center;padding-top: 10px;color: red;">Hello, World!</p><p style="font-size: 14px;text-align: center;padding-top: 40px;padding-bottom: 40px;color: blue;">Hello, World!</p><p style="font-size: 14px;text-align: center;padding-top: 40px;padding-bottom: 40px;color: blue;">Hello, World!</p>
      </body>
    </html>
    `,
  },
  {
    id: "2",
    name: "E-commerce showcase",
    components: [
      {
        id: "1",
        blockType: BlockType.Space,
        props: {
          height: "100px",
        },
      },
      {
        id: "2",
        blockType: BlockType.Space,
        props: {
          height: "100px",
        },
      },
      {
        id: "3",
        blockType: BlockType.Paragraph,
        props: {
          fontSize: "14px",
          textAlign: "center",
          paddingTop: "10px",
          color: "red",
          content: "Hello, World!",
        },
      },
      {
        id: "4",
        blockType: BlockType.Paragraph,
        props: {
          fontSize: "14px",
          textAlign: "center",
          paddingTop: "40px",
          paddingBottom: "40px",
          color: "blue",
          content: "Hello, World!",
        },
      },
      {
        id: "5",
        blockType: BlockType.Paragraph,
        props: {
          fontSize: "14px",
          textAlign: "center",
          paddingTop: "40px",
          paddingBottom: "40px",
          color: "blue",
          content: "Hello, World!",
        },
      },
    ],
    html: `<!doctype html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Email Template</title>
      </head>
      <body>
        <div style="height: 100px;"></div><div style="height: 100px;"></div><p style="font-size: 14px;text-align: center;padding-top: 10px;color: red;">Hello, World!</p><p style="font-size: 14px;text-align: center;padding-top: 40px;padding-bottom: 40px;color: blue;">Hello, World!</p><p style="font-size: 14px;text-align: center;padding-top: 40px;padding-bottom: 40px;color: blue;">Hello, World!</p>
      </body>
    </html>`,
  },
];

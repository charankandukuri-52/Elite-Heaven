import React, { ReactElement } from "react";

interface ImageProps {
  src: string | { src: string };
  [key: string]: any;
}

const Image = ({ src, ...props }: ImageProps): ReactElement => {
  try {
    const NextImage = require("next/image").default;
    return React.createElement(
      NextImage,
      {
        src: typeof src === "string" ? src : src.src,
        ...props,
      }
    );
  } catch {
    console.log("Not using Next.js");
    return React.createElement("img", { src: typeof src === "string" ? src : src.src, ...props });
  }
};

export default Image;

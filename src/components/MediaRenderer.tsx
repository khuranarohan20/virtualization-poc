import { useRef } from "react";
import { FixedSizeList as List } from "react-window";
import { image_1, image_2, image_3 } from "../source";

const getImage = (index: number) => {
  const images = [image_1, image_2, image_3];
  return images[index % images.length];
};

const MediaRenderer = () => {
  const itemCount = 2_000;
  const containerRef = useRef<any>();

  console.log({ containerRef });

  return (
    <List
      ref={containerRef}
      height={900}
      itemCount={itemCount}
      itemSize={500}
      width={"100%"}
      className="d-flex flex-column gap-2"
    >
      {({ index, style }) => (
        <div style={style} className="d-flex flex-column gap-2">
          <ImageRender image_src={getImage(index)} />
        </div>
      )}
    </List>
  );
};

export default MediaRenderer;

function ImageRender({ image_src }: { image_src: string }) {
  return <img src={image_src} width={"100%"} height={"100%"} />;
}

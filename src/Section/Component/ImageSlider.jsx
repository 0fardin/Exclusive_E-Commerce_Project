import SimpleImageSlider from "react-simple-image-slider";

const images = [
  { url: "images/1.jpg" },
  { url: "images/2.jpg" },
  { url: "images/3.jpg" },
  { url: "images/4.jpg" },
  { url: "images/5.jpg" },
  { url: "images/6.jpg" },
  { url: "images/7.jpg" },
];

const ImageSlider = () => {
  return (
    <div>
      <SimpleImageSlider
        width={1170}
        height={504}
        images={images}
        showBullets={true}
        showNavs={false}
        slideDuration={0.5}
        autoPlay={true}
      />
    </div>
  );
};
export default ImageSlider;

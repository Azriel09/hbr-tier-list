import "./icons.css";

const importAllImages = () => {
  const images = import.meta.glob(
    "../../assets/icons/31-A/karen/*.{png,jpg,jpeg,webp}",
    { eager: true }
  );
  const formattedImages = Object.entries(images).reduce((acc, [key, value]) => {
    const fileName = key.split("/").pop(); // Extract file name
    acc[fileName] = value.default; // Get the default export (image path)

    return acc;
  }, {});
  return formattedImages;
};

export default function IconRenderer() {
  const images = importAllImages();
  return (
    <div className="image-gallery">
      {Object.entries(images).map(([name, src]) => (
        <img
          key={name}
          src={src}
          alt={name}
          style={{ width: "50px", margin: "10px" }}
        />
      ))}
    </div>
  );
}

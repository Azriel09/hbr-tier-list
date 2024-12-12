import "./icons.css";

export default function IconRenderer({ student, rarity }) {
  return (
    <div className="image-gallery">
      <img
        key={`${student}${rarity}`}
        src={`./src/assets/icons/31-A/${student}/${rarity}.webp`}
        alt={`${student}${rarity}`}
        style={{ width: "40px", margin: "10px" }}
      />
    </div>
  );
}

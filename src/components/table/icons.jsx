import "./icons.css";

export default function IconRenderer({ student, rarity, section, element }) {
  console.log(element);
  return (
    <div className="image-gallery">
      <img
        className={element}
        key={`${student}${rarity}`}
        src={`./src/assets/icons/${section}/${student}/${rarity}.webp`}
        alt={`${student}${rarity}`}

      />
    </div>
  );
}

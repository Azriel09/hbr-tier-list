import { useState, useEffect } from "react";
import "./icons.css";

export default function IconRenderer({ student, rarity, section, element }) {
  const [yingxia, setYingxia] = useState(false);
  useEffect(() => {
    if (student == "yingxia" && rarity == "S1") {
      setYingxia(true);
    }
  }, [student]);

  return (
    <div className="image-gallery">
      <img
      
        className={`${element} tierlist-img`}
        key={`${student}${rarity}`}
        src={`./src/assets/icons/${section}/${student}/${rarity}.webp`}
        alt={`${student}${rarity}`}
      />
      
    </div>
  );
}

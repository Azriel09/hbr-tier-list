import { useState, useEffect } from "react";
import EventTemplate from "./template";

export default function CurrentBanner({ data }) {
  return (
    <div>
      {data["Recruitment"].map((banner, i) => {
        console.log(banner);
        return (
          <EventTemplate
            key={i}
            start_date={banner["start_date"]}
            target_date={banner["end_date"]}
            title={banner["name"]}
            link={banner["link"]}
          />
        );
      })}
    </div>
  );
}

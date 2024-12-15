import CurrentBanner from "./current-banner";
import Events from "../../events.json";
export default function EventsContainer() {
  console.log(Events);
  return (
    <div>
      <CurrentBanner data={Events} />
    </div>
  );
}

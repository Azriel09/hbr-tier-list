import { useEffect, useState } from "react";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

import Drag from "./drag";
import Drop from "./drop";
import "./drag.css";
export default function TierListTemplate({ dataEN }) {
  const containers = ["A", "B", "C", "D", "E"];
  const [parent, setParent] = useState(null);
  const draggableMarkup = <Drag id="draggable">Drag me</Drag>;
  // useEffect(() => {
  //   let tierData = [];
  //   console.log(dataEN);
  //   Array.from({ length: 11 }, (_, index) => {
  //     const descendingIndex = 10 - index;
  //     console.log(descendingIndex);
  //     tierData.push({ tier: descendingIndex });
  //   });
  //   console.log(tierData);
  // }, []);
  function handleDragEnd(event) {
    const { over } = event;

    // If the item is dropped over a container, set it as the parent
    // otherwise reset the parent to `null`
    setParent(over ? over.id : null);
  }
  return (
    <div className="dnd-container">
      <DndContext onDragEnd={handleDragEnd}>
        {parent === null ? draggableMarkup : null}
        <div className="columns-container">
          {containers.map((id, index) => (
            // We updated the Droppable component so it would accept an `id`
            // prop and pass it to `useDroppable`
            <div className="column-wrapper" key={index}>
              <Drop key={id} id={id}>
                {parent === id ? (
                  draggableMarkup
                ) : (
                  <div className="drop-container">{id}</div>
                )}
              </Drop>
            </div>
          ))}
        </div>
      </DndContext>
    </div>
  );
}

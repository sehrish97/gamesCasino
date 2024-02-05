import { DndContext, PointerSensor, useSensor, useSensors, closestCenter, KeyboardSensor } from "@dnd-kit/core";
import { SortableContext, arrayMove, sortableKeyboardCoordinates } from "@dnd-kit/sortable";
import React, { useMemo, useState } from "react";
import { SortableItem } from "./SortableItem";

const leadStatus = [
  { _id: 1, title: "pending", sequence: 1 },
  { _id: 2, title: "won", sequence: 4 },
  { _id: 3, title: "lost", sequence: 3 },
  { _id: 4, title: "postponed", sequence: 2 },
];

const LeadStatusSettingChips = () => {
  const [items, setItems] = useState(leadStatus);
  const itemsId = useMemo(() => items.map((data) => data._id), [items]);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );
  const sortedItems = [...items].sort((a, b) => a.sequence - b.sequence);

  return (
    <>
      <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext items={itemsId}>
          {sortedItems.map((data) => (
            <SortableItem key={data._id} item={data} />
          ))}
        </SortableContext>
      </DndContext>
    </>
  );

  function handleDragEnd(event) {
    const { active, over } = event;

    if (active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.findIndex((item) => item._id === active.id);
        const newIndex = items.findIndex((item) => item._id === over.id);

        return arrayMove(items, oldIndex, newIndex);
      });
    }
  }
};

export default LeadStatusSettingChips;

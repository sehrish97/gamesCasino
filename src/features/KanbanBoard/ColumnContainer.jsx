import { SortableContext, useSortable } from "@dnd-kit/sortable";
import React, { useMemo } from "react";
import { CSS } from "@dnd-kit/utilities";
import TaskCard from "./TaskCard";
import { Box, IconButton, Paper, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { AddCircle } from "@mui/icons-material";

const ColumnContainer = ({ column, tasks }) => {
  const tasksId = useMemo(() => {
    return tasks.map((task) => task.id);
  }, [tasks]);

  const { setNodeRef, attributes, listeners, transform, transition, isDragging } = useSortable({
    id: column.id,
    data: {
      type: "Column",
      column,
    },
  });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  if (isDragging) {
    return (
      <div ref={setNodeRef} style={style} className="bg-columnBackgroundColor opacity-40border-2 border-pink-500 w-[350px] h-[500px] max-h-[500px] rounded-md flex flex-col "></div>
    );
  }

  return (
    <Box ref={setNodeRef} style={style}>
      <Paper sx={{ width: 350, marginX: 1, padding: 1, backgroundColor: `${column.className.value}`, borderRadius: "1rem" }}>
        <Box {...attributes} {...listeners}>
          <Box sx={{display:"flex", minHeight:50,justifyContent:"space-between", alignContent:"center", alignItems:"center"}}>
            <Typography variant="h5" color="white">
              {column.title}
            </Typography>
            <DeleteIcon />
          </Box>
        </Box>
        <div>
          <SortableContext items={tasksId}>
            <Box>
              <Paper sx={{ backgroundColor: "#EEF2F6", padding: 1, borderRadius: "none" }}>
                {tasks.map((task) => (
                  <TaskCard key={task.id} task={task} />
                ))}
              </Paper>
            </Box>
          </SortableContext>
        </div>
        <IconButton >
          <AddCircle sx={{color:"white"}}/>
          <Typography color="white">Add Task</Typography>
        </IconButton>
      </Paper>
    </Box>
  );
};

export default ColumnContainer;

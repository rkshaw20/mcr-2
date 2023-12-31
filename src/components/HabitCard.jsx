import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import { useDataContext } from "../contexts/DataContextProvider";

const HabitCard = ({ habit }) => {
  const { habitsList, setHabitsList } = useDataContext();

  const { id, name, repeat, goal, time, startDate, isArchive } = habit;

  const handleArchive = (itemId) => {
    const habits = habitsList.map((habit) => {
      if (itemId === habit.id) {
        return { ...habit, isArchive: true };
      }
      return habit;
    });
    setHabitsList(habits);
  };

  const handleDelete = (itemId) => {
    const updatedHabits = habitsList.filter((habit) => habit.id !== itemId);
    setHabitsList(updatedHabits);
  };

  return (
    <div className="habit-card">
      <h3>{name}</h3>
      <ul>
        <li>Repeat: {repeat}</li>
        <li>Goal: {goal}</li>
        <li>Time: {time}</li>
        <li>Start Date: {startDate}</li>
      </ul>
      <button>Edit</button>
      <button onClick={()=>handleDelete(id)}>Delete</button>
     { !isArchive && <button onClick={()=>handleArchive(id)}>Archive</button>} 
    </div>
  );
};

export default HabitCard;

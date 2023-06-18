import { Link } from "react-router-dom";
import HabitCard from "../components/HabitCard";
import { useDataContext } from "../contexts/DataContextProvider";
import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { v4 as uuid } from 'uuid'; 


const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

const Home = () => {
  const { habitsList,setHabitsList } = useDataContext();
  const [formValues, setFormValues] = useState({  name: '', repeat:'daily', goal:'1 time daily', timeOfDay:'any time', startDate:'today'
  });

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  const handleFormSubmit=(e)=>{
    e.preventDefault()
    console.log(formValues)
    const newHabit={
        id:uuid(),
      name: formValues.name,
      repeat: formValues.repeat,
      goal: formValues.goal,
      timeOfDay: formValues.timeOfDay,
      startDate: formValues.startDate,

    }
    setFormValues({}); 

    setHabitsList([...habitsList, newHabit]);
    handleClose();
  }
  const handleChange = (event) => {
    setFormValues({ ...formValues, [event.target.name]: event.target.value });
  };
  return (
    <div>
        <div className="header">
        <h1>Home Page</h1>
        <div className="addHabitBtn">
            <button onClick={handleOpen}>Add a habit</button>
        </div>
        <div className="btn">
            <Link to='/archive'>Archive</Link>
        </div>
        </div>

        <div className="modal">
        
        {/* <Button onClick={handleOpen}>Open modal</Button> */}
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Habit
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <form onSubmit={(e)=>handleFormSubmit(e)}>
                <label htmlFor="Name">
                  Name
                  <input type="text" name="name" onChange={handleChange} />
                </label>
                <label htmlFor="Repeat">
                  Repeat
                  <select name="repeat" id="repeat" onChange={handleChange}>
                    <option value="daily">Daily</option>
                    <option value="weekly">Weekly</option>
                    <option value="monthly">Monthly</option>
                  </select>
                </label>
                <label htmlFor="goal">
                  Goal
                  <select name="goal" id="goal" onChange={handleChange}>
                    <option value="1 time daily">1 time daily</option>
                    <option value="2 time daily">2 time daily</option>
                    <option value="3 time daily">3 time daily</option>
                  </select>
                </label>
                <label htmlFor="timeOfDay">
                  Time Of Day
                  <select name="timeOfDay" id="timeOfDay" onChange={handleChange}>
                    <option value="morning">morning</option>
                    <option value="afternoon">afternoon</option>
                    <option value="evening">evening</option>
                    <option value="night">night</option>
                  </select>
                </label>
                <label htmlFor="startDate">
                    start Date
                    <select name="startDate" id="startDate" onChange={handleChange}>
                        <option value="today">Today</option>
                        <option value="next Week">Next week</option>
                        <option value="next month">Next month</option>
                    </select>
                </label>
                <button onClick={()=>handleClose()}>Discard</button>
                <button>Save</button>
              </form>
            </Typography>
          </Box>
        </Modal>
      </div>
    
      <div className="habit-list">
        {habitsList.map((habit) => (
            (!habit.isArchive) &&
          <HabitCard key={habit.id} habit={habit} />
        ))}
      </div>
    </div>
  );
};

export default Home;

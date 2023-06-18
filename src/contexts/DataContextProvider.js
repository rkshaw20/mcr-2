import { createContext, useContext, useReducer, useState } from "react"
import { habits } from "../db";
import { v4 as uuid } from 'uuid';


const DataContext=createContext({
    habitsList:[],
    dispatch:()=>{},
    archiveList:[],
})

export const useDataContext=()=>useContext(DataContext);


// const dataInitialValue={habits:habits}
// const dataReducer=(state, action)=>{

// }

const DataContextProvider=({children})=>{
    const [habitsList, setHabitsList]=useState(habits);
    const [archiveList,setArchiveList]=useState([])
   
          return (
        <DataContext.Provider value={{habitsList, setHabitsList,archiveList,setArchiveList}}>
            {children}
        </DataContext.Provider>
    )
}
export default DataContextProvider;
import HabitCard from "../components/HabitCard";
import { useDataContext } from "../contexts/DataContextProvider";



const Archive=()=>{
    const {HabitsList} =useDataContext()
    return (
        <div className="archive-list">
            <h2>Archive</h2>
            {HabitsList.map((item)=>(
                (item.isArchive) && <HabitCard key={item.id} habit={item}/>
            ))}
        </div>
    )
}

export default Archive;
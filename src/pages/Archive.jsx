import HabitCard from "../components/HabitCard";
import { useDataContext } from "../contexts/DataContextProvider";



const Archive=()=>{
    const {habitsList} =useDataContext()
    return (
        <div className="archive-list">
            <h2>Archive</h2>
            {habitsList.map((item)=>(
                (item.isArchive) && <HabitCard key={item.id} habit={item}/>
            ))}
        </div>
    )
}

export default Archive;
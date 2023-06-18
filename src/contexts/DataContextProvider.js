import { createContext, useContext, useReducer } from "react"


const DataContext=createContext({
    products:[],
    dispatch:()=>{},
})

export const useDataContext=()=>useContext(createContext);


const dataInitialValue={products:[]}
const dataReducer=(state, action)=>{}

const DataContextProvider=({children})=>{
    const [state , dispatch]= useReducer(dataReducer, dataInitialValue);
    return (
        <DataContext.Provider value={{products:state.products, dispatch}}>
            {children}
        </DataContext.Provider>
    )
}
export default DataContextProvider;
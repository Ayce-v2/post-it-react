import { PostState } from "./post-it-reducer"
import { postReducer } from "./post-it-reducer"
import { useReducer } from "react"

const initialState: PostState = {
    currentNote: "",
    allNotes: []
}

export function PostIt(){

    const [postState, dispatch] = useReducer(postReducer, initialState);

    function handleCurrentNote(event:React.ChangeEvent<HTMLInputElement>){
        dispatch({type:"SET_CURRENT_NOTE", payload: String(event.target.value)})
    }





    return <>
    

    <h1>Your Very Own Post-It Website</h1>
    <h4>Enter your note below:</h4>

    <input type="text" placeholder="Your note here" onInput={handleCurrentNote}/>
    <button onClick={()=>dispatch({type:"ADD_NOTE"})}>Add Note</button>
    <button onClick={()=>dispatch({type:"CLEAR_NOTES"})}>Clear Notes</button>
    <ul>{
        postState.allNotes.map(note => (
            <li>{note}</li>
        ))
    }
    </ul>
    </>


}
import { clear } from "console";

export type PostState = {
    currentNote: string
    allNotes: string[]
    

}


export type SetCurrentNoteAction = {type:"SET_CURRENT_NOTE", payload:string};
export type AddNoteAction = {type:"ADD_NOTE"};
export type ClearNotesAction = {type:"CLEAR_NOTES"};
export type PostItAction = SetCurrentNoteAction |  AddNoteAction | ClearNotesAction

export function postReducer(state: PostState, action: PostItAction): PostState{
    const stateClone: PostState = JSON.parse(JSON.stringify(state));

    switch(action.type) {
        case "ADD_NOTE": {
            if(stateClone.currentNote.length < 3){
                return stateClone;
            } 
            stateClone.allNotes.push(stateClone.currentNote);
            return stateClone;
        }
        case "SET_CURRENT_NOTE": {
            stateClone.currentNote = action.payload;
            return stateClone;
        }
        case "CLEAR_NOTES": {
            stateClone.allNotes = []
            return stateClone;

        }
    }

}

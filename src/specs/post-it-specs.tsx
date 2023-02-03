import {PostState, postReducer } from "../post-it-reducer"


test("ADD_NOTE", ()=>{
    const postState: PostState = {
        currentNote: "",
        allNotes: []

    }

    const nextState = postReducer(postState, {type:"ADD_NOTE"});
    expect(nextState.currentNote).toBe("");
    console.log(postState);
    console.log(nextState);
})




test("SET_CURRENT_NOTE", ()=>{
    const postState: PostState = {
        currentNote: "",
        allNotes: []
    }

    const nextState = postReducer(postState, {type:"SET_CURRENT_NOTE", payload: ""});
    expect(nextState.currentNote).toBe("");
    console.log(postState);
    console.log(nextState);
})




test("CLEAR_NOTES", ()=>{
    const postState: PostState = {
        currentNote: "",
        allNotes: []
    }

    const nextState = postReducer(postState, {type:"CLEAR_NOTES"});
    expect(nextState.allNotes).toBe([]);
    console.log(postState)
    console.log(nextState)
})
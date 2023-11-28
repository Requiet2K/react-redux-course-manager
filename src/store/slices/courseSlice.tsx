import { createSlice, nanoid } from "@reduxjs/toolkit";
import { courseState } from "../../propsTypes/courseState";

const initialState: courseState = {
    searchTerm: "",
    data: [],
}

const courseSlice = createSlice({
    name: "course",
    initialState,
    reducers:{
        addCourse(state,action){
            state.data.push({
                name: action.payload.name,
                description: action.payload.description,
                cost: action.payload.cost,
                id: nanoid(),
            })
        },
        removeCourse(state,action){
            const updatedArr = state.data.filter((item) => {
                return item.id !== action.payload
            })
            state.data = updatedArr;
        },
        searchCourse(state,action){
            state.searchTerm = action.payload;
        }
    }
});

export const {addCourse, removeCourse, searchCourse} = courseSlice.actions;
export const courseReducer = courseSlice.reducer;


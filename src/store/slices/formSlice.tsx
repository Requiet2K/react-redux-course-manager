import { createSlice } from "@reduxjs/toolkit";
import { formState } from "../../propsTypes/courseState";
import { addCourse } from "./courseSlice";

const initialState: formState = {
    name: "",
    description: "",
    cost: undefined,
}

const formSlice = createSlice({
    name: "form",
    initialState,
    reducers: {
        changeName(state,action){
            state.name = action.payload;
        },
        changeDescription(state,action){
            state.description = action.payload;
        },
        changeCost(state,action){
            state.cost = action.payload;
        }
    },
    extraReducers:(builder) => {
        builder.addCase(addCourse, (state) => {
            state.name = "";
            state.description = "";
            state.cost= undefined;
        });
    }
});

export const{changeName,changeDescription,changeCost} = formSlice.actions;
export const formReducer = formSlice.reducer;
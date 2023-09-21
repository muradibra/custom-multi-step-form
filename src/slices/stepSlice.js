import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentStep: 1,
    list: [
        {
            index: 1,
            text: "Step 1"
        },
        {
            index: 2,
            text: "Step 2"
        },
        {
            index: 3,
            text: "Step 3"
        },
        {
            index: 4,
            text: "Step 4"
        },
    ],
    step1: {
        firstname: "",
        lastname: ""
    },
    step2: {
        email: "",
        phone: ""
    },
    step3: {
        start_date: "",
        end_date: ""
    }
}

export const stepSlice = createSlice({
    name: "step",
    initialState,
    reducers: {
        nextStep: (state) => {
            state.currentStep += 1
        },
        prevStep: (state) => {
            state.currentStep -= 1
        },
        goToSelectedStep: (state, action) => {
            state.currentStep = action.payload
        },
        updateStep: (state, action) => {
            const { stateName, field, value } = action.payload
            state[stateName][field] = value
        }
    }
})

export const {
    prevStep,
    nextStep,
    goToSelectedStep,
    updateStep,
} = stepSlice.actions

export default stepSlice.reducer
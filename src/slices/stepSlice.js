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
        fullname: "",
        username: ""
    },
    step2: {
        email: "",
        password: ""
    },
    step3: {
        age: "",
        experience: ""
    },
    step4: {
        fullname: "",
        username: "",
        email: "",
        password: "",

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
        setStep1: (state, action) => {
            state.step1 = {
                ...state.step1,
                ...action.payload
            }
        },
        setStep2: (state, action) => {
            state.step2 = {
                ...state.step2,
                ...action.payload
            }
        },
        setStep3: (state, action) => {
            state.step3 = {
                ...state.step3,
                ...action.payload
            }
        }
    }
})

export const {
    prevStep,
    nextStep,
    goToSelectedStep,
    setStep1,
    setStep2,
    setStep3
} = stepSlice.actions

export default stepSlice.reducer
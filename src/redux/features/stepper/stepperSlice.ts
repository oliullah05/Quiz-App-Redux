import { createSlice } from "@reduxjs/toolkit"



type TInitialState ={
    activeStep:number
}

const initialState:TInitialState = {
    activeStep:0
}

const stepperSlice = createSlice({
    initialState,
    name:"stepper",
   reducers:{
    setActiveStep:(state,action)=>{
     state.activeStep=action.payload
    }
   }
})

export const {setActiveStep}=stepperSlice.actions

export default stepperSlice.reducer
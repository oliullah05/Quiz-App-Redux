import { createSlice } from "@reduxjs/toolkit";


type TQuiz = {
    module: string,
    question: string,
    description: string,
    options: string[],
    correctOption: string
}

type TQuizInitialState = {
    quiz: TQuiz[]
}

type TAction = {
    payload:TQuiz
}


const initialState: TQuizInitialState = {
    quiz: []

}


const quizSlice = createSlice({
    name: "quiz",
    initialState,

    reducers: {
        addQuiz: (state, action:TAction) => {
            state.quiz.push(action.payload)
        }
    }
})


export const {addQuiz}= quizSlice.actions

export default quizSlice.reducer
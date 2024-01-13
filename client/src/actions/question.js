import React from 'react'

import * as api from '../api'

export const askQuestion = (questionData, navigate) => async (dispatch) =>  {
  try{
    const { data } = await api.postQuestion(questionData)
    dispatch({ type: "POST_QUESTION", payload: data})
    dispatch(fetchAllQuestions())
    navigate('/')
  } catch (error) {
    console.log(error)
  }
}
export const fetchAllQuestions = () => async (dispatch) => {
    try{
      console.log("fetched data")
        const {data} = await api.getAllQuestions()
        dispatch({type: 'FETCH_ALL_QUESTIONS', payload: data})
    } catch(error) {
        console.log(error)
    }
}

export const deleteQuestions = (id, navigate) => async (dispatch) => {
  try{
    const {data} = api.deleteQuestions(id)
    dispatch(fetchAllQuestions())
    navigate('/')
  }catch(error){
console.log(error)
  }
}

  export const voteQuestion = (id, value, userId) => async (dispatch) => {
    try{
      const {data} = await api.voteQuestion(id, value, userId)
    }catch(error){
console.log(error)
    }
  }

export const postAnswer = (answerdata) => async (dispatch) => {
  try{
    const {id, noOfAnsweres, answerBody, userAnswered, userId} = answerdata
    const { data } = await api.postAnswer( id, noOfAnsweres, answerBody, userAnswered, userId)
    dispatch({ type: 'POST_ANSWER', payload: data})
    dispatch(fetchAllQuestions())
}catch (error){
  console.log(error)
}
}

export const deleteAnswer = (id, answerId, noOfAnsweres) => async (dispatch) => {
  try{
    const {data} = await api.deleteAnswer(id, answerId, noOfAnsweres)
    dispatch(fetchAllQuestions())
  }catch(error){
console.log(error)
  }
}
import axios from 'axios'


const API = axios.create({ baseURL: 'http://localhost:5000'})

API.interceptors.request.use((req) => {
    if(localStorage.getItem('profile')){
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('Profile')).token}`
    }
    return req;
})

export const logIn = (authData) => API.post('/user/login', authData);
export const signUp = (authData) =>  API.post('/user/signup', authData);


export const postQuestion = (questionData) => API.post('/questions/Ask', questionData)
export const getAllQuestions = () => API.get('/questions/get');
export const deleteQuestions = (id) => API.delete(`/questions/delete/${id}`)
export const voteQuestion = (id, value, userId) => API.patch(`questions/vote/${id}`, { value, userId})

export const postAnswer = (id, noOfAnsweres, answerBody, userAnswered,userId) => API.patch(`/answer/post/${id}`, { noOfAnsweres, answerBody, userAnswered, userId})
export const deleteAnswer = (id, answerId, noOfAnsweres) => API.patch(`/answer/delete/${id}`, {answerId, noOfAnsweres})

export const fetchAllUsers = () => API.get('/user/getAllUsers');
export const updateProfile = (id, updateData) => API.patch(`/user/update/${id}`, updateData)
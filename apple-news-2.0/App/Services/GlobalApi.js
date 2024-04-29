// showLastCommitMessageForThisLibrary.js
import { create } from 'apisauce'

// define the api
const api = create({
  baseURL: 'https://newsapi.org/v2',
})
const apiKey = '?country=ca&apiKey=d98bee827c2c4b32bdc791563308f1b4'
const getTopHeadline=api.get('/top-headlines'+apiKey);

const getByCategory=(category) => api.get('/everything?q=' + category + '&apiKey=d98bee827c2c4b32bdc791563308f1b4');//
// const getByCategory=(category) => api.get('/everything?q=sports&apiKey=d98bee827c2c4b32bdc791563308f1b4');//
export default {
    getTopHeadline,
    getByCategory
}
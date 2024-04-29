// showLastCommitMessageForThisLibrary.js
import { create } from 'apisauce'

// define the api
const api = create({
  baseURL: 'https://newsapi.org/v2',
})
const apiKey = '?country=us&apiKey=d98bee827c2c4b32bdc791563308f1b4'
const getTopHeadline=api.get('/top-headlines'+apiKey);

export default {
    getTopHeadline
}
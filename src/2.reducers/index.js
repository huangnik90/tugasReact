import {combineReducers} from 'redux'

import Todo from './todoList'
import User from './userGlobal'
import WordCount from './wordCount'
import CountWord from './countWordGlobal'

export default combineReducers({
    list : Todo,
    user : User,
    word : WordCount,
    jumlah : CountWord
})
import React, { useReducer } from 'react'
import githubContext from './githubContext'
import githubReducer from './githubReducer'
import axios from 'axios'
import { SEARCH_USERS, SET_LOADING, GET_REPOS, GET_USER, CLEAR_USERS } from '../types'

const GithubState = () => {
    const initialState = {
        users: [],
        user: {},
        loading: false,
        repos: []
    }
}
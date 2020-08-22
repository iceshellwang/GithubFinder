import React, { useReducer } from 'react'
import GithubContext from './githubContext'
import GithubReducer from './githubReducer'
import axios from 'axios'
import { SEARCH_USERS, SET_LOADING, GET_REPOS, GET_USER, CLEAR_USERS } from '../types'

const GithubState = props => {
    const initialState = {
        users: [],
        user: {},
        loading: false,
        repos: []
    }

    const [state, dispatch] = useReducer(GithubReducer, initialState)

    //actions
    const searchUsers = async (text) => {
        setLoading()
        const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
        &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
        dispatch({ type: SEARCH_USERS, payload: res.data.items })

    };

    // const getUserRepos = async (username) => {
    //     setLoading(true)
    //     const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
    //   &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    //     setRepos(res.data)
    //     dispatch({ type: GET_REPOS, payload: res.data })

    // };
    //clear users

    const setLoading = () => {
        dispatch({ type: SET_LOADING })
    }

    return <GithubContext.Provider
        value={{
            users: state.users,
            user: state.user,
            repos: state.repos,
            loading: state.loading,
            searchUsers,

        }}
    >
        {props.children}

    </GithubContext.Provider>
}
export default GithubState
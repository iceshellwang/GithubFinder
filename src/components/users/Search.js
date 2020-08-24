import React, { useState, useContext } from 'react'
import PropTypes from 'prop-types'
import GithubContext from '../context/github/githubContext'
import Users from './Users'

const Search = ({ setAlert }) => {
    const [text, setText] = useState('')
    const githubContext = useContext(GithubContext)
    const onChange = (e) => {
        setText(e.target.value)
    }
    const onSubmit = (e) => {
        e.preventDefault()
        if (text === '') {
            setAlert('please input something', 'light')
        }
        else {
            githubContext.searchUsers(text)
            setText('')
        }
    }

    return (
        <div>
            <form onSubmit={onSubmit} className='form'>
                <input type='text' placeholder='search users...' name='text' onChange={onChange}
                    value={text}></input>
                <input type='submit' className='btn btn-dark btn-block' value='search'></input>
            </form>
            {githubContext.users.length > 0 ?
                <button className='btn btn-light btn-block' onClick={githubContext.clearUsers}></button> : null}


        </div>
    )

}

Search.propTypes = {
    setAlert: PropTypes.func.isRequired,
}

export default Search

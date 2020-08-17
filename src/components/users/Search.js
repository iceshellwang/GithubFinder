import React, { useState } from 'react'
import PropTypes from 'prop-types'

const Search = ({ searchUsers, showClear, clearUsers }) => {
    const [text, setText] = useState('')

    const onChange = (e) => {
        setText(e.target.value)
    }
    const onSubmit = (e) => {
        e.preventDefault()
        if (this.state.text === '') {
            this.props.setAlert('please input something', 'light')
        }
        else {
            this.props.searchUsers(this.state.text)
            this.setState({ text: '' })
        }
    }

    return (
        <div>
            <form onSubmit={onSubmit} className='form'>
                <input type='text' placeholder='search users...' name='text' onChange={onChange}
                    value={text}></input>
                <input type='submit' className='btn btn-dark btn-block' value='search'></input>


            </form>
            {showClear ?
                <button className='btn btn-light btn-block' onClick={clearUsers}></button> : null}


        </div>
    )

}

Search.propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired,
}

export default Search

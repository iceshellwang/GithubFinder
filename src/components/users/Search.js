import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Search extends Component {
    state = {
        text: ''
    }
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    onSubmit = (e) => {
        e.preventDefault()
        this.props.searchUsers(this.state.text)
        this.setState({ text: '' })
    }
    static propTypes = {
        searchUsers: PropTypes.func.isRequired,
        clearUsers: PropTypes.func.isRequired,
        showClear: PropTypes.bool.isRequired,
    }
    render() {
        const { showClear, clearUsers } = this.props
        return (
            <div>
                <form onSubmit={this.onSubmit} className='form'>
                    <input type='text' placeholder='search users...' name='text' onChange={this.onChange}
                        value={this.state.text}></input>
                    <input type='submit' className='btn btn-dark btn-block' value='search'></input>


                </form>
                {showClear ?
                    <button className='btn btn-light btn-block' onClick={clearUsers}></button> : null}


            </div>
        )
    }
}

export default Search

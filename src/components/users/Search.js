import React, { Component } from 'react'

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
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit} className='form'>
                    <input type='text' placeholder='search users...' name='text' onChange={this.onChange}
                        value={this.state.text}></input>
                    <input type='submit' className='btn btn-dark btn-block' value='search'></input>


                </form>
            </div>
        )
    }
}

export default Search

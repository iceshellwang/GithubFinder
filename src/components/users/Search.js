import React, { Component } from 'react'

export class Search extends Component {
    state = {
        text: ''
    }
    onChange = (e) => {
        this.setState({ text: e.target.value })
    }
    render() {
        return (
            <div>
                <form className='form'>
                    <input type='text' placeholder='search users...' name='text' onChange={this.onChange}
                        value={this.state.text}></input>
                    <input type='submit' className='btn btn-dark btn-block' value='search'></input>


                </form>
            </div>
        )
    }
}

export default Search

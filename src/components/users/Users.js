import React, { Component } from 'react'

class Users extends Component {
    state = {
        users: [
            {
                "login": "mojombo",
                "id": 1,
                "node_id": "MDQ6VXNlcjE=",
                "avatar_url": "https://avatars0.githubusercontent.com/u/1?v=4",
            },
            {
                "login": "defunkt",
                "id": 2,
                "node_id": "MDQ6VXNlcjI=",
                "avatar_url": "https://avatars0.githubusercontent.com/u/2?v=4",
            },
            {
                "login": "pjhyett",
                "id": 3,
                "node_id": "MDQ6VXNlcjM=",
                "avatar_url": "https://avatars0.githubusercontent.com/u/3?v=4",
            }
        ]
    }
    render() {
        return (
            <div>
                {
                    this.state.users.map(user => (
                        <div key={user.id}>{user.login}</div>
                    ))
                }
            </div>
        )
    }
}

export default Users

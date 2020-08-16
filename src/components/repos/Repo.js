import React from 'react'

export const Repo = ({ repos }) => {
    return (
        repos.map(repo => <RepoItem repo={repo} key={repo.id} />)
    )
}

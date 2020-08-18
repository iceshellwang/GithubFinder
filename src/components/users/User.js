import React, { Fragment, useEffect } from 'react';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Repos from '../repos/Repos'
const User = ({ user, loading, repos, match, getUser, getUserRepos }) => {
  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);

  }, [])


  const {
    name,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    company,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user;
  //const {} = this.props;
  if (loading) return <Spinner />;

  return (
    <Fragment>
      <Link to='/' className='btn btn-light'>
        Back to search
        </Link>
       hireable {' '}
      {hireable ? <i className='fas fa-check text-success' /> :
        <i className='fas fa-times-circle text-danger' />}
      <div className='card grid-2'>
        <div className='all-center'>
          <img src={avatar_url} style={{ width: '150px' }} className='round-img' alt=""></img>
          <h1>{name}</h1>
          <p>Location:{location}</p>

        </div>
        <div>
          {bio && (<Fragment>
            <h3>Bio</h3>
            <p>{bio}</p></Fragment>)}
          <a href={html_url} className='btn btn-dark my-1'>
            Visit Github Profile
              </a>
          <ul>
            <li>
              {login && <Fragment>
                <strong>
                  Username:
                    </strong>{login}
              </Fragment>}
            </li>
            <li>
              {login && <Fragment>
                <strong>
                  Company:
                    </strong>{company}
              </Fragment>}
            </li>
            <li>
              {login && <Fragment>
                <strong>
                  Website:
                    </strong>{blog}
              </Fragment>}
            </li>
          </ul>
        </div>
      </div>
      <div className='card text-center'>
        <div className='badge badge-primary'>Followers:{followers}</div>
        <div className='badge badge-success'>Following:{following}</div>
        <div className='badge badge-light'>Public Repos:{public_repos}</div>
        <div className='badge badge-dark'>Public Gists:{public_gists}</div>
      </div>
      <Repos repos={repos} />
    </Fragment>
  );

}

User.propsTypes = {
  loading: PropTypes.bool,
  user: PropTypes.object.isRequired,
  getUser: PropTypes.func.isRequired,
  getUserRepos: PropTypes.func.isRequired,
  repos: PropTypes.array.isRequired,
};

export default User;

import React, { Component } from "react";

import PropTypes from "prop-types";
import styles from "./GithubApi.module.css";

class ProfileGithub extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clientId: "ab0320f69226d51f5a4f",
      clientSecret: "756bb015d0e78f6bd8433248e55b0521d01ea9ef",
      count: 5,
      sort: "created: asc",
      repos: []
    };
  }

  componentDidMount() {
    const { username } = this.props;
    const { count, sort, clientId, clientSecret } = this.state;

    fetch(
      `https://api.github.com/users/${username}/repos?per_page=${count}&sort=${sort}&client_id=${clientId}&client_secret=${clientSecret}`
    )
      .then(res => res.json())
      .then(data => {
        if (this.refs.myRef) {
          this.setState({ repos: data });
        }
      })
      .catch(err => console.log(err));
  }

  render() {
    const { repos } = this.state;

    const repoItems = repos.map(repo => (
      <div key={repo.id} className="repo  p-1 my-1">
        <div>
          <h3>
            <a
              className={`${styles.github}`}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {repo.name}
            </a>
          </h3>
          <p>{repo.description}</p>
        </div>
        <div>
          <ul>
            <li className="badge badge-primary">
              Stars: {repo.stargazers_count}
            </li>
            &nbsp;
            <li className="badge badge-dark">
              Watchers: {repo.watchers_count}
            </li>
            &nbsp;
            <li className="badge badge-light">Forks: {repo.forks_count}</li>
          </ul>
        </div>
      </div>
    ));
    return <div ref="myRef">{repoItems}</div>;
  }
}

ProfileGithub.propTypes = {
  username: PropTypes.string.isRequired
};

export default ProfileGithub;

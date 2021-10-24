import { useEffect, useState } from 'react';
import { FiLink, FiStar } from 'react-icons/fi';
import { CgGitFork } from 'react-icons/cg';
import { Container, Repository } from '../styles/components/UserRepos';
import { api } from '../services/api';

interface IUserReposProps {
  username: string;
}

interface IReposProps {
  id: number;
  name: string;
  description: string;
  html_url: string;
  forks: number;
  stargazers_count: number;
}

export function UserRepos({ username }: IUserReposProps) {
  const [repos, setRepos] = useState<IReposProps[]>();

  useEffect(() => {
    api.get(`/users/${username}/repos`).then(({ data }) => {
      setRepos(data);
    });
  }, [username]);

  return (
    <Container>
      {repos &&
        repos.map(repo => (
          <Repository>
            <div className="card-header">
              <h3>{repo.name}</h3>
              <a href={repo.html_url} target="_blank" rel="noreferrer">
                <FiLink size={15} />
              </a>
            </div>
            <p>{repo.description}</p>

            <div className="card-info">
              <span>
                <CgGitFork size={15} />
                {repo.forks}
              </span>
              <span>
                <FiStar size={15} />
                {repo.stargazers_count}
              </span>
            </div>
          </Repository>
        ))}
    </Container>
  );
}

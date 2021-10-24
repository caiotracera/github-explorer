import { useEffect, useState } from 'react';
import { FiClock, FiLink, FiStar } from 'react-icons/fi';
import { CgGitFork } from 'react-icons/cg';
import { format, parseISO } from 'date-fns';
import Loader from 'react-loader-spinner';

import { api } from '../services/api';

import {
  Container,
  LoadingContainer,
  Repository,
} from '../styles/components/UserRepos';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

interface IUserReposProps {
  username: string;
}

interface IRepoProps {
  id: number;
  name: string;
  description: string;
  html_url: string;
  forks: number;
  stargazers_count: number;
  pushed_at: string;
  formatedDate: string;
}

export function UserRepos({ username }: IUserReposProps) {
  const [repos, setRepos] = useState<IRepoProps[]>();

  useEffect(() => {
    api.get(`/users/${username}/repos`).then(({ data }) => {
      const allRepos = (data as IRepoProps[]).map((repo: IRepoProps) => ({
        ...repo,
        formatedDate: format(parseISO(repo.pushed_at), 'dd/MM/yyyy'),
      }));

      setRepos(allRepos);
    });
  }, [username]);

  return (
    <Container>
      {repos ? (
        repos.map(repo => (
          <Repository key={repo.id}>
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
              <span>
                <FiClock size={15} />
                {repo.formatedDate}
              </span>
            </div>
          </Repository>
        ))
      ) : (
        <LoadingContainer>
          <Loader
            type="MutatingDots"
            color="#00BFFF"
            height={100}
            width={100}
          />
        </LoadingContainer>
      )}
    </Container>
  );
}

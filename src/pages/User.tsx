import { useEffect, useState } from 'react';
import { Route, Switch, useHistory, useParams } from 'react-router-dom';
import { FiChevronLeft, FiGlobe } from 'react-icons/fi';

import { api } from '../services/api';
import { Footer } from '../components/Footer';
import { UserDetails } from '../components/UserDetails';

import { Container, Content } from '../styles/pages/User';
import { UserRepos } from '../components/UserRepos';
import { UserList } from '../components/UserList';

interface ParamsProps {
  username: string;
}

interface UserProps {
  login: string;
  avatar_url: string;
  bio: string;
  name: string;
  followers: number;
  following: number;
  public_repos: number;
  html_url: string;
}

export function User() {
  const { username } = useParams<ParamsProps>();
  const history = useHistory();
  const [user, setUser] = useState<UserProps>();

  useEffect(() => {
    api.get(`/users/${username}`).then(({ data }) => {
      setUser(data);
    });
  }, [username]);

  return (
    <div className="container">
      <Container>
        <header>
          <nav>
            <FiChevronLeft size={20} onClick={() => history.goBack()} />
            <p>{username}</p>
            <a
              href={user?.html_url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FiGlobe size={20} />
            </a>
          </nav>

          <img src={user?.avatar_url} alt={user?.name} />
        </header>
        <Content>
          <h1>{user?.name}</h1>
          <p>{user?.bio}</p>

          <Switch>
            <Route exact path={`/users/${username}`}>
              {user && <UserDetails user={user as UserProps} />}
            </Route>
            <Route path={`/users/${username}/repos`}>
              {user && <UserRepos username={user.login} />}
            </Route>
            <Route path={`/users/${username}/followers`}>
              {user && <UserList endpoint={`/users/${user.login}/followers`} />}
            </Route>
            <Route path={`/users/${username}/following`}>
              {user && <UserList endpoint={`/users/${user.login}/following`} />}
            </Route>
          </Switch>
        </Content>
      </Container>
      <Footer />
    </div>
  );
}

import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { FiBook, FiChevronLeft, FiGlobe, FiUsers } from 'react-icons/fi';

import { api } from '../services/api';
import { UserMenuItem } from '../components/UserMenuItem';
import { Footer } from '../components/Footer';

import { Container, Content, UserMenu } from '../styles/pages/UserDetails';

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

export function UserDetails() {
  const { username } = useParams<ParamsProps>();
  const history = useHistory();
  const [user, setUser] = useState<UserProps>();

  useEffect(() => {
    api.get(`/users/${username}`).then(({ data }) => setUser(data));
  }, [username]);

  return (
    <div className="container">
      <Container>
        <header>
          <nav>
            <FiChevronLeft size={20} onClick={() => history.goBack()} />
            <p>{username}</p>
            <a href={user?.html_url} target="_blank" rel="noopener noreferrer">
              <FiGlobe size={20} />
            </a>
          </nav>

          <img src={user?.avatar_url} alt={user?.name} />
        </header>
        <Content>
          <h1>{user?.name}</h1>
          <p>{user?.bio}</p>
          <UserMenu>
            <UserMenuItem
              Icon={FiBook}
              text={`${user?.public_repos} repositories`}
            />

            <UserMenuItem
              Icon={FiUsers}
              text={`${user?.followers} followers`}
            />

            <UserMenuItem
              Icon={FiUsers}
              text={`${user?.following} following`}
            />
          </UserMenu>
        </Content>
      </Container>
      <Footer />
    </div>
  );
}

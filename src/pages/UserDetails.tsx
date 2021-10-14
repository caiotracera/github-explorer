import { useParams, useHistory } from 'react-router-dom';
import { FiChevronLeft, FiGlobe } from 'react-icons/fi';

import { useEffect, useState } from 'react';
import { Container, Content } from '../styles/pages/UserDetails';
import { api } from '../services/api';
import { Footer } from '../components/Footer';

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

  console.log(user);

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
        </Content>
      </Container>
      <Footer />
    </div>
  );
}

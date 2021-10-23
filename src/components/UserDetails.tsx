import { useCallback } from 'react';
import { FiBook, FiUsers } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';

import { UserMenuItem } from './UserMenuItem';

import { Container } from '../styles/components/UserDetails';

interface IUserDetailsProps {
  user: {
    login: string;
    public_repos: number;
    followers: number;
    following: number;
  };
}

export function UserDetails({ user }: IUserDetailsProps) {
  const history = useHistory();

  const handleClickRepositories = useCallback(() => {
    history.push(`/users/${user.login}/repos`);
  }, [history, user.login]);

  const handleClickFollowers = useCallback(() => {
    history.push(`/users/${user.login}/followers`);
  }, [history, user.login]);

  const handleClickFollowing = useCallback(() => {
    history.push(`/users/${user.login}/following`);
  }, [history, user.login]);

  return (
    <Container>
      <UserMenuItem
        Icon={FiBook}
        text={`${user?.public_repos} repositories`}
        onClick={handleClickRepositories}
      />

      <UserMenuItem
        Icon={FiUsers}
        text={`${user?.followers} followers`}
        onClick={handleClickFollowers}
      />

      <UserMenuItem
        Icon={FiUsers}
        text={`${user?.following} following`}
        onClick={handleClickFollowing}
      />
    </Container>
  );
}

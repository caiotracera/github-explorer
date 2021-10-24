import { useEffect, useState } from 'react';
import { FiLink } from 'react-icons/fi';

import { api } from '../services/api';
import { Container, ListItem } from '../styles/components/UserList';

interface IUserListProps {
  endpoint: string;
}

interface IListProps {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
}

export function UserList({ endpoint }: IUserListProps) {
  const [list, setList] = useState<IListProps[]>();
  useEffect(() => {
    api.get(endpoint).then(({ data }) => setList(data));
  }, [endpoint]);

  return (
    <Container>
      {list &&
        list.map(item => (
          <ListItem key={item.id}>
            <div>
              <img src={item.avatar_url} alt={item.login} />
              {item.login}
            </div>
            <a
              href={item.html_url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FiLink size={15} />
            </a>
          </ListItem>
        ))}
    </Container>
  );
}

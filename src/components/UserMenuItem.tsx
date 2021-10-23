import { IconType } from 'react-icons';

import { Container } from '../styles/components/UserMenuItem';

interface UserMenuItemProps {
  Icon: IconType;
  text: string;
}

export function UserMenuItem({ Icon, text }: UserMenuItemProps) {
  return (
    <Container>
      <Icon size={20} />
      {text}
    </Container>
  );
}

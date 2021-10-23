import { IconType } from 'react-icons';

import { Container } from '../styles/components/UserMenuItem';

interface UserMenuItemProps {
  Icon: IconType;
  text: string;
  onClick?: () => void;
}

export function UserMenuItem({ Icon, text, onClick }: UserMenuItemProps) {
  return (
    <Container onClick={onClick}>
      <Icon size={20} />
      {text}
    </Container>
  );
}

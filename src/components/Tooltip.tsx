import { ReactNode } from 'react';
import { Container } from '../styles/components/Tooltip';

interface TooltipProps {
  title: string;
  className?: string;
  children: ReactNode;
}

export function Tooltip({ title, className, children }: TooltipProps) {
  return (
    <Container className={className}>
      {children}
      <span>{title}</span>
    </Container>
  );
}

import { forwardRef, InputHTMLAttributes, LegacyRef, useState } from 'react';
import { FiAlertTriangle } from 'react-icons/fi';

import { Container } from '../styles/components/Input';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const InputBase = (
  { label, ...props }: InputProps,
  ref: LegacyRef<HTMLInputElement> | undefined
) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  return (
    <>
      <label htmlFor={props.name}>{label}</label>
      <Container isFocused={isFocused} isFilled={isFilled} isErrored={false}>
        <input {...props} ref={ref} />
        <FiAlertTriangle />
      </Container>
    </>
  );
};

export const Input = forwardRef(InputBase);

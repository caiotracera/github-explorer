import { InputHTMLAttributes, useCallback, useRef, useState } from 'react';
import { UseFormReturn } from 'react-hook-form';
import { FiAlertTriangle } from 'react-icons/fi';

import { Container, Error } from '../styles/components/Input';

interface InputProps
  extends InputHTMLAttributes<HTMLInputElement>,
    Pick<UseFormReturn, 'register'> {
  label: string;
  name: string;
  customError?: string;
}

export function Input({
  label,
  name,
  customError,
  register,
  ...props
}: InputProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const { ref, ...rest } = register(name);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
    setIsFilled(!!inputRef.current?.value);
  }, []);

  return (
    <>
      <label htmlFor={name}>{label}</label>
      <Container
        isFocused={isFocused}
        isFilled={isFilled}
        isErrored={!!customError}
      >
        <input
          {...props}
          {...rest}
          onBlur={handleInputBlur}
          onFocus={() => setIsFocused(true)}
          ref={e => {
            ref(e);
            inputRef.current = e;
          }}
        />
        {customError && (
          <Error title={customError}>
            <FiAlertTriangle color="var(--danger)" size={20} />
          </Error>
        )}
      </Container>
    </>
  );
}

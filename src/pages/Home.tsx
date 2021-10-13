/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { ReactComponent as GitHub } from '../assets/images/github.svg';
import { Input } from '../components/Input';
import { api } from '../services/api';

import {
  Container,
  SearchContainer,
  SearchButton,
  Footer,
} from '../styles/pages/Home';

interface SearchFormData {
  username: string;
}

export function Home() {
  const [error, setError] = useState('');
  const { handleSubmit, register } = useForm();

  async function onSubmit({ username }: SearchFormData) {
    try {
      const { data } = await api.get(`/users/${username}`);
      setError('');
    } catch (e: any) {
      if (e.response.status === 404) {
        setError('User not found');
        return;
      }

      setError('Something went wrong! Try again...');
    }
  }

  return (
    <Container>
      <GitHub />
      <h1>Github Explorer</h1>
      <SearchContainer onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="Username"
          name="username"
          register={register}
          type="text"
          placeholder="Username"
          customError={error}
        />

        <SearchButton type="submit">Search</SearchButton>
      </SearchContainer>
      <Footer>
        <p>
          Made with 💖 by{' '}
          <a href="https://www.linkedin.com/in/caiotracera/">Caio</a>.
        </p>
      </Footer>
    </Container>
  );
}

import styled from '@emotion/styled';
import React from 'react';
import useStore from '../store';

const Input = styled.input`
  padding: 0.2rem;
  width: 100%;
  font-size: large;
`;

const PokemonFilter = () => {
  const filter = useStore((state) => state.filter);
  const setFilter = useStore((state) => state.setFilter);

  return (
    <Input
      type="text"
      value={filter}
      onChange={(e) => setFilter(e.target.value)}
    />
  );
};

export default PokemonFilter;

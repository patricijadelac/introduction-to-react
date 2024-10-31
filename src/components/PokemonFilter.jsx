import styled from '@emotion/styled';
import React, { useContext } from 'react';

import PokemonContext from '../PokemonContext';

const Input = styled.input`
  padding: 0.2rem;
  width: 100%;
  font-size: large;
`;

const PokemonFilter = () => {
  const { filter, filterSet } = useContext(PokemonContext);

  return (
    <Input
      type="text"
      value={filter}
      onChange={(e) => filterSet(e.target.value)}
    />
  );
};

export default PokemonFilter;

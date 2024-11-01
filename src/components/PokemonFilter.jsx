import styled from '@emotion/styled';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Input = styled.input`
  padding: 0.2rem;
  width: 100%;
  font-size: large;
`;

const PokemonFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter);

  return (
    <Input
      type="text"
      value={filter}
      onChange={(e) =>
        dispatch({ type: 'SET_FILTER', payload: e.target.value })
      }
    />
  );
};

export default PokemonFilter;

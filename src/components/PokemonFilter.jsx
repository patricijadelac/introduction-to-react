import styled from '@emotion/styled';
import { observer } from 'mobx-react';
import React from 'react';
import store from '../store';

const Input = styled.input`
  padding: 0.2rem;
  width: 100%;
  font-size: large;
`;

const PokemonFilter = () => (
  <Input
    type="text"
    value={store.filter}
    onChange={(e) => store.setFilter(e.target.value)}
  />
);

export default observer(PokemonFilter);

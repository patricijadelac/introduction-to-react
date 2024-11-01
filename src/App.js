import React from 'react';
import styled from '@emotion/styled';
import { CssBaseline } from '@mui/material';

import PokemonFilter from './components/PokemonFilter';
import PokemonInfo from './components/PokemonInfo';
import PokemonTable from './components/PokemonTable';

import PokemonContext from './PokemonContext';

// --- useReducer hook ---
// useReducer is a React hook for managing state in functional components
// It is preferred for complex state logic involving multiple sub-values or when the next state depends on the previous one
// It takes a reducer function and an initial state as arguments
// The reducer function receives the current state and an action, returning the new state based on the action type
//
// Benefits of useReducer:
// - Better organization of state logic, especially for complex states
// - Easier to test and debug compared to useState
// - Allows for more predictable state transitions
//
// Usage:
// const [state, dispatch] = useReducer(reducerFunction, initialState);
// dispatch({ type: 'ACTION_TYPE', payload: data }) - to update the state

const pokemonReducer = (state, action) => {
  switch (action.type) {
    case 'SET_FILTER':
      return {
        ...state,
        filter: action.payload,
      };
    case 'SET_POKEMON':
      return {
        ...state,
        pokemon: action.payload,
      };
    case 'SET_SELECTED_POKEMON':
      return {
        ...state,
        selectedPokemon: action.payload,
      };
    default:
      return new Error('No action');
  }
};

const PageContainer = styled.div`
  margin: auto;
  padding-top: 1rem;
  width: 800px;
`;

const Title = styled.h1`
  text-align: center;
`;

const TwoColumnLayout = styled.div`
  display: grid;
  grid-template-columns: 70% 30%;
  column-gap: 1rem;
`;

function App() {
  const [state, dispatch] = React.useReducer(pokemonReducer, {
    pokemon: [],
    filter: '',
    selectedPokemon: null,
  });

  React.useEffect(() => {
    fetch('/introduction-to-react/pokemon.json')
      .then((resp) => resp.json())
      .then((data) => dispatch({ type: 'SET_POKEMON', payload: data }));
  }, []);

  if (!state.pokemon) {
    return <div>Loading data</div>;
  }

  return (
    <PokemonContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      <PageContainer>
        <CssBaseline />
        <Title>Pokemon Search</Title>
        <TwoColumnLayout>
          <div>
            <PokemonFilter />
            <PokemonTable />
          </div>
          <PokemonInfo />
        </TwoColumnLayout>
      </PageContainer>
    </PokemonContext.Provider>
  );
}

export default App;

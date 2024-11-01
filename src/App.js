import React from 'react';
import styled from '@emotion/styled';
import { CssBaseline } from '@mui/material';
import { createStore } from 'redux';
import { Provider, useDispatch, useSelector } from 'react-redux';

import PokemonFilter from './components/PokemonFilter';
import PokemonInfo from './components/PokemonInfo';
import PokemonTable from './components/PokemonTable';

// --- Redux ---
// Redux is a predictable state management library for JavaScript applications, commonly used with React
// It centralizes the application's state in a single store, allowing for easier management and debugging
//
// Key Concepts:
// 1. Store: The single source of truth for the application's state. It holds the entire state tree.
// 2. Actions: Plain JavaScript objects that describe what happened in the application. Each action must have a 'type' property.
// 3. Reducers: Pure functions that take the current state and an action as arguments, and return a new state. They specify how the state changes in response to actions.
// 4. Dispatch: A function used to send actions to the store. It triggers the reducer to update the state based on the action.
// 5. Selectors: Functions that extract specific pieces of state from the store, allowing components to access only the data they need.
//
// Using Redux in React:
// - Wrap your application in a `<Provider>` component, passing the store as a prop. This makes the Redux store available to all components.
// - Use the `useDispatch` hook to get the dispatch function, allowing you to send actions to the store.
// - Use the `useSelector` hook to access the state from the store, enabling components to react to state changes.
//
// Redux promotes a unidirectional data flow, making it easier to understand how data changes over time and improving the maintainability of your application

const pokemonReducer = (
  state = {
    pokemon: [],
    filter: '',
    selectedPokemon: null,
  },
  action
) => {
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
      return state;
  }
};

const store = createStore(pokemonReducer);

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
  const dispatch = useDispatch();
  const pokemon = useSelector((state) => state.pokemon);

  React.useEffect(() => {
    fetch('/introduction-to-react/pokemon.json')
      .then((resp) => resp.json())
      .then((payload) => dispatch({ type: 'SET_POKEMON', payload }));
  }, [dispatch]);

  if (!pokemon) {
    return <div>Loading data</div>;
  }

  return (
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
  );
}

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default Root;

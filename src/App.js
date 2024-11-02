import React from 'react';
import styled from '@emotion/styled';
import { CssBaseline } from '@mui/material';

import PokemonFilter from './components/PokemonFilter';
import PokemonInfo from './components/PokemonInfo';
import PokemonTable from './components/PokemonTable';

// --- MobX ---
// MobX is a state management library that makes it simple to manage application state in React
// It uses observable state, which allows components to automatically react to changes in the state
//
// Key concepts include:
// - Observables: State that can be observed and will trigger updates in components when changed
// - Actions: Functions that modify the state - they are used to encapsulate state changes
// - Computed values: Derivations of state that are automatically updated when the underlying observables change
// - Reactions: Side effects that run in response to state changes, such as rendering components or triggering API calls
//
// MobX promotes a more functional approach to state management, reducing boilerplate code compared to other libraries like Redux
// To use MobX, you typically need to install the `mobx` and `mobx-react` packages and set up a store to manage your application's state

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

export default App;

import React from 'react';
import styled from '@emotion/styled';
import { CssBaseline } from '@mui/material';

import PokemonFilter from './components/PokemonFilter';
import PokemonInfo from './components/PokemonInfo';
import PokemonTable from './components/PokemonTable';

// --- Zustand ---
// A lightweight state management solution for React
//
// Key Features:
// - Lightweight: Minimalistic design with a small footprint
// - React hooks: Utilizes React hooks for a natural integration in functional components
// - No boilerplate: Simple setup without extensive configuration, making it easy to get started
// - Flexible: Supports both local and global state management

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

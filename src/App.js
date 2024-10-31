import styled from '@emotion/styled';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';
import React from 'react';

import './App.css';

const PokemonRow = ({ pokemon, onSelect }) => (
  <tr>
    <td>{pokemon.name.english}</td>
    <td>{pokemon.type.join(', ')}</td>
    <td>
      <Button variant="contained" onClick={() => onSelect(pokemon)}>
        More information
      </Button>
    </td>
  </tr>
);

PokemonRow.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.shape({
      english: PropTypes.string.isRequired,
    }),
    type: PropTypes.arrayOf(PropTypes.string).isRequired,
  }),
  onSelect: PropTypes.func.isRequired,
};

const PokemonInfo = ({ name, base }) => (
  <div>
    <h1>{name.english}</h1>
    <table>
      <tbody>
        {Object.keys(base).map((key) => (
          <tr key={key}>
            <td>{key}</td>
            <td>{base[key]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

PokemonInfo.propTypes = {
  name: PropTypes.shape({
    english: PropTypes.string.isRequired,
  }),
  base: PropTypes.shape({
    HP: PropTypes.number.isRequired,
    Attack: PropTypes.number.isRequired,
    Defense: PropTypes.number.isRequired,
    'Sp. Attack': PropTypes.number.isRequired,
    'Sp. Defense': PropTypes.number.isRequired,
    Speed: PropTypes.number.isRequired,
  }),
};

const Title = styled.h1`
  text-align: center;
`;

const TwoColumnLayout = styled.div`
  display: grid;
  grid-template-columns: 70% 30%;
  column-gap: 1rem;
`;

const Container = styled.div`
  margin: auto;
  width: 800px;
  padding-top: 1rem;
`;

const Input = styled.input`
  width: 100%;
  font-size: x-large;
  padding: 0.2rem;
`;

function App() {
  const [filter, filterSet] = React.useState('');
  const [pokemon, pokemonSet] = React.useState([]);
  const [selectedItem, selectedItemSet] = React.useState(null);

  React.useEffect(() => {
    fetch('/introduction-to-react/pokemon.json')
      .then((resp) => {
        if (!resp.ok) {
          throw new Error('Network response was not ok');
        }
        return resp.json();
      })
      .then((data) => pokemonSet(data))
      .catch((error) => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }, []);

  if (!pokemon.length) {
    return <div>Loading data</div>;
  }

  return (
    <Container>
      <Title>Pokemon Search</Title>
      <TwoColumnLayout>
        <div>
          <Input
            type="text"
            value={filter}
            onChange={(e) => filterSet(e.target.value)}
          />

          <table width="100%">
            <thead>
              <tr>
                <th>Name</th>
                <th>Type</th>
              </tr>
            </thead>
            <tbody>
              {pokemon
                .filter((pokemon) =>
                  pokemon.name.english
                    .toLocaleLowerCase()
                    .includes(filter.toLocaleLowerCase())
                )
                .slice(0, 20)
                .map((pokemon) => (
                  <PokemonRow
                    pokemon={pokemon}
                    onSelect={(pokemon) => selectedItemSet(pokemon)}
                    key={pokemon.id}
                  />
                ))}
            </tbody>
          </table>
        </div>
        {selectedItem && <PokemonInfo {...selectedItem} />}
      </TwoColumnLayout>
    </Container>
  );
}

// --- Class components ---

/*class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: '',
      pokemon: [],
      selectedItem: null,
    };
  }

  componentDidMount() {
    fetch('/introduction-to-react/pokemon.json')
      .then((resp) => resp.json())
      .then((pokemon) => this.setState({ ...this.state, pokemon }));
  }

  render() {
    return (
      <Container>
        <Title>Pokemon Search</Title>
        <TwoColumnLayout>
          <div>
            <Input
              type="text"
              value={this.state.filter}
              onChange={(e) =>
                this.setState({ ...this.state, filter: e.target.value })
              }
            ></Input>

            <table width="100%">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Type</th>
                </tr>
              </thead>
              <tbody>
                {this.state.pokemon
                  .filter((pokemon) =>
                    pokemon.name.english
                      .toLocaleLowerCase()
                      .includes(this.state.filter.toLocaleLowerCase())
                  )
                  .slice(0, 20)
                  .map((pokemon) => (
                    <PokemonRow
                      pokemon={pokemon}
                      onSelect={(pokemon) =>
                        this.setState({ ...this.state, selectedItem: pokemon })
                      }
                      key={pokemon.id}
                    />
                  ))}
              </tbody>
            </table>
          </div>
          {this.state.selectedItem && (
            <PokemonInfo {...this.state.selectedItem} />
          )}
        </TwoColumnLayout>
      </Container>
    );
  }
}*/

export default App;

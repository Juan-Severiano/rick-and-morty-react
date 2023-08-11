import axios from 'axios';
import { useState } from 'react';
import { Card } from '../Card';

interface Character {
  id: number;
  name: string;
  firstEpisodeName: string;
  // Adicione outras propriedades conforme necessário
}

const getFirstEpisodeName = async (characterName: string) => {
  try {
    const response = await axios.get('https://rickandmortyapi.com/api/character');
    const characters = response.data.results;

    const character = characters.find((char: { name: string }) =>
      char.name.toLowerCase() === characterName.toLowerCase()
    );

    if (!character) {
      console.log(`O personagem "${characterName}" não foi encontrado.`);
      return '';
    }

    const firstEpisodeId = character.episode[0].split('/').pop();
    const episodeResponse = await axios.get(`https://rickandmortyapi.com/api/episode/${firstEpisodeId}`);
    const firstEpisodeName = episodeResponse.data.name;
    return String(firstEpisodeName);
  } catch (error) {
    // console.error('Ocorreu um erro ao obter informações do personagem:', error.message);
    return '';
  }
};

const Home = () => {
  const [characters, setCharacters] = useState<Character[]>([]);

  const fetchData = async () => {
    try {
      const charactersAll = await axios.get('https://rickandmortyapi.com/api/character');
      const charactersData = charactersAll.data.results;

      const updatedCharacters = await Promise.all(
        charactersData.map(async (c: {name: string}) => {
          const firstEpisodeName = await getFirstEpisodeName(c.name);
          return { ...c, firstEpisodeName } as Character;
        })
      );

      setCharacters(updatedCharacters);
    } catch (error) {
      console.log(error);
    }
  };

  fetchData();

  return (
    <section className="d-flex flex-column align-items-center justify-content-center">
      <div>
        <ul className="list-characters d-flex flex-wrap align-items-center justify-content-center">
          {characters.map((character) => (
            <Card {...character} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Home;
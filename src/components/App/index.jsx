import axios from 'axios';
import { useState } from 'react';
import { Card } from '../Card';
import Footer from '../Footer';


const getFirstEpisodeName = async (characterName) => {
  try {
    const response = await axios.get('https://rickandmortyapi.com/api/character');
    const characters = response.data.results;
    console.log(characters)
    const character = characters.find((char) =>
      char.name.toLowerCase() === characterName.toLowerCase()
    );

    if (!character) {
      console.log(`O personagem "${characterName}" não foi encontrado.`);
      return '';
    }

    const firstEpisodeId = character.episode[0].split('/').pop();
    const episodeResponse = await axios.get(`https://rickandmortyapi.com/api/episode/${firstEpisodeId}`);
    const firstEpisodeName = episodeResponse.data.name;
    return firstEpisodeName;
  } catch (error) {
    console.error('Ocorreu um erro ao obter informações do personagem:', error.message);
    return '';
  }
};

const Home = () => {
  const [characters, setCharacters] = useState([]);

  const fetchData = async () => {
    try {
      const charactersAll = await axios.get('https://rickandmortyapi.com/api/character');
      const charactersData = charactersAll.data.results;

      const updatedCharacters = await Promise.all(
        charactersData.map(async (c) => {
          const firstEpisodeName = await getFirstEpisodeName(c.name);
          return {
            id: c.id,
            name: c.name,
            firstEpisodeName: firstEpisodeName,
            image: c.image,
            status: c.status,
            species: c.species,
            location: c.location,
          };
        })
      );

      setCharacters(updatedCharacters);
    } catch (error) {
      console.log(error);
    }
  };

  fetchData()

  return (
    <>
    <section className="d-flex flex-column align-items-center justify-content-center">
      <div>
        <ul className="list-characters container d-flex flex-wrap align-items-center justify-content-center">
          {characters.map((character) => (
            <Card character={character} key={character.id} />
          ))}
        </ul>
      </div>
    </section>
    <Footer />
    </>
  );
};

export default Home;
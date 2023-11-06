import { Component } from "react";
import axios from "axios";
import { Card } from "../components/Card";
import Footer from "../components/Footer";


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

export default class Character extends Component {
    state = {
        characters: []
    }

    fetchData = async () => {
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

        this.setState({ characters: updatedCharacters });
      } catch (error) {
        console.log(error);
      }
    };

    
    render () {
      this.fetchData()
    return (
    <>
    <section className="d-flex flex-column align-items-center justify-content-center">
      <div>
        <ul className="list-characters container d-flex flex-wrap align-items-center justify-content-center">
          {this.state.characters.map((character) => (
            <Card character={character} key={character.id} />
          ))}
        </ul>
      </div>
    </section>
    </>
  );}
}
import '../../styles/global.css'

export const Card = ({ character }) => {
  console.log(character)
  return (
    <li className="character d-flex" key={character.id}>
      <img src={character.image} alt={character.name} />
      <div className="card">
        <h2>
          {character.name}
        </h2>
        <p className="d-flex align-items-center status">
          {character.status === 'Dead' ? <i style={{ color: 'red' }} className="bi bi-circle-fill"></i> : null}
          {character.status === 'Alive' ? <i style={{ color: 'green' }} className="bi bi-circle-fill"></i> : null}
          {character.status === 'unknown' ? <i style={{ color: '#4d4d4d' }} className="bi bi-circle-fill"></i> : null}
          {character.status} - {character.species}
        </p>
        <p className="disable">Last known location:</p>
        <p><a href="" className="character-links">{character.location.name}</a></p>
        <p className="disable">First seen:</p>
        <p><a href="" className="character-links">{character.firstEpisodeName}</a></p>
      </div>
    </li>)
}
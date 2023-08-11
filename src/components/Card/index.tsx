import '../../styles/global.css'

export const Card = (props: { id: number, image: string,name: string, status: string, species: string, firstEpisodeName: string, location: { name: string }}) => {
  return (
    <li className="character d-flex" key={props.id}>
      <img src={props.image} alt={props.name}></img>
      <div className="card">
        <h2>
          {props.name}
        </h2>
        <p className="d-flex align-items-center status">
          {props.status === 'Dead' ? <i style={{ color: 'red' }} className="bi bi-circle-fill"></i> : null}
          {props.status === 'Alive' ? <i style={{ color: 'green' }} className="bi bi-circle-fill"></i> : null}
          {props.status === 'unknown' ? <i style={{ color: '#4d4d4d' }} className="bi bi-circle-fill"></i> : null}
          {props.status} - {props.species}
        </p>
        <p className="disable">Last known location:</p>
        <p><a href="" className="character-links">{props.location.name}</a></p>
        <p className="disable">First seen:</p>
        <p><a href="" className="character-links">{props.firstEpisodeName}</a></p>
      </div>
    </li>)
}
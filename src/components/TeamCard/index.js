// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {details} = props
  const {teamImageUrl, id, name} = details
  return (
    <Link className="link" to={`/team-matches/${id}`}>
      <li className="team-card">
        <img className="image" src={teamImageUrl} alt={name} />
        <p>{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard

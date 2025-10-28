import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {teamData} = props
  const {id, name, teamImageURL} = teamData

  return (
    <Link className="link-item" to={`/team-matches/${id}`}>
      <li className="team-card">
        <img src={teamImageURL} alt={name} className="team-logo" />
        <p className="team-name">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard

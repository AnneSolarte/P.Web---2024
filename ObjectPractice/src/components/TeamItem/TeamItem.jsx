import './TeamItem.css'
import PropTypes from 'prop-types'

export const TeamItem = ({team, players}) => {
  return (
    <div  className='team-item'>
            <h2>Team: {team}</h2>
            <ul>
              {players.map(player => (
                <li key={player.name}>
                    <p>{player.name} {player.lastName}</p>
                </li>
              ))}
            </ul>
    </div>
  )
}


TeamItem.propTypes = {
   team: PropTypes.string.isRequired,
   players: PropTypes.array.isRequired
  }
  
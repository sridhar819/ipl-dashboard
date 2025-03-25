// Write your code here
import './index.css'

const MatchCard = props => {
  const {details} = props
  const {competingTeamLogo, matchStatus, result, competingTeam} = details

  const color = matchStatus === 'Lost' ? 'red' : 'green'
  console.log(color)

  return (
    <li className="result-card">
      <img alt={`competing team ${competingTeam}`} src={competingTeamLogo} />
      <p>{competingTeam}</p>
      <p>{result}</p>
      <p style={{color}}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard

// Write your code here
import './index.css'

const LatestMatch = props => {
  const {details} = props
  const {
    umpires,
    result,
    manOfTheMatch,
    id,
    date,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    matchStatus,
    secondInnings,
    venue,
  } = details
  return (
    <div className="latest-match-card">
      <div className="subcard-1">
        <p>{competingTeam}</p>
        <p className="date">{date}</p>
        <p>{venue}</p>
        <p>{result}</p>
      </div>
      <div className="subcard-2">
        <img
          className="card-2image"
          alt={`latest match ${competingTeam}`}
          src={competingTeamLogo}
        />
      </div>
      <div className="subcard-3">
        <h4>First Innings</h4>
        <p>{firstInnings}</p>
        <h4>Second Innings</h4>
        <p>{secondInnings}</p>
        <h4>Man Of The Match</h4>
        <p>{manOfTheMatch}</p>
        <h4>Umpires</h4>
        <p>{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch

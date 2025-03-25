// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import {withRouter} from 'react-router-dom'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {emptyList: {}, isLoading: true}

  componentDidMount() {
    this.getData()
    window.addEventListener('popstate', this.handleBackButton)
  }

  componentWillUnmount() {
    window.removeEventListener('popstate', this.handleBackButton)
  }

  handleBackButton = () => {
    const {history} = this.props
    history.push('/')
  }

  getData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    console.log(data.latest_match_details)

    const updatedObj = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: {
        umpires: data.latest_match_details.umpires,
        result: data.latest_match_details.result,
        manOfTheMatch: data.latest_match_details.man_of_the_match,
        id: data.latest_match_details.id,
        date: data.latest_match_details.date,
        venue: data.latest_match_details.venue,
        competingTeam: data.latest_match_details.competing_team,
        competingTeamLogo: data.latest_match_details.competing_team_logo,
        firstInnings: data.latest_match_details.first_innings,
        secondInnings: data.latest_match_details.second_innings,
        matchStatus: data.latest_match_details.match_status,
      },
      recentMatches: data.recent_matches.map(match => ({
        umpires: match.umpires,
        result: match.result,
        manOfTheMatch: match.man_of_the_match,
        id: match.id,
        date: match.date,
        venue: match.venue,
        competingTeamLogo: match.competing_team_logo,
        competingTeam: match.competing_team,
        firstInnings: match.first_innings,
        secondInnings: match.second_innings,
        matchStatus: match.match_status,
      })),
    }
    this.setState({emptyList: updatedObj, isLoading: false})
  }

  render() {
    const {emptyList, isLoading} = this.state
    const {teamBannerUrl, latestMatchDetails, recentMatches} = emptyList

    return (
      <div style={{backgroundColor: '#5755a7'}} className="team-bg-container">
        {isLoading ? (
          <div testid="loader">
            <Loader type="TailSpin" height={50} width={50} color="#d91c1f" />
          </div>
        ) : (
          <>
            <div className="team-banner-card">
              <img alt="team banner" src={teamBannerUrl} />
            </div>
            <div className="card-2">
              <p>Latest Matches</p>
              <LatestMatch
                key={latestMatchDetails.id}
                details={latestMatchDetails}
              />
            </div>
            <ul className="matches-list">
              {recentMatches.map(each => (
                <MatchCard key={each.id} details={each} />
              ))}
            </ul>
          </>
        )}
      </div>
    )
  }
}

export default TeamMatches

// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {teamList: [], isLoading: true}

  componentDidMount() {
    this.getFetchedData()
  }

  getFetchedData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const teams = data.teams
    const updatedData = teams.map(each => ({
      id: each.id,
      name: each.name,
      teamImageUrl: each.team_image_url,
    }))
    console.log(data)

    this.setState({teamList: updatedData, isLoading: false})
  }

  render() {
    const {teamList, isLoading} = this.state

    return (
      <div className="bg-container">
        {isLoading ? (
          <div testid="loader">
            <Loader type="TailSpin" height={50} width={50} color="#d91c1f" />
          </div>
        ) : (
          <>
            <div className="logo-card">
              <img
                alt="ipl logo"
                src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
              />
              <h1 className="heading">IPL Dashboard</h1>
            </div>
            <ul className="team-list">
              {teamList.map(each => (
                <TeamCard key={each.id} details={each} />
              ))}
            </ul>
          </>
        )}
      </div>
    )
  }
}

export default Home

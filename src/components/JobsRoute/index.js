import Cookies from 'js-cookie'
import {Component} from 'react'
import './index.css'
import Header from '../Header'

const employmentTypesList = [
  {
    label: 'Full Time',
    employmentTypeId: 'FULLTIME',
  },
  {
    label: 'Part Time',
    employmentTypeId: 'PARTTIME',
  },
  {
    label: 'Freelance',
    employmentTypeId: 'FREELANCE',
  },
  {
    label: 'Internship',
    employmentTypeId: 'INTERNSHIP',
  },
]

const salaryRangesList = [
  {
    salaryRangeId: '1000000',
    label: '10 LPA and above',
  },
  {
    salaryRangeId: '2000000',
    label: '20 LPA and above',
  },
  {
    salaryRangeId: '3000000',
    label: '30 LPA and above',
  },
  {
    salaryRangeId: '4000000',
    label: '40 LPA and above',
  },
]

class JobsRoute extends Component {
  state = {
    profileDetails: {},
  }

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = 'https://apis.ccbp.in/profile'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok === true) {
      const data = await response.json()
      const updatedData = {
        name: data.profile_details.name,
        profileImageUrl: data.profile_details.profile_image_url,
        shortBio: data.profile_details.short_bio,
      }
      this.setState({
        profileDetails: updatedData,
      })
    }
  }

  renderProfileDisplay = () => {
    const {profileDetails} = this.state
    const {name, profileImageUrl, shortBio} = profileDetails
    return (
      <div className="profile-display-container">
        <img className="profile-logo" src={profileImageUrl} alt="" />
        <p className="profile-name">{name}</p>
        <p className="profile-description">{shortBio}</p>
      </div>
    )
  }

  renderTypesOfEmployement = () => (
    <>
      <ul className="types-of-employment">
        <h3 className="types-heading">Type of Employment</h3>
        {employmentTypesList.map(each => (
          <li className="li-types-of-employment" key={each.employmentTypeId}>
            <input
              className="checkbox-style"
              type="checkbox"
              id={each.employmentTypeId}
            />
            <label htmlFor={each.employmentTypeId}>{each.label}</label>
          </li>
        ))}
      </ul>
      <hr className="hr-line" />
    </>
  )

  renderSalaryRange = () => (
    <>
      <ul className="types-of-employment">
        <h3 className="types-heading">Salary Range</h3>
        {salaryRangesList.map(each => (
          <li className="li-types-of-employment" key={each.salaryRangeId}>
            <input
              className="checkbox-style"
              type="radio"
              id={each.salaryRangeId}
              name="salary"
            />
            <label htmlFor={each.salaryRangeId}>{each.label}</label>
          </li>
        ))}
      </ul>
      <hr className="hr-line" />
    </>
  )

  render() {
    return (
      <>
        <Header />
        <div className="jobs-bg-container">
          <div className="profile-container">
            {this.renderProfileDisplay()}
            {this.renderTypesOfEmployement()}
            {this.renderSalaryRange()}
          </div>
        </div>
      </>
    )
  }
}
export default JobsRoute

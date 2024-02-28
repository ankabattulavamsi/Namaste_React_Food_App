import React, { Component } from 'react'
import UserClassComp from './UserClassComp'
import { UserContext } from '../utils/ContextComp'

class About extends Component {
  static contextType = UserContext
  render() {
    const {userName}:any = this.context
    return (
      <>
      
      <div className='about-container'>
      <p>ankabattula {userName}</p>
        <h1>About </h1>
        
      </div>
      <UserClassComp name={"Vamsi"} location={'tddytr'} />
      </>
    )
  }
}

export default About

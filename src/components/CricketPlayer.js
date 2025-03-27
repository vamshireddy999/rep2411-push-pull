import React from 'react'

function CricketPlayer(props) {
  return (
    <div>
      <div className='mainContainer'>
      <img src={props.picURL} alt=''className='playersPic'></img>
      <h1>name:{props.name}</h1>
    <h2>team:{props.team}</h2>
    <h2>role:{props.role}</h2>
     </div>
    </div>
  )
}

export default CricketPlayer

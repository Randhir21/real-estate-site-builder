import React from 'react'

const Layout3 = ({project}) => {
  return (
    <div style={{ padding: '40px', background: '#7d0e0e' }}>
      <h1>{project.projectName}</h1>
      <p>Location: {project.projectAddress}</p>
      <h3>Starting at {project.startingPrice}</h3>
      <ul>
        {project.keyHighlights.map((h, i) => <li key={i}>{h}</li>)}
      </ul>
    </div>
  )
}

export default Layout3

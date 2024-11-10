import React from 'react'
import { Link } from 'react-router-dom'

function Title(props) {
  return (
    <div className="breadcrumbs">
  
      <nav>
        <div className="container">
          <ol>
            <li><Link to={props.link}>{props.role}</Link></li>
            <li>{props.page}</li>
          </ol>
        </div>
      </nav>
    </div>
  )
}

export default Title
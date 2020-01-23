import React from 'react'

function Directory(props) {
    return (
        <div>
            <h1 id = 'name'>{props.employeeName}</h1>
            <h4>From: {props.employeeLocation}</h4>
            <h4>Job Title: {props.employeeJob}</h4>
            <h4>Favorite Movies:</h4>
            <ul>
                <li>
                {props.favoriteMovies[0]}
                </li>
                <li>
                {props.favoriteMovies[1]}
                </li><li>
                {props.favoriteMovies[2]}
                </li>
            </ul>
            <div className='corner'>
                <h1 className = 'index'>{props.employeeIndex}/25</h1>
            </div>
        </div>

    )
}

export default Directory
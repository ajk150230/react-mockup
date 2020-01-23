import React from 'react'

class Navigate extends React.Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div>
                <button className ='slide' onClick = {this.props.prevPage}>Before</button>
                <button className ='slide' onClick = {this.props.nextPage}>Next</button>
            </div>
        )
    }
}

export default Navigate
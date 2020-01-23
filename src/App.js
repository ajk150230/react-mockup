import React from 'react';
import './App.css'
import Directory from './Components/Directory'
import Navigate from './Components/Navigate'
import data from './data'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      people: data,
      indexid: 0
    }
    this.nextPage = this.nextPage.bind(this)
    this.prevPage = this.prevPage.bind(this)
  }
  nextPage() {
    this.setState({ indexid: this.state.indexid += 1 })
  }
  prevPage() {
    this.setState({ indexid: this.state.indexid -= 1 })
  }
  render() {
    let element = this.state.people[this.state.indexid]
    return (
      <div>
        <header>Home</header>
        <div className='background'>
          <div className='card'>
            <Directory
              employeeName={element.name.first + ' ' + element.name.last}
              employeeLocation={element.city + ', ' + element.country}
              employeeJob={element.title}
              employer={element.employer}
              favoriteMovies={element.favoriteMovies}
              employeeIndex={element.id}
            />
          </div>
          <div id='button'>
            <Navigate
              nextPage={this.nextPage}
              prevPage={this.prevPage}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default App;

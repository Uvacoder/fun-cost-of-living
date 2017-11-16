import React, { Component } from 'react'

import CompareCities from './CompareCities'
import Header from './Header'
import MainTable from './MainTable'

class App extends Component {
  state = { c1: '', c2: '' }

  handleChange = e => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  render() {
    const { data, dataByCity, citiesByRegion } = this.props
    const { c1, c2 } = this.state

    return (
      <div className="p2 mx-auto" style={{ maxWidth: 660 }}>
        <Header />
        <CompareCities
          c1={c1}
          c2={c2}
          citiesByRegion={citiesByRegion}
          dataByCity={dataByCity}
          onChange={this.handleChange}
        />
        <MainTable data={data} />
      </div>
    )
  }
}

export default App

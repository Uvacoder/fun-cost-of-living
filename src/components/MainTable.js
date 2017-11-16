import React from 'react'

import { regionLookup } from '../util/data'

const MainTable = ({ data }) => (
  <div className="mb3">
    <h3 className="m0">All cities</h3>
    <p>New York, September 2016=100</p>
    <div className="overflow-auto">
      <table className="table table-light h5 border">
        <thead>
          <tr>
            <th>Rank</th>
            <th>City</th>
            <th>Region</th>
            <th>Index</th>
          </tr>
        </thead>
        <tbody>
          {data.map(d => (
            <tr key={d.cty}>
              <td>{d.wRank15}</td>
              <td>{d.cty}</td>
              <td>{regionLookup[d.reg] || 'Other'}</td>
              <td>{d.wIndex15}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
)

export default MainTable

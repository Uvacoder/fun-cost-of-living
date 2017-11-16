import React from 'react'

import CityDiff from './CityDiff'
import CityInfo from './CityInfo'
import CitySelect from './CitySelect'

const CompareCities = ({ c1, c2, citiesByRegion, dataByCity, onChange }) => (
  <div className="mb3">
    <h3>Compare two cities</h3>
    <CitySelect
      name="c1"
      label="City A"
      value={c1}
      options={citiesByRegion}
      onChange={onChange}
    />
    <span className="px1 xs-hide">vs.</span>
    <CitySelect
      name="c2"
      label="City B"
      value={c2}
      options={citiesByRegion}
      onChange={onChange}
    />
    {c1 && <CityInfo {...dataByCity[c1]} />}
    {c2 && <CityInfo {...dataByCity[c2]} />}
    {c1 && c2 && <CityDiff c1={dataByCity[c1]} c2={dataByCity[c2]} />}
  </div>
)

export default CompareCities

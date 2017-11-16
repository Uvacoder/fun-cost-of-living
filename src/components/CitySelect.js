import React from 'react'

const CitySelect = ({ name, label, value, options, onChange }) => (
  <select
    className="select sm-col-4 inline-block"
    name={name}
    value={value}
    onChange={onChange}
  >
    <option disabled={true} value="">
      Select {label}...
    </option>
    {options.map(o => (
      <optgroup key={o.region} label={o.region}>
        {o.cities.map(c => <option key={c}>{c}</option>)}
      </optgroup>
    ))}
  </select>
)

export default CitySelect

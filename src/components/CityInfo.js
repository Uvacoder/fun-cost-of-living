import React from 'react'

const CityInfo = ({ cty, ctry, wIndex15, wIndex09 }) => (
  <div>
    {cty}, {ctry} has an index score of <strong>{wIndex15}</strong>.
  </div>
)

export default CityInfo

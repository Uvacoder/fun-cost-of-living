import { format } from 'd3-format'
import React from 'react'

const fmt = format(',.0%')
const compare = x => `${fmt(Math.abs(x))} ${x > 0 ? 'higher' : 'lower'}`

const CityDiff = ({ c1, c2 }) => {
  const diff = c1.wIndex15 / c2.wIndex15 - 1

  return (
    <div className="mt1 p1 bg-darken-1 rounded">
      The cost of living in <strong>{c1.cty}</strong> is{' '}
      {diff === 0 ? (
        <span>
          <strong>the same</strong> as
        </span>
      ) : (
        <span>
          <strong>{compare(diff)}</strong> than
        </span>
      )}{' '}
      <strong>{c2.cty}</strong>.
    </div>
  )
}

export default CityDiff

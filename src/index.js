import React from 'react'
import { render } from 'react-dom'

import App from './components/App'
import { data, dataByCity, citiesByRegion } from './util/data'

import 'ace-css/css/ace.min.css'
import './index.css'

render(
  <App data={data} dataByCity={dataByCity} citiesByRegion={citiesByRegion} />,
  document.getElementById('root')
)

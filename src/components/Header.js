import React from 'react'

const Header = () => (
  <header className="mt2 mb3">
    <div className="h1 line-height-1">
      <span role="img" aria-label="Globe">
        🌎
      </span>
      <span role="img" aria-label="Houses">
        🏘️
      </span>
      <span role="img" aria-label="Money">
        💸
      </span>
    </div>
    <h1 className="mt1 mb0 h2">Cost of living around the world</h1>
    <p className="m0 h5 sm-col-10">
      Based on prices of 160 goods and services in 133 cities collected by{' '}
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://infographics.economist.com/2017/wcol/"
      >
        The Economist
      </a>{' '}
      | Code on <a href="#!">GitHub</a> | Made by{' '}
      <a href="https://twitter.com/brensudol">brensudol</a>
    </p>
  </header>
)

export default Header

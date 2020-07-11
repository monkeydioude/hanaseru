import './colors.scss'
import './app.scss'
import LangContext from '../services/LangContext'
import React from 'react'

const value = {lang: 1}

function App({ Component, pageProps }) {
    return (
      <LangContext.Provider value={value}>
        <Component {...pageProps} />
      </LangContext.Provider>
    )
  }

  export default App
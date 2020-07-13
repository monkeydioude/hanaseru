import './colors.scss'
import './app.scss'
import LangContext from '../services/LangContext'
import React from 'react'
import Layout from '../components/Layout'

const value = {lang: 1}

function App({ Component, pageProps }) {
    return (
      <Layout>
        <LangContext.Provider value={value}>
          <Component {...pageProps} />
        </LangContext.Provider>
      </Layout>
      )
  }

  export default App
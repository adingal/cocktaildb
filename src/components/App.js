import React from 'react'
import { CssBaseline } from '@mui/material'
import Layout from 'components/Layout'
import Header from 'components/Header'
import Footer from 'components/Footer'

const App = () => {
  return (
    <>
      <CssBaseline />
      <Layout>
        <Header />
        <Footer />
      </Layout>
    </>
  )
}

export default App

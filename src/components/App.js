import React, { useEffect, useState } from 'react'
import { CssBaseline } from '@mui/material'
import Layout from 'components/Layout'
import Header from 'components/Header'
import Content from 'components/Content'
import Footer from 'components/Footer'

import { useDispatch, useSelector } from 'react-redux'
import { fetchCocktail } from 'store/api'

const App = () => {
  const [searchValue, setSearchValue] = useState('vodka')
  const drinks = useSelector((state) => state.cocktails.drinks)
  const dispatch = useDispatch()

  useEffect(() => {
    // Debounce for 500ms
    const timeOutId = window.setTimeout(() => {
      dispatch(fetchCocktail(searchValue))
    }, 500)
    return () => {
      window.clearTimeout(timeOutId)
    }
  }, [searchValue])

  return (
    <>
      <CssBaseline />
      <Layout>
        <Header onInputChange={setSearchValue} />
        <Content drinks={drinks} />
        <Footer />
      </Layout>
    </>
  )
}

export default App

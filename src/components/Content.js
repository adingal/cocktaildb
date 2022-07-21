import React from 'react'
import { Box, Container, Grid } from '@mui/material'
import { Masonry } from '@mui/lab'
import { styled } from '@mui/material/styles'
import CocktailCard from 'atoms/CocktailCard'

const StyledBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(6, 0),
  '@media (max-width: 768px)': {
    padding: theme.spacing(3, 0),
  },
}))

const StyledContainer = styled(Container)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
}))

const Content = ({ drinks }) => {
  const height =
    window.innerWidth > 600
      ? window.innerHeight - 144
      : window.innerHeight - 139

  return (
    <StyledBox sx={{ minHeight: height }}>
      <StyledContainer maxWidth="lg">
        <Masonry columns={{ xs: 1, sm: 2, md: 4 }} spacing={{ xs: 0, sm: 2 }}>
          {drinks.length > 0 &&
            drinks.map((drink) => (
              <Grid item key={drink.idDrink}>
                <CocktailCard drink={drink} />
              </Grid>
            ))}
        </Masonry>
      </StyledContainer>
    </StyledBox>
  )
}

export default Content

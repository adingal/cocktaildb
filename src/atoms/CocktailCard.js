import React from 'react'
import { styled } from '@mui/material/styles'
import { Card, CardContent, CardMedia, Typography } from '@mui/material'

const StyledCategory = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  color: theme.palette.grey[500],
}))

const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: 345,
  boxShadow: 'none',
  '@media (max-width: 768px)': {
    maxWidth: '100%',
  },
}))

const CocktailCard = ({ drink }) => {
  const {
    strDrink: name,
    strCategory: category,
    strDrinkThumb: image,
    strInstructions: instructions,
  } = drink
  return (
    <StyledCard>
      <CardMedia component="img" image={image} alt="green iguana" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{ mb: 0 }}>
          {name}
        </Typography>
        <StyledCategory variant="body2">{category}</StyledCategory>
        <Typography variant="body1" color="text.secondary">
          {instructions}
        </Typography>
      </CardContent>
    </StyledCard>
  )
}

export default CocktailCard

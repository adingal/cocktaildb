import React from 'react'
import { styled } from '@mui/material/styles'
import { Box, Container, Typography } from '@mui/material'

const StyledBox = styled(Box)(({ theme }) => ({
  minHeight: 80,
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
}))

const Footer = () => {
  return (
    <StyledBox>
      <Container maxWidth="xl">
        <Typography variant="body1">
          {new Date().getFullYear()} &copy; adingal
        </Typography>
      </Container>
    </StyledBox>
  )
}

export default Footer

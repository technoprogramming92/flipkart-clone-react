import React from 'react'

//components
import NavBar from './NavBar';
import Banner from './Banner';
import { Box, styled } from '@mui/material';

const Component = styled(Box)`
    padding: 10px;
    background: #f2f2f2;
`

export default function Home() {
  return (
    <>
        <NavBar/>
        <Component>
            <Banner/>
        </Component>
    </>
  )
}

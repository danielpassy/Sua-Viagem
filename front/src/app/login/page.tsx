'use client'
import { Button, TextField } from '@mui/material'
import React from 'react'


function page(props: any) {
  return (
    <>
      <div className='flex flex-col w-1/3'>
        <h1>Login</h1>
        <TextField className='py-5 ' id="outlined-basic" label="Username" variant="outlined" />
        <TextField className='py-5' id="outlined-basic" label="Password" variant="outlined" />
        <Button className='py-5' variant="contained">Login</Button>

      </div>
    </>
  )
}

page.propTypes = {}

export default page

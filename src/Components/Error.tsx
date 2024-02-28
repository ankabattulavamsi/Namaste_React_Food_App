import React from 'react'
import { useRouteError } from 'react-router-dom'

const Error = () => {
  const err:any = useRouteError()
  console.log(err)
  return (
    <div className='about-container'>
      <h2>Oops Something went wrong</h2>
      <h3>{err.status}: {err.statusText}</h3>
    </div>
  )
}

export default Error

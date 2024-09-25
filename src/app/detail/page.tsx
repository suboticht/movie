import React from 'react'
import { redirect } from 'next/navigation'

const Detail = () => {
    redirect('/404')
  return (
    <div>This page could not be found.</div>
  )
}

export default Detail
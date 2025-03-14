import React from 'react'
import Spinner from 'react-bootstrap/Spinner';
import "./Loaded.css"

export const Loaded = () => {
  return (
    <div className='spin-box'>
        <Spinner animation="border" role="status"  variant="info" />
    </div>
  )
}

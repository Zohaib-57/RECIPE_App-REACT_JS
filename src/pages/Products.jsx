import React from 'react'
import { useParams } from 'react-router-dom'

const Products = () => {
   const {id} = useParams()
  return (
    <div>
        <h1>Products List</h1>
        <p>Showing Product No : {id}</p>
    </div>
  )
}

export default Products
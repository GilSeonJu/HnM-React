import React from 'react'
import { Navigate } from 'react-router-dom'
import ProductDetail from '../page/ProductDetail'

const PrivateProductDetail = ({authenticate}) => {
    //console.log(authenticate);
  return (
      authenticate === true ? <ProductDetail /> : <Navigate to='/login' />

  )
  
}

export default PrivateProductDetail
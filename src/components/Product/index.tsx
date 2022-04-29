import React from 'react'
import { ProductStyle } from './styles'

interface IProduct {
  source: string;
  name: string;
  price: string;
}
export function Product ({ source, name, price }: IProduct) {
  return (
    <ProductStyle>
      <img src={source} alt={name} />
      <h3>{name}</h3>
      <div>
        <h3>R$ </h3>
        <h3 className='price'>{ price}</h3>
      </div>
    </ProductStyle>
  )
}

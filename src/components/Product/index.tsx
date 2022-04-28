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
      <span>{name}</span>
      <span>{price}</span>
    </ProductStyle>
  )
}

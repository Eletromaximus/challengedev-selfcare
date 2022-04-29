import React, { ReactNode } from 'react'
import { ButtonStyle } from './styles'

interface IButton {
  children: ReactNode,
  margin?: string,
  backgroundColor?: string
  width?: string
  height?: string
  color?: string
}

export function Button ({ children, ...props }: IButton) {
  return (
    <ButtonStyle {...props}>
      {children}
    </ButtonStyle>
  )
}

import React, { ReactNode } from 'react'
import { ButtonStyle } from './styles'

interface IButton {
  children: ReactNode
}
export function Button ({ children }: IButton) {
  return (
    <ButtonStyle>
      {children}
    </ButtonStyle>
  )
}

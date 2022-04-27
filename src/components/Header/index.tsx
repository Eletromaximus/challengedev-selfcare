import React from 'react'
import { Button } from '../Button'
import * as S from './styles'

export function Header () {
  return (
    <S.HeaderStyle>
      <S.LogoStyle>
        <img
          src='./assets/Star.png'
          width='20px'
          height='20px'
        />

        <h2>SelfCare</h2>
      </S.LogoStyle>

      <S.UserMenusStyle>
        <Button>
          <img src='./assets/Lupa.png' alt='search' />
        </Button>

        <Button>
          <img src='./assets/perfil.png' alt='perfil' />
        </Button>

        <Button>
          <img src='./assets/cart.png' alt='cart' />
        </Button>
      </S.UserMenusStyle>
    </S.HeaderStyle>
  )
}

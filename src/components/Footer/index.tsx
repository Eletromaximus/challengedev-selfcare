import React from 'react'
import { Button } from '../Button'
import * as S from './styles'

export function Footer () {
  return (
    <S.FooterStyle>
      <S.Contact>
        <div className='links'>
          <p>Contato</p>
          <p>Termos de serviço</p>
          <p>Política de privacidade</p>
          <p>Cancelamento, troca e reembolso</p>
        </div>
      </S.Contact>

      <S.Newsletter>
        <h2>Newsletter</h2>

        <div id="input-newsletter">
          <input type='text' placeholder='Digite o seu melhor email' />

          <Button
            height='54px'
            width='152px'
            backgroundColor='#5CA720'
            color='#F9F9F9'
          >
            Inscrever
          </Button>
        </div>
      </S.Newsletter>
    </S.FooterStyle>
  )
}

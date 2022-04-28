import React from 'react'
import { Header } from './components/Header'
import { Product } from './components/Product'
import * as S from './theme/AppStyle'

function App () {
  const list = []

  for (let count = 0; count < 9; count++) {
    list.push(<Product
        source={`./products/Product${count + 1}.png`}
        name='Lorem ipsum dolor sit'
        price='R$ 50,00'
      />)
  }

  return (
    <S.AppStyle>
      <Header />
      <div id='banner'>
        <img src='./assets/Banner.png' alt='banner' />
      </div>

      <div id="product-list">
        <h2>Promoção</h2>
        <p>9 produtos</p>
      </div>

      <S.StyleCatalog>
        {list}
      </S.StyleCatalog>
    </S.AppStyle>
  )
}

export default App

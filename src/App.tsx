import React from 'react'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Product } from './components/Product'
import * as S from './theme/AppStyle'

function App () {
  // const [setWidth, useSetWidth] = useState(window.innerWidth)
  const list = []

  for (let count = 0; count < 9; count++) {
    list.push({
      source: `./products/Product${count + 1}.png`,
      name: 'Lorem ipsum dolor sit',
      price: '50,00'
    })
  }

  // useEffect(() => {
  //   useSetWidth(window.innerWidth)
  // }, [])

  return (
    <S.AppStyle>
      <Header />

      <div id='banner'>
        {/* <img
          src='./assets/Banner.png'
          alt='banner'
          // width={setWidth}
        /> */}
      </div>

      <div id="product-list">
        <h2>Promoção</h2>
        <p>9 produtos</p>
      </div>

      <S.StyleCatalog>
          {list.map(product => {
            return <Product
              key={product.source}
              name={product.name}
              price={product.price}
              source={product.source}
            />
          })}

      </S.StyleCatalog>

      <Footer />

      <S.LinkStyles>
        <div className='links'>
          <img src='./links.png' alt='links' />
        </div>

        <div className='cartoes'>
          <img src='./cartoes.png' alt='cartoes' />
        </div>
      </S.LinkStyles>
    </S.AppStyle>
  )
}

export default App

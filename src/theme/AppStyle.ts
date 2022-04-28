import styled from 'styled-components'

export const AppStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  #banner {
    flex-direction: row;
    justify-content: center;
    height: 375px;
  }
  
  #product-list {
    justify-content: space-between;
    align-items: center;
    padding: 0 70px;
    height: 85px;

    border-bottom: 0.2px solid black;
  }
`

export const StyleCatalog = styled.div`
  display: grid;

  grid-template-columns: repeat(3, 1fr)
`

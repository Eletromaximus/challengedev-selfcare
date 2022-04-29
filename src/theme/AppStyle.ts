import styled from 'styled-components'

export const AppStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  #banner {
    flex-direction: row;
    justify-content: center;
    height: 375px;
    width: 100%;

    background: url("assets/Banner.png") no-repeat center;
  }
  
  #product-list {
    justify-content: space-between;
    align-items: center;
    padding: 0 70px;
    height: 85px;
    width: 100%;

    border-bottom: 0.2px solid black;
  }
`

export const StyleCatalog = styled.div`
  display: grid;
  width: 80%;
  gap: 5px;
  justify-content: space-between;

  grid-template-columns: repeat(3, 1fr);

  @media only screen and (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
  }


`

export const LinkStyles = styled.div`
  width: 100%;
  justify-content: space-between;

  background-color: #F9F9F9;
  color: #5CA720;
  padding: 40px 77px;

`

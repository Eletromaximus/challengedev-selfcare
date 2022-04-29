import styled from 'styled-components'

export const FooterStyle = styled.div`
  width: 100%;
  justify-content: space-between;

  background-color: #F9F9F9;
  padding: 40px 77px;
  border: 0.2px solid #A5A1A1;

  @media only screen and (max-width: 960px) {
    flex-direction: column;
  }
`

export const Contact = styled.div`
  display: grid;

  grid-template-columns: 2;


  .links {
    display: block;
  }

  
`
export const Newsletter = styled.div`
  flex-direction: column;
  justify-content: start;

  #input-newsletter {
    input {
      width: 397px;
      height: 54px;

      border: 0.5px solid #D9D9D9;
    }
  }  
`

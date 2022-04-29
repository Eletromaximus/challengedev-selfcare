import styled, { css } from 'styled-components'

interface IButton {
  margin?: string,
  backgroundColor?: string
  width?: string
  height?: string
  color?: string
}

export const ButtonStyle = styled.button<IButton>`
  border: none;
  background-color: transparent;
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  color: ${({ color }) => color};

  ${({ margin, backgroundColor }) => {
    if (margin) {
      return css`
        margin: ${margin}
      `
    }

    if (backgroundColor) {
      return css`
        background-color: ${backgroundColor}
      `
    }
  }
}
`

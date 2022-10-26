import styled, { css } from 'styled-components'

export const ButtonContainer = styled.button`
  width: 100px;
  height: 40px;

  ${(props) => {
    return css`
      background-color: ${props.theme['green-500']};
      color: ${props.theme.white};
    `
  }}
`

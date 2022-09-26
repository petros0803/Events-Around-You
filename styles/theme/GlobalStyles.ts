import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        background-color: ${({ theme }) => theme.colors.background};
        font-size: ${({ theme }) => theme.fonts.regular};
        font-family: ${({ theme }) => theme.fonts.fontFamily.roboto};
    }
    
    .btn {
        width: 8rem;
        height: 2.25rem;
        background: ${({ theme }) =>
          `linear-gradient(123deg, ${theme.colors.buttonPrimary} 0%, ${theme.colors.buttonSecondary} 100%)`};
        border-radius: ${({ theme }) => theme.border.borderRadius.regular};
        color: ${({ theme }) => theme.colors.background};
        font-size: ${({ theme }) => theme.fonts.fontSize.big};
        border: none;
        cursor: pointer;
    }
`;

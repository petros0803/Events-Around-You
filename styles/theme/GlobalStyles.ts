import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        background-color: ${({ theme }) => theme.colors.background};
        font-size: ${({ theme }) => theme.fonts.fontSize.regular};
        font-family: ${({ theme }) => theme.fonts.fontFamily.roboto};
    }
    
    .cursor-pointer{
        cursor: pointer
    }
    
    .page-title{
        color: ${({ theme }) => theme.colors.textPrimary};
        font-weight: ${({ theme }) => theme.fonts.fontWeight.bold};
        font-size: ${({ theme }) => theme.fonts.fontSize.title};
        text-shadow: ${({ theme }) =>
          `1px 1px 10px ${theme.colors.textPrimary}`};
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
        transition: 150ms;
    }
    
    .btn:hover{
        background: ${({ theme }) => theme.colors.buttonPrimary} !important;
        color: ${({ theme }) => theme.colors.background} !important;
    }
    
    a{
        text-decoration: none;
        color: ${({ theme }) => theme.colors.textPrimary};
        cursor: pointer;
    }
    
    .back-btn{
        position: absolute;
        top: ${({ theme }) => theme.size.header.height};
        cursor: pointer;
        
        .back-text{
            color: ${({ theme }) => theme.colors.textSecondary};
            font-size: ${({ theme }) => theme.fonts.fontSize.regular};
            margin: 0;
        }
    }
`;

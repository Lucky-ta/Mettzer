import styled from 'styled-components';

export const HeaderContainer = styled.header`
    display: block;
    width: 100%;
    text-align: center;
    padding-top: 0.6em;
    padding-bottom: 0.6em;
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
`;

export const HeaderLogo = styled.img`
    width: 100%;
    height: 100%;
    max-width: 6em;
    object-fit: contain;

    &&:hover{
        cursor: pointer;
    }
`;

export const HeaderButtonsContainer = styled.div`
    display: flex;
    gap: 3em;
    justify-content: center;
    padding-top: 1.6em;
    padding-bottom: 0.6em;
`;

export const HeaderButton = styled.button`
    background: none;
    border: none;
    font-size: 1em;
    font-weight: 700;

    &&:hover{
        color: #00db87;
        cursor: pointer;
    }
`;

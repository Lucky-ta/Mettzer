import styled from 'styled-components';

export const FooterContaier = styled.footer`
    display: flex;
    justify-content: space-around;
    width: 100%;
    background-color: #00db87;
    position: absolute;
    bottom: 0;
`;

export const FooterButton = styled.button`
    background: none;
    border: none;

    font-size: 1.4em;
    font-weight: 600;
    padding: 0.6em;
    transition: 0.2s all;

    &&:hover {
        color: white;
        cursor: pointer;
    }
`;

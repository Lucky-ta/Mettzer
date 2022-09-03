import styled from 'styled-components';

export const FormContainer = styled.div`
    display: flex;
    margin-left: 2em;
    margin-right: 2em;
    margin-top: 2em;
    align-items: center;

    input[type=text]:focus {
        outline: none !important;
        border: 2px solid #00db87;
    }
`;

export const FormInput = styled.input`
    border: 2px solid black;
    border-radius: 6px;
    height: 3.4em;
    width: 90%;
    padding-left: 1em;
    max-width: 40em;
`;

export const FormButton = styled.button`
    flex-direction: column;
    background: none;
    border: none;
    margin-left: 1em;

    font-size: 1.4em;

    &&:hover {
        cursor: pointer;
    }
`;

import styled from 'styled-components';

const ShowMoreButtonElement = styled.button`
    margin: auto;
    bottom: 0;
    background: none;
    border: none;

    background-color: #00DB87;
    font-size: 1.2em;
    font-weight: 700;
    border-radius: 6px;
    padding: 1em;
    padding-left: 4em;
    padding-right: 4em;

    &&:hover {
        cursor: pointer;
        color: white;
    }
`;

export default ShowMoreButtonElement;

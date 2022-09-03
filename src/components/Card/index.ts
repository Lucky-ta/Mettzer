import styled from 'styled-components';

export const CardHomeContainer = styled.main`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    margin-top: 3.6em;
    padding-bottom: 5.3em;
    gap: 1.4em;
    text-align: start;

`;

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid #00db87;
    border-radius: 8px;
    padding: 1em;
    margin-left: 1em;
    margin-right: 1em;

    &&:hover {
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        border: 2px solid #00db87;
        cursor: pointer;
    }
`;

export const CardTitle = styled.h2`
    font-size: 1.1em;
`;

export const CardAuthor = styled.p`
    color: grey;
    font-size: 0.9em;
`;

export const CardType = styled.p`
    color: grey;
    font-size: 0.9em;
`;

export const CardDescription = styled.p`
    word-wrap: break-word;
    font-style: oblique;

    display: -webkit-box;
    overflow: hidden;
    -webkit-line-clamp: 6;
    -webkit-box-orient: vertical;
`;

export const CardUrl = styled.p`
    font-size: 0.9em;
    align-self: flex-start;
    padding-top: 1em;

    &&:hover {
        cursor: pointer;
        color: blue;
        font-size: 1em;
    }
`;

export const FavoriteButtonContainer = styled.div`
    text-align: center;
    padding-left: 1em;
`;

export const CardFavoriteButton = styled.button`
    border: none;
    background: none;
    margin-top: 0.4em;
    font-size: 1.4em;
    border-radius: 100%;
    transition: 0.1s all;

    &&:hover {
        cursor: pointer;
        color: #FFC000;
    }
`;

export const CardHeader = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-bottom: 1em;
`;

export const CardFlexContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.2em;
    font-size: 1.1em;
    height: 100%;
    justify-content: space-between;
`;

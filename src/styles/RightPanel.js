import styled from 'styled-components';

const RightPanel = styled.div`
    border: 1px solid #F5EEF8;
    box-shadow: 3px 3px 5px -5px rgba(0,0,0,0.45);
    border-radius: 0.3rem;

    margin: 0.3rem 0 0.3rem 0.3rem;
    padding: 0.5rem;

    color: #512E5F;

    h2 {
        font-size: 1.1rem;
        font-weight: bold;
        color: #76448A;
        margin-bottom: 0.5rem;
    }

    p {
        margin: 0.3rem 0;
    }

    p span {
        color: #AF7AC5;
    }

    #controller {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 4rem 4rem 4rem;
        grid-template-areas:
            'nw n ne'
            'w mid e'
            'sw s se';
        grid-column-gap: 0.3rem;
        grid-row-gap: 0.3rem;
        justify-items: center;
        align-items: center;
    }

    #north {
        grid-area: n;
    }

    #east {
        grid-area: e;
    }

    #south {
        grid-area: s;
    }

    #west {
        grid-area: w;
    }

    button {
        font-size: 1.3rem;
        font-weight: bold;
        padding: 1rem;
        width: 3.5rem;
        height: 3.5rem;

        border-radius: 0.3rem;

        background-color: #9B59B6;
        color: #F5EEF8;

        :hover {
            background-color: #AF7AC5;
        }
    }
`

export default RightPanel;
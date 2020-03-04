import styled from 'styled-components';

const LoginRegister = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    border: 1px solid #F5EEF8;
    box-shadow: 3px 3px 5px -5px rgba(0,0,0,0.45);
    border-radius: 0.3rem;

    height: 40rem;

    margin: 0.3rem 0;
    padding: 0.5rem;

    color: #512E5F;

    h2 {
        font-size: 1.1rem;
        font-weight: bold;
        color: #76448A;
        margin-bottom: 0.5rem;
        text-align: center;
    }

    div {
        display: flex;
        flex-direction: column;
        width: 25%;

        label {
            color: #AF7AC5;
            margin-bottom: 0.5rem;
        }

        input {
            font-size: 1.3rem;
            padding: 0.3rem;
            margin-bottom: 0.5rem;
        }

        button {
            font-size: 1.3rem;
            padding: 0.5rem;
            border-radius: 0.3rem;
            margin: 1rem 0;
            background-color: #9B59B6;
            color: #F5EEF8;

            :hover {
                background-color: #AF7AC5;
            }
        }

        p {
            text-align: center;
        }
    }
`

export default LoginRegister;
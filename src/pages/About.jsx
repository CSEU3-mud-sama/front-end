import React from 'react';
import styled from 'styled-components';

const StyledAbout = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    border: 1px solid #F5EEF8;
    box-shadow: 3px 3px 5px -5px rgba(0,0,0,0.45);
    border-radius: 0.3rem;

    height: 40rem;

    margin: 0.3rem 0;
    padding: 0.5rem;

    color: #512E5F;

    p {
        margin: 2rem 0;
    }

    #card-container {
        display: flex;
    }

    .card {
        display: flex;
        flex-direction: column;

        margin: 1rem;
        padding: 1rem;

        border: 1px solid #F5EEF8;
        box-shadow: 3px 3px 5px -5px rgba(0,0,0,0.45);
        border-radius: 0.3rem;

        h2 {
            font-size: 1.1rem;
            font-weight: bold;
            color: #76448A;
            margin-bottom: 0.5rem;
            text-align: center;
        }

        a {
            display: block;
            text-align: center;
        }
    }
`

const data = [
    {
        name: 'Amira',
        github: 'https://github.com',
        linkedin: 'https://linkedin.com',
    },
    {
        name: 'Ayomide',
        github: 'https://github.com',
        linkedin: 'https://linkedin.com',
    },
    {
        name: 'Mike',
        github: 'https://github.com',
        linkedin: 'https://linkedin.com',
    },
    {
        name: 'Shaun',
        github: 'https://github.com',
        linkedin: 'https://linkedin.com',
    },
]

function Card({name, github, linkedin}) {
    return (
        <div className='card'>
            <h2>{name}</h2>
            <a href={github}>GitHub</a>
            <a href={linkedin}>LinkedIn</a>
        </div>
    )
}

function About() {
    return (
        <StyledAbout>
            <p>This app was developed by Amira, Ayomide, Mike and Shaun as their first Computer Science Build Week Project in March 2020.</p>
            <div id='card-container'>
                {data.map(developer => Card(developer))}
            </div>
        </StyledAbout>
    );
}

export default About;
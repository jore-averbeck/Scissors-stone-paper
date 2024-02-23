import styled from "styled-components";

const TextContainer=styled.div`
display: flex;
flex-direction: column;
justify-content:center ;
align-items: center;
margin-top:3rem;
gap: 0rem;
`;



export default function Choice({ userChoice, computerChoice }) {
    return (
        (userChoice === "Scissors" && computerChoice === "Scissors") ||
        (userChoice === "Stone" && computerChoice === "Stone") ||
        (userChoice === "Paper" && computerChoice === "Paper") ? (
            <TextContainer>
                <p>You chose {userChoice}.</p>
                <p>The computer chose {computerChoice}.</p>
                <p>Draw</p>
            </TextContainer>
        ) : userChoice === "Scissors" && computerChoice === "Stone" ? (
            <TextContainer>
                <p>You chose {userChoice}.</p>
                <p>The computer chose {computerChoice}.</p>
                <p>You Lost</p>
            </TextContainer>
        ) : userChoice === "Scissors" && computerChoice === "Paper" ? (
            <TextContainer>
                <p>You chose {userChoice}.</p>
                <p>The computer chose {computerChoice}.</p>
                <p>You Won</p>
            </TextContainer>
        ) : userChoice === "Stone" && computerChoice === "Scissors" ? (
            <TextContainer>
                <p>You chose {userChoice}.</p>
                <p>The computer chose {computerChoice}.</p>
                <p>You Won</p>
            </TextContainer>
        ) : userChoice === "Stone" && computerChoice === "Paper" ? (
            <TextContainer>
                <p>You chose {userChoice}.</p>
                <p>The computer chose {computerChoice}.</p>
                <p>You Lost</p>
            </TextContainer>
        ) : userChoice === "Paper" && computerChoice === "Scissors" ? (
            <TextContainer>
                <p>You chose {userChoice}.</p>
                <p>The computer chose {computerChoice}.</p>
                <p>You Lost</p>
            </TextContainer>
        ) : userChoice === "Paper" && computerChoice === "Stone" ? (
            <TextContainer>
                <p>You chose {userChoice}.</p>
                <p>The computer chose {computerChoice}.</p>
                <p>You Won</p>
            </TextContainer>
        ) : null
    );
}


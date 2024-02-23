import styled from "styled-components";

const TextContainer=styled.div`
display: flex;
flex-direction: column;
justify-content:center ;
align-items: center;
font-size: 1.2rem;
margin-top:3rem;
margin-bottom:5rem;
gap: 0rem;
background-color: ${(props) => props.backgroundColor};
margin-left:10rem;
margin-right: 10rem;
border-radius: 0.8rem;
`;

const Result=styled.p`
font-weight:bold;
`;



export default function Choice({ userChoice, computerChoice }) {
    return (
        (userChoice === "Scissors" && computerChoice === "Scissors") ||
        (userChoice === "Stone" && computerChoice === "Stone") ||
        (userChoice === "Paper" && computerChoice === "Paper") ? (
            <TextContainer backgroundColor="#f9bc60">
                <p>You chose {userChoice}.</p>
                <p>The computer chose {computerChoice}.</p>
                <Result>Draw</Result>
            </TextContainer>
        ) : userChoice === "Scissors" && computerChoice === "Stone" ? (
            <TextContainer backgroundColor="#E45858">
                <p>You chose {userChoice}.</p>
                <p>The computer chose {computerChoice}.</p>
                <Result>You Lost</Result>
            </TextContainer>
        ) : userChoice === "Scissors" && computerChoice === "Paper" ? (
            <TextContainer backgroundColor="#c3f0ca">
                <p>You chose {userChoice}.</p>
                <p>The computer chose {computerChoice}.</p>
                <Result>You Won</Result>
            </TextContainer>
        ) : userChoice === "Stone" && computerChoice === "Scissors" ? (
            <TextContainer backgroundColor="#c3f0ca">
                <p>You chose {userChoice}.</p>
                <p>The computer chose {computerChoice}.</p>
                <Result>You Won</Result>
            </TextContainer>
        ) : userChoice === "Stone" && computerChoice === "Paper" ? (
            <TextContainer  backgroundColor="#E45858">
                <p>You chose {userChoice}.</p>
                <p>The computer chose {computerChoice}.</p>
                <Result>You Lost</Result>
            </TextContainer>
        ) : userChoice === "Paper" && computerChoice === "Scissors" ? (
            <TextContainer backgroundColor="#E45858">
                <p>You chose {userChoice}.</p>
                <p>The computer chose {computerChoice}.</p>
                <Result>You Lost</Result>
            </TextContainer>
        ) : userChoice === "Paper" && computerChoice === "Stone" ? (
            <TextContainer backgroundColor="#c3f0ca">
                <p>You chose {userChoice}.</p>
                <p>The computer chose {computerChoice}.</p>
                <Result>You Won</Result>
            </TextContainer>
        ) : null
    );
}


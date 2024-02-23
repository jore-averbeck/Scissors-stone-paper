import { useState } from "react";
import Image from "next/image";
import styled from "styled-components";
import Choice from "@/components/Choice";


const Container=styled.div`
margin:1rem;
background-color:#fffffe;
color:#272343;
height: 100vh;
`;

const Title=styled.h1`
margin: 0 auto;
text-align: center;
`;


const ButtonContainer=styled.div`
display: flex;
justify-content: center;
margin-top: 4rem;
gap:2rem;
`;

const Button = styled.button`
  background: transparent;
  border: none;
  transition: transform 0.2s, filter 0.2s;
  cursor: pointer;

  &:hover {
    transform: scale(1.2); 
  }

  &:active {
    filter: brightness(0.8); 
  }
`;

const RefreshButton=styled.button`
display: flex;
justify-content: space-between;
align-items: center;
gap:1rem;
margin: 1rem auto 0;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
border:none;
border-radius: 0.8rem;
padding:0.5rem;
font-size:1rem;
`;




export default function HomePage() {
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);

  function handleUserChoice(choice) {
    setUserChoice(choice);
    handleComputerChoice();
  }

  function handleComputerChoice() {
    const choices = ["Scissors", "Stone", "Paper"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    const randomChoice = choices[randomIndex];
    setComputerChoice(randomChoice);
  }

  function handleRefresh() {
    setUserChoice(null);
    setComputerChoice(null);
  }

  return (
    <Container>
      <Title>Scissors, stone, paper </Title>
      <ButtonContainer>
      <Button onClick={() => handleUserChoice("Scissors")}><Image src="/Scissors.svg" width={50} height={50}/></Button>
      <Button onClick={() => handleUserChoice("Stone")}><Image src="/rock-svgrepo-com.svg" width={50} height={50}/></Button>
      <Button onClick={() => handleUserChoice("Paper")}><Image src="/Paper.svg" width={50} height={50}/></Button>
      </ButtonContainer>
      <Choice userChoice={userChoice}computerChoice={computerChoice}/>
      
       {userChoice &&
        userChoice.length > 0 && (
          <RefreshButton onClick={handleRefresh}><Image src="/Refresh.svg" width={20} height={20}/>Refresh</RefreshButton>
        )}
      
    </Container>
  );
}


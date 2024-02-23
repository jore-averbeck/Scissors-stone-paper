import { useState } from "react";
import Image from "next/image";
import styled from "styled-components";
import Choice from "@/components/Choice";


const Container=styled.div`
margin:1rem;
`;

const Title=styled.h1`
margin: 0 auto;
text-align: center;
`;


const ButtonContainer=styled.div`
display: flex;
justify-content: center;
margin-top: 2rem;
gap:0.5rem;
`;

const Button = styled.button`
  background: transparent;
  border: none;
  transition: transform 0.2s, filter 0.2s;
  cursor: pointer;

  &:hover {
    transform: scale(1.2); /* Vergrößert das Icon beim Überfahren */
  }

  &:active {
    filter: brightness(0.8); /* Ändert die Helligkeit des Icons beim Klicken */
  }
`;

const RefreshButton=styled.button`
display: flex;
justify-content: space-between;
align-items: center;
gap:1rem;
margin: 1rem auto 0;
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
      <Title>Scissors, stone, paper</Title>
      <ButtonContainer>
      <Button onClick={() => handleUserChoice("Scissors")}><Image src="/Scissors.svg" width={30} height={30}/></Button>
      <Button onClick={() => handleUserChoice("Stone")}><Image src="/rock-svgrepo-com.svg" width={30} height={30}/></Button>
      <Button onClick={() => handleUserChoice("Paper")}><Image src="/Paper.svg" width={30} height={30}/></Button>
      </ButtonContainer>
      <Choice userChoice={userChoice}computerChoice={computerChoice}/>
      
       {userChoice &&
        userChoice.length > 0 && (
          <RefreshButton onClick={handleRefresh}><Image src="/Refresh.svg" width={20} height={20}/>Refresh</RefreshButton>
        )}
      
    </Container>
  );
}


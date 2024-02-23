import { useState } from "react";

export default function HomePage() {
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);

  function handleUserChoice(choice) {
    setUserChoice(choice);
    handleComputerChoice();
  }

  function handleComputerChoice() {
    const choices = ["Schere", "Stein", "Papier"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    const randomChoice = choices[randomIndex];
    setComputerChoice(randomChoice);
  }

  function handleRefresh() {
    setUserChoice(null);
    setComputerChoice(null);
  }

  return (
    <div>
      <h1>Schere, Stein, Papier</h1>

      <button onClick={() => handleUserChoice("Schere")}>Schere</button>
      <button onClick={() => handleUserChoice("Stein")}>Stein</button>
      <button onClick={() => handleUserChoice("Papier")}>Papier</button>

      {(userChoice === "Schere" && computerChoice === "Schere") ||
      (userChoice === "Stein" && computerChoice === "Stein") ||
      (userChoice === "Papier" && computerChoice === "Papier") ? (
        <>
          <p>Du hast {userChoice} gewählt.</p>
          <p>Der Computer hat {computerChoice} gewählt.</p>
          <p>Unentschieden</p>
        </>
      ) : userChoice === "Schere" && computerChoice === "Stein" ? (
        <>
          <p>Du hast {userChoice} gewählt.</p>
          <p>Der Computer hat {computerChoice} gewählt.</p>
          <p>Verloren</p>
        </>
      ) : userChoice === "Schere" && computerChoice === "Papier" ? (
        <>
          <p>Du hast {userChoice} gewählt.</p>
          <p>Der Computer hat {computerChoice} gewählt.</p>
          <p>Gewonnen</p>
        </>
      ) : userChoice === "Stein" && computerChoice === "Schere" ? (
        <>
          <p>Du hast {userChoice} gewählt.</p>
          <p>Der Computer hat {computerChoice} gewählt.</p>
          <p>Gewonnen</p>
        </>
      ) : userChoice === "Stein" && computerChoice === "Papier" ? (
        <>
          <p>Du hast {userChoice} gewählt.</p>
          <p>Der Computer hat {computerChoice} gewählt.</p>
          <p>Verloren</p>
        </>
      ) : userChoice === "Papier" && computerChoice === "Schere" ? (
        <>
          <p>Du hast {userChoice} gewählt.</p>
          <p>Der Computer hat {computerChoice} gewählt.</p>
          <p>Verloren</p>
        </>
      ) : userChoice === "Papier" && computerChoice === "Stein" ? (
        <>
          <p>Du hast {userChoice} gewählt.</p>
          <p>Der Computer hat {computerChoice} gewählt.</p>
          <p>Gewonnen</p>
        </>
      ) : null}
       {userChoice &&
        userChoice.length > 0 && (
          <button onClick={handleRefresh}>Refresh</button>
        )}
      
    </div>
  );
}


import { useState } from "react";
import NumberSelector from "./NumberSelector";
import RoleDice from "./RoleDice";
import TotalScore from "./TotalScore";
import { OutlineButton, StyledButton } from "../styled/button";
import Rules from "./Rules";

const GamePlay = () => {
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState("");
  const[showRules,setShowRules]=useState(false);

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const roleDice = () => {
    if (!selectedNumber) {
      setError("");
      return;
    }

    const randomNumber = generateRandomNumber(1, 7);
    setCurrentDice(randomNumber);

    if (selectedNumber === randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 2);
    }

    setSelectedNumber(undefined);
  };


  const resetScore=()=>{
    setScore(0)
  }

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center" }}>
        <TotalScore score={score} />
        <NumberSelector
          error={error}
          setError={setError}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>
      <RoleDice currentDice={currentDice} roleDice={roleDice} />

      <div
        className="btns"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "20px",
        }}
      >
        <StyledButton
        onClick={resetScore}
        style={{width:'220px'}}>Reset Score</StyledButton><br />
        <OutlineButton
        onClick={()=>setShowRules((prev)=>!prev)}
        style={{width:'220px'}}>{showRules?"Hide":"Show"} Rules</OutlineButton>

      </div>

      {showRules && <Rules/>}
    </div>
  );
};

export default GamePlay;

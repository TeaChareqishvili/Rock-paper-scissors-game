import InitialBoard from "./Elements/InitialBoard";
import ResultBoard from "./Elements/ResultBoard";
import { useState } from "react";

export default function Board() {
  const [currentButton, setCurrentButton] = useState("");

  const handleCurrentButton = (button) => {
    setCurrentButton(button);
  };

  return (
    <>
      {currentButton === "" ? (
        <InitialBoard handleCurrentButtonAttribute={handleCurrentButton} />
      ) : (
        <ResultBoard
          currentButtonAttribute={currentButton}
          handleCurrentButton={handleCurrentButton}
        />
      )}
    </>
  );
}

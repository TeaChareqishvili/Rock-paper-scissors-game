import { ReactComponent as Rock } from "../../../assets/icon-rock.svg";
import { ReactComponent as Paper } from "../../../assets/icon-paper.svg";
import { ReactComponent as Scissors } from "../../../assets/icon-scissors.svg";
import { BoardButton, ResultMatch, PlayAgain } from "./BoardStyles";
import { Random } from "./CompChoice";

export default function ResultBoard({
  currentButtonAttribute,
  handleCurrentButton,
}) {
  return (
    <>
      <ResultMatch>
        <BoardButton>
          {currentButtonAttribute === "rock" ? (
            <Rock />
          ) : currentButtonAttribute === "paper" ? (
            <Paper />
          ) : (
            <Scissors />
          )}
        </BoardButton>
        <PlayAgain onClick={() => handleCurrentButton("")}>
          Play Again
        </PlayAgain>
        <Random />
      </ResultMatch>
    </>
  );
}

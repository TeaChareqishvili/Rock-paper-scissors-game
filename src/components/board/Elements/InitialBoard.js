import { ReactComponent as Rock } from "../../../assets/icon-rock.svg";
import { ReactComponent as Paper } from "../../../assets/icon-paper.svg";
import { ReactComponent as Scissors } from "../../../assets/icon-scissors.svg";
import { BoardWrapper, BoardButton } from "./BoardStyles";


export default function InitialBoard({ handleCurrentButtonAttribute }) {
  return (
      <BoardWrapper>
        <BoardButton onClick={() => handleCurrentButtonAttribute("rock")}>
          <Rock />
        </BoardButton>
        <BoardButton onClick={() => handleCurrentButtonAttribute("paper")}>
          <Paper />
        </BoardButton>

        <BoardButton onClick={() => handleCurrentButtonAttribute("scissors")}>
          <Scissors />
        </BoardButton>
      </BoardWrapper>
   
  );
}

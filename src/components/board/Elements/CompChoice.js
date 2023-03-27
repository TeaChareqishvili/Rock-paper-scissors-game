import { ReactComponent as Rock } from "../../../assets/icon-rock.svg";
import { ReactComponent as Paper } from "../../../assets/icon-paper.svg";
import { ReactComponent as Scissors } from "../../../assets/icon-scissors.svg";
import { CompButton } from "./BoardStyles";

export function Random() {
  const hands = [<Rock />, <Paper />, <Scissors />];

  const randomSigns = Math.floor(Math.random() * 3);

  return <CompButton>{hands[randomSigns]}</CompButton>;
}

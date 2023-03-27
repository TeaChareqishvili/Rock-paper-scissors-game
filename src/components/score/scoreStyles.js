import styled from "styled-components";
import { colors } from "../../colors";

export const ScoreWrapper = styled.div`
  width: 40%;
  padding: 10px 20px;
  border: solid 2px ${colors.headerOutline};
  border-radius: 16px;
  display:flex;
  justify-content:space-between;
  align-items:center;
  margin-bottom:20px;
`;

export const ScoreTitle = styled.div`
  p {
    font-family: bold;
    font-size: 24px;
    color: white;
    text-transform: uppercase;
    line-height: 1;
  }
`;

export const ScoreBoard = styled.div`
  background-color: white;
  border-radius: 12px;
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: bold;
  text-transform: uppercase;
  line-height: 1;
  color: ${colors.scoreText};

  .title {
    font-size: 16px;
  }

  .value {
    font-size: 40px;
  }
`;

import {styled} from "@mui/material/styles";
import {Card} from "@mui/material";

export const CardContainer = styled(Card)`
  width: 240px;
  margin: 8px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: none;
  &:hover {
    box-shadow: 0 1px 2px 0 rgb(60 64 67/ 30%), 0 2px 6px 2px rgb(60 64 67/ 15%);
  }
`

export const CardMessage = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #72737a;
  font-size: 20px;
  font-weight: 700;
`

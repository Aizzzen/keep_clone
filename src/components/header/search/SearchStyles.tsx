import {styled} from "@mui/material/styles";
import {InputBase} from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

export const Search = styled('div')`
  position: relative;
  border-radius: 4px;
  background-color: #ededf1;
  margin-left: 30px;
  width: 500px;
  min-height: 45px;

  &:hover {
    transition: .5s;
    background-color: #fff;
    box-shadow: 0 1px 2px 0 rgb(60 64 67/ 30%), 0 2px 6px 2px rgb(60 64 67/ 15%);
  }

  transition: .5s;
`

export const SearchIconWrapper = styled('div')`
  padding: 0 5px;
  height: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const StyledInputBase = styled(InputBase)`
  margin-left: 40px;
  color: #72737a;
  font-size: 18px;
  min-height: 50px;
`

export const CustomSearchIcon = styled(SearchOutlinedIcon)`
  color: #72737a;
  margin-left: 5px;
`

export const CustomCloseIcon = styled(CloseOutlinedIcon)`
  width: 25px;
  height: 25px;
  color: #72737a;
  position: absolute;
  right: 15px;
  bottom: 14px;

  &:hover {
    background-color: #a3a3a6;
    border-radius: 20px;
  }
`

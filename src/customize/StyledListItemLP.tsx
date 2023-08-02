import { styled } from "@mui/system";
import { ListItem } from "@mui/material";

const StyledListItem = styled(ListItem)(() => ({
  backgroundColor: "#ffffff",
  width: 650,
  height: "72px",
  borderRadius: "8px",
  //   boxShadow: 0 10 10 -10, rgba(72, 84, 159, 0.10);
  boxShadow: "0px 10px 10px -10px rgb(72 84 159 / 10%)",
  margin: "8px 0",
}));

export default StyledListItem;

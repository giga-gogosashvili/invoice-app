import { styled } from "@mui/system";
import { ListItem } from "@mui/material";

const StyledListItem = styled(ListItem)(() => ({
  backgroundColor: "#ffffff",
  width: 730,
  height: 72,
  borderRadius: "8px",
  //   boxShadow: 0 10 10 -10, rgba(72, 84, 159, 0.10);
  boxShadow: "0px 10px 10px -10px rgb(72 84 159 / 10%)",
}));

export default StyledListItem;

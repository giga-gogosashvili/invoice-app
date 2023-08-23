import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { StyledFormControl1 } from "src/customize/StyledFormControls";

interface Props {
  setFilterStatus: (a: string) => void;
  filterStatus: string | undefined;
}
export default function FilterButton(props: Props) {
  const handleChange = (event: SelectChangeEvent) => {
    props.setFilterStatus(event.target.value as string);
  };
  const matches = useMediaQuery("(min-width:768px)");

  return (
    <Box>
      <StyledFormControl1 fullWidth>
        <InputLabel id="demo-simple-select-label">
          <Typography variant="h4" color="text.primary">
            {" "}
            {matches ? "Filter by status" : "Filter"}
          </Typography>
        </InputLabel>
        <Select
          variant="outlined"
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={props.filterStatus}
          label="Status"
          onChange={handleChange}
        >
          <MenuItem value={undefined}>All</MenuItem>
          <MenuItem value={"draft"}>Draft</MenuItem>
          <MenuItem value={"pending"}>Pending</MenuItem>
          <MenuItem value={"paid"}>Paid</MenuItem>
        </Select>
      </StyledFormControl1>
    </Box>
  );
}

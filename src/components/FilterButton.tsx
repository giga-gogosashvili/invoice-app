import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

interface Props {
  setFilterStatus: (a: string) => void;
  filterStatus: string | undefined;
}
export default function FilterButton(props: Props) {
  const handleChange = (event: SelectChangeEvent) => {
    props.setFilterStatus(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 170 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Filter by status</InputLabel>
        <Select
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
      </FormControl>
    </Box>
  );
}

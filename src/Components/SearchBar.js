import { TextField } from "@mui/material";

export default function SearchBar() {
  return (
    <TextField
      id="search-bar"
      label="search here..."
      variant="outlined"
      size="small"
      sx={{ width: "100%" }}
    />
  );
}

import { TextField } from "@mui/material";

export default function SearchBar({ value, handleChange }) {
  return (
    <TextField
      id="search-bar"
      label="search here..."
      variant="outlined"
      size="small"
      sx={{ width: "100%" }}
      value={value}
      onChange={(e) => handleChange(e.target.value)}
    />
  );
}

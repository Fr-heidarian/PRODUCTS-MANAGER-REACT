import SearchBar from "./SearchBar";
import { Grid, Button } from "@mui/material";
import Item from "@mui/material/Grid";
import AddIcon from "@mui/icons-material/Add";
import RefreshIcon from "@mui/icons-material/Refresh";

export default function Header() {
  return (
    <>
      <Grid item xs={8}>
        <Item>
          <SearchBar />
        </Item>
      </Grid>
      <Grid item xs={4}>
        <Item>
          <Button
            variant="contained"
            color="success"
            sx={{ marginRight: "1rem" }}
            endIcon={<AddIcon />}
          >
            Add
          </Button>
          <Button variant="contained" color="info" endIcon={<RefreshIcon />}>
            Refresh
          </Button>
        </Item>
      </Grid>
    </>
  );
}

import SearchBar from "./SearchBar";
import { Grid, Button } from "@mui/material";
import Item from "@mui/material/Grid";
import AddIcon from "@mui/icons-material/Add";
import RefreshIcon from "@mui/icons-material/Refresh";
import { useState } from "react";
import CreateModal from "./CreateModal";

export default function Header({ onRefresh, queryString, handleChange }) {
  const [showModal, setShowModal] = useState(false);
  
  return (
    <>
      {showModal && (
        <CreateModal open={showModal} handleClose={() => setShowModal(false)} />
      )}
      <Grid item xs={8}>
        <Item>
          <SearchBar
            value={queryString}
            handleChange={(text) => handleChange(text)}
          />
        </Item>
      </Grid>
      <Grid item xs={4}>
        <Item>
          <Button
            variant="contained"
            color="success"
            sx={{ marginRight: "1rem" }}
            endIcon={<AddIcon />}
            onClick={() => setShowModal(true)}
          >
            Add
          </Button>
          <Button
            variant="contained"
            color="info"
            endIcon={<RefreshIcon />}
            onClick={() => onRefresh()}
          >
            Refresh
          </Button>
        </Item>
      </Grid>
    </>
  );
}

import ProductTable from "./Com/ProductTable";
import Header from "./Com/Header";
import { Container, Grid } from "@mui/material";
import Item from "@mui/material/Grid";

function App() {
  return (
    <Container sx={{ paddingTop: "2rem" }}>
      <Grid container spacing={2}>
        <Header />
      </Grid>
    </Container>
  );
}

export default App;

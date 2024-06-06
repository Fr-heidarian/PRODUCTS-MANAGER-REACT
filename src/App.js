import ProductTable from "./Components/ProductTable";
import Header from "./Components/Header";
import { Container, Grid } from "@mui/material";
import Item from "@mui/material/Grid";
import { useState } from "react";

function App() {
  const [refresh, setRefresh] = useState(false);

  return (
    <Container sx={{ paddingTop: "2rem" }}>
      <Grid container spacing={2}>
        <Header onRefresh={() => setRefresh(!refresh)} />
        <Grid item xs={12}>
          <Item>
            <ProductTable refresh={refresh} />
          </Item>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;

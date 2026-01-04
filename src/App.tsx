import './App.css'
import * as React from "react";
import {Box, Paper, Typography} from "@mui/material";
import DataGridStandings from "./components/DataGridStandings.tsx";

function App(): React.JSX.Element {

  return (
    <>
        <Box bgcolor={"lightblue"} position={"fixed"} top={0} left={0} width={"100%"} height={"100px"} display={"flex"} flexDirection={"column"} justifyContent={"center"} px={2}>
            <Typography fontSize={"x-large"}>2026 Gaming Championship</Typography>
            <Typography fontSize={"small"}>Powered by JT-dev.tech</Typography>
        </Box>
        <Box sx={{ p: 4 }}>
                <Paper sx={{ p: 2, height: '500px' }}>
                <DataGridStandings />
            </Paper>
        </Box>
    </>
  )
}

export default App;

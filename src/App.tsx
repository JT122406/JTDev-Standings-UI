import './App.css'
import * as React from "react";
import {Box, Button, Paper, Typography} from "@mui/material";
import DataGridStandings from "./components/DataGridStandings.tsx";

function App(): React.JSX.Element {

  return (
    <>
        <Box
            sx={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: 100,
                bgcolor: '#B3E5FC',
                boxShadow: 2,
                zIndex: 10,
            }}
        >
            <Box
                sx={{
                    maxWidth: 1200,
                    height: '100%',
                    mx: 'auto',
                    px: 3,
                    display: 'grid',
                    gridTemplateColumns: '1fr auto 1fr',
                    alignItems: 'center',
                }}
            >
                <Box />

                <Box textAlign="center">
                    <Typography variant="h5" fontWeight={600}>
                        2026 Gaming Championship
                    </Typography>
                    <Typography variant="caption" sx={{ opacity: 0.8 }}>
                        Powered by JT-dev.tech
                    </Typography>
                </Box>

                <Box display="flex" justifyContent="flex-end">
                    <Button variant="outlined">Login</Button>
                </Box>
            </Box>
        </Box>



        <Box
            sx={{
                mt: '120px',
                display: 'flex',
                justifyContent: 'center',
                px: 2,
            }}
        >
            <Paper
                sx={{
                    width: '100%',
                    maxWidth: 900,
                    p: 3,
                    borderRadius: 2,
                }}
            >
                <DataGridStandings />
            </Paper>
        </Box>

    </>
  )
}

export default App;

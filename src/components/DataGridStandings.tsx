import {DataGrid} from "@mui/x-data-grid";
import * as React from "react";
import {Box, Typography} from "@mui/material";
import {Dropdown, type DropdownItem} from "@jt122406/mui-dropdown";
import {useEffect, useState} from "react";
import {getGames} from "../APIProvider.ts";
import {GameResultColDefs} from "../const/Constants.ts";


const DataGridStandings: () => React.JSX.Element = (): React.JSX.Element => {
    const [gameID, setGameID] = React.useState<number>(1);
    const [games, setGames] = useState<DropdownItem<number>[]>([]);
    const [rows] = useState([]);

    useEffect((): void => {
        const fetchGames: () => Promise<void> = async (): Promise<void> => {
            const games: { id: number, title: string }[] = await getGames();
            setGames(games.map((game: { id: number, title: string }): {value: number, label: string} => ({value: game.id, label: game.title})));
        }
        void fetchGames();
    }, [])

    useEffect((): void => {
        //TODO: API to retrieve Game Stats for players
    }, [gameID]);


    return (<>
        <Box sx={{ mb: 2 }}>
            <Typography variant="h6" fontWeight={600}>
                Standings
            </Typography>
            <Typography variant="body2" color="text.secondary">
                Select a game to view current rankings
            </Typography>
        </Box>

        <Box sx={{ width: '100%' }}>
    <Box sx={{ mb: 2 }}>
        <Dropdown<number>
            items={games}
            value={gameID}
            onChange={value => setGameID(value.target.value)}
            fullWidth
        />
    </Box>

            <DataGrid
                rows={rows}
                columns={GameResultColDefs}
                columnVisibilityModel={{ id: false }}
                disableRowSelectionOnClick
                density="comfortable"
                sx={{
                    border: '1px solid',
                    borderColor: 'divider',
                    borderRadius: 1,
                    '& .MuiDataGrid-columnHeaders': {
                        backgroundColor: 'grey.100',
                        fontWeight: 600,
                    },
                }}
                localeText={{
                    noRowsLabel:
                        'No Available Data For: ' +
                        games.find(game => game.value === gameID)?.label,
                }}
            />
        </Box>

        </>
);
};

export default DataGridStandings;
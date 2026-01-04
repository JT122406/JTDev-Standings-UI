import {DataGrid} from "@mui/x-data-grid";
import * as React from "react";
import {Box} from "@mui/material";
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


    return (
        <Box sx={{ height: 400, width: '100%' }} display={"flex"} flexDirection={"column"} justifyContent={"center"}>
            <Dropdown<number> items={games} value={gameID} onChange={value => setGameID(value.target.value)}/>
            <DataGrid columns={GameResultColDefs} rows={rows} columnVisibilityModel={{id: false}} disableRowSelectionOnClick/>
        </Box>
    );
};

export default DataGridStandings;
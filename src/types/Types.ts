export type Record = {
    wins: number,
    losses: number,
    draws: number,
    ot_wins: number,
    ot_losses: number
}

export type GamePlayerRecord = {
    playerId: number,
    record: Record,
    gamesPlayed: number,
    points: number
}

export type GameData = {
    id: number,
    players: GamePlayerRecord[]
}
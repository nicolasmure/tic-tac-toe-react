import { O, X } from './modules/game'

export const hasWonVertical = (cells, player) =>
    (cells[0][0] === player && cells[1][0] === player && cells[2][0] === player)
    || (cells[0][1] === player && cells[1][1] === player && cells[2][1] === player)
    || (cells[0][2] === player && cells[1][2] === player && cells[2][2] === player)

export const hasWonHorizontal = (cells, player) =>
    (cells[0][0] === player && cells[0][1] === player && cells[0][2] === player)
    || (cells[1][0] === player && cells[1][1] === player && cells[1][2] === player)
    || (cells[2][0] === player && cells[2][1] === player && cells[2][2] === player)

export const hasWonDiagonal = (cells, player) =>
    (cells[0][0] === player && cells[1][1] === player && cells[2][2] === player)
    || (cells[2][0] === player && cells[1][1] === player && cells[0][2] === player)

export const convertValue = value =>
    X === value ? 'x' : O === value ? 'o' : ''

import { EMPTY } from './game';

const createCells = () => {
    let cells = [];

    for (let i = 0; i < 3; i++) {
        cells[i] = [];

        for (let j = 0; j < 3; j++) {
            cells[i][j] = EMPTY;
        }
    }

    return cells;
}

const applyChange = (cells, x, y, value) => {
    cells[x][y] = value;

    return cells;
}

const createInitialState = () => ({
    cells: createCells(),
})

export const CLICK = 'ttt/board/CLICK'
export const WRITE_CELL = 'ttt/board/WRITE_CELL'
export const RESET_BOARD = 'ttt/board/RESET_BOARD'

export const click = (x, y, player) => ({
    type: CLICK,
    x,
    y,
    player,
})

export const writeCell = (x, y, player) => ({
    type: WRITE_CELL,
    x,
    y,
    player,
})

export const resetBoard = () => ({
    type: RESET_BOARD,
})

export default (state = createInitialState(), action) => {
    switch (action.type) {
        case WRITE_CELL:
            return {
                ...state,
                cells: applyChange(state.cells, action.x, action.y, action.player),
            }

        case RESET_BOARD:
            return createInitialState()

        default:
            return state
    }
}

export const EMPTY = 0;
export const X = 1;
export const O = 2;

const INITIAL_STATE = {
    playing: true,
    player: X,
    winner: null,
}

export const END_GAME = 'ttt/game/END_GAME';
export const WIN = 'ttt/game/WIN';
export const SWITCH_PLAYER = 'ttt/game/SWITCH_PLAYER';
export const RESTART = 'ttt/game/RESTART';

export const endGame = () => ({
    type: END_GAME,
})

export const win = player => ({
    type: WIN,
    winner: player,
})

export const switchPlayer = currentPlayer => ({
    type: SWITCH_PLAYER,
    currentPlayer,
})

export const restart = () => ({
    type: RESTART,
})

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case END_GAME:
            return {
                ...state,
                playing: false,
            }

        case WIN:
            return {
                ...state,
                playing: false,
                winner: action.winner,
            }

        case SWITCH_PLAYER:
            return {
                ...state,
                player: X === action.currentPlayer
                    ? O
                    : X,
            }

        case RESTART:
            return INITIAL_STATE

        default:
            return state;
    }
}

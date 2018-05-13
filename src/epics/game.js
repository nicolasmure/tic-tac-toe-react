import { combineEpics, ofType } from 'redux-observable'
import { filter, map } from 'rxjs/operators'
import { WRITE_CELL } from '../modules/board'
import { EMPTY, endGame, switchPlayer, win } from '../modules/game'
import { hasWonDiagonal, hasWonHorizontal, hasWonVertical } from '../utils'

const switchPlayerEpic = action$ =>
    action$.pipe(
        ofType(WRITE_CELL),
        map(({ player }) => switchPlayer(player)),
    )

const checkForWinnerEpic = (action$, store) =>
    action$.pipe(
        ofType(WRITE_CELL),
        filter(({ player }) => {
            const cells = store.getState().board.cells;

            return hasWonVertical(cells, player)
                || hasWonHorizontal(cells, player)
                || hasWonDiagonal(cells, player)
            ;
        }),
        map(({ player }) => win(player)),
    )

const noMoreCellsEpic = (action$, store) =>
    action$.pipe(
        ofType(WRITE_CELL),
        filter(() => store.getState().game.playing),
        filter(() => {
            const cells = store.getState().board.cells;

            let hasEmpty = false;

            cells.map(line => line.map(value =>
                hasEmpty = hasEmpty || EMPTY === value
            ))


            return !hasEmpty;
        }),
        map(endGame)
    )

export default combineEpics(
    switchPlayerEpic,
    checkForWinnerEpic,
    noMoreCellsEpic,
)

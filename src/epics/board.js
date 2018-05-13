import { combineEpics, ofType } from 'redux-observable'
import { filter, map } from 'rxjs/operators'
import { CLICK, resetBoard, writeCell } from '../modules/board'
import { EMPTY, RESTART } from '../modules/game'

const writeCellEpic = (action$, store) =>
    action$.pipe(
        ofType(CLICK),
        filter(() => store.getState().game.playing),
        filter(({ x, y }) => store.getState().board.cells[x][y] === EMPTY),
        map(({ x, y, player }) => writeCell(x, y, player)),
    )

const resetBoardEpic = action$ =>
    action$.pipe(
        ofType(RESTART),
        map(resetBoard),
    )

export default combineEpics(
    writeCellEpic,
    resetBoardEpic,
)

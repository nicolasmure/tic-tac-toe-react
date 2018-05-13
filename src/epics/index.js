import { combineEpics } from 'redux-observable'
import board from './board'
import game from './game'

export default combineEpics(
    board,
    game,
)

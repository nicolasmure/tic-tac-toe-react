import React from 'react'
import Board from '../Board'
import { convertValue } from '../../utils'

export default ({
    playing,
    restart,
    winner,
}) =>
    <div className={`game ${playing ? 'playing' : ''}`}>
        <Board />
        <button type="button" onClick={ restart }>Restart</button>
        { winner && <p>The winner is { convertValue(winner) }.</p> }
    </div>

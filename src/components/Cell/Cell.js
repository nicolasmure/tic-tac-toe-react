import React from 'react'
import './Cell.css'
import { convertValue } from '../../utils'

export default ({
    click,
    x,
    y,
    value,
    player,
}) =>
    <div className={`cell value-${value} player-${player}`} onClick={ () => click(x, y, player)}>
        { convertValue(value) }
    </div>

import React from 'react'
import Cell from '../Cell'
import './Board.css'

export default ({
    board,
}) =>
    <section className="board">
        { board.cells.map((line, x) => line.map((value, y) =>
            <Cell
                key={ `${x}-${y}` }
                x={ x }
                y={ y }
                value={ value }
            />
        )) }
    </section>

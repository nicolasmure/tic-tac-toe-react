import { connect } from 'react-redux'
import { click } from '../../modules/board'
import Cell from './Cell'

const mapStateToProps = state => ({
    player: state.game.player,
})

const mapDispatchToProps = dispatch => ({
    click: (x, y, player) => dispatch(click(x, y, player)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Cell)

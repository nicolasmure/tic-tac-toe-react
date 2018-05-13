import { connect } from 'react-redux'
import { restart } from '../../modules/game'
import Game from './Game'

const mapStateToProps = state => ({
    playing: state.game.playing,
    winner: state.game.winner,
})

const mapDispatchToProps = dispatch => ({
    restart: () => dispatch(restart())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Game)

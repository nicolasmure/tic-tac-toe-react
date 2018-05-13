import { connect } from 'react-redux'
import Board from './Board'

const mapStateToProps = state => ({
    board: state.board,
})

export default connect(
    mapStateToProps,
)(Board)

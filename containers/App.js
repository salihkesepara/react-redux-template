import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import SimpleComponent from '../components/simple'
import * as Actions from '../actions'

class App extends Component {
    render() {
        const { users, actions } = this.props
        return (
            <div>
                <SimpleComponent />
            </div>
        )
    }
}

App.PropTypes = {
    users: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
}

function mapStateToProps(state) {
    return {
        users: state.users
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Actions, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)
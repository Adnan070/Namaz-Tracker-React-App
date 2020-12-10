import PropTypes from 'prop-types'
import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class Register extends React.Component {
  render() {
    console.log(this.props.authenticated)
    if (!this.props.authenticated) {
      return <Redirect to="/login" />
    }
    return <div>Hello from Dashboard</div>
  }
}

Register.propTypes = {
  authenticated: PropTypes.bool,
}

/**
 *
 * @param {Global State} state
 * bind state to the component props
 */
function mapStateToProps(state) {
  const { user, UI } = state
  return {
    credentials: user.credentials,
    authenticated: user.authenticated,
    errors: UI.errors,
  }
}

/**
 *
 * @param {Redux Actions} dispatch
 * bind actions to the component props
 */
function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)

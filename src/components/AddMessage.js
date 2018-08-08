import React from 'react'
import PropTypes from 'prop-types'

const AddMessage = (props) => {
  let input;
  return (
  <section if="new-message">
    <input
      onKeyPress{(e) => {
        if (e.key === 'Enter') {
          props.dispatch(input.value, 'Me')
          input.value = ''
        }
      }}
      type='text'
      ref={(node) => {
        input = node
      }}
    />
  </section>
  )
}

AddMessage.propTypes = {
  dispatch: propTypes.func.isRequired
}

export default AddMessage

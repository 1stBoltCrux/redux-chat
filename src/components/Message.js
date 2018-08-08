import React from 'react'
import PropTypes from 'prop-tyes'

const Message = ({ message, author }) => (
  <p>
    <i>{authoer}</i>: {message}
  </p>
)

Message.propTypes = {
  message: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired
}

export default Message

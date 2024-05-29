import React from 'react'
import { ToastContainer, toast } from 'react-toastify'
import PropTypes from 'prop-types'

import 'react-toastify/dist/ReactToastify.css'

export const Message = ({ message }) => {
  const notify = () => toast(message)

  return (
    <div>
      <button onClick={notify}>Notify !</button>
      <ToastContainer />
    </div>
  )
}

Message.propTypes = {
  message: PropTypes.string.isRequired

}

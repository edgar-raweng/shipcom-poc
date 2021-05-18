import React from 'react'

// Import Libraries
import { Appbar } from 'react-native-paper'
import PropTypes from 'prop-types'

const Header = ({ title }) => {

  return (

    <Appbar.Header>

      {
        title && <Appbar.Content title={ title } />
      }

    </Appbar.Header>

  )

}

Header.defaultTypes = {
  title: null,
}

Header.propTypes = {
  title: PropTypes.string,
}

export default Header
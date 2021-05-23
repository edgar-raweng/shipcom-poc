// Import React
import React, { Fragment } from 'react'

// Import Styles
import styles from './styles'

// Import Libraries
import { Button as PapperButton} from 'react-native-paper'

const Button = ({
  children,
  onPress,
  navigation,
  to,
  isText
}) => {

  const buttonMode = isText ? `text` : `contained`

  const handlerOnPress = navigation ? () => navigation.navigate( to ) : onPress

  return (

    <Fragment>

      <PapperButton
        mode={ buttonMode }
        onPress={ handlerOnPress }
      >
        {
          children
        }
      </PapperButton>

    </Fragment>

  )

}

Button.defaultProps = {
  children: null,
  onPress: () => {},
  navigation: false,
  to: ``,
  isText: false
}

export default Button
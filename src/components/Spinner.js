import React, { Fragment } from 'react'
import { Image } from 'react-native'
import spinner from '../utils/spinner.gif'

function Spinner() {
  return (
    <Fragment>
      <Image src={require('../utils/spinner.gif')} />
    </Fragment>
  )
}

export default Spinner

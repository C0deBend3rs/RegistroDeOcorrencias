import React from 'react'
import { BottomSheet } from 'react-native-elements'

export default class Select extends React.Component {
  state: {
      visible: Boolean
  }

  constructor(props: Props) {
    super(props)
    this.state = {
      visible: true
    }
  }

  render () {
    return (
      <BottomSheet>

      </BottomSheet>
    )
  }

}
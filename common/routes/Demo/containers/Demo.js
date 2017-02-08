import React from 'react'
import { StyleSheet, css } from 'aphrodite'

import 'react-widgets/dist/css/react-widgets.css'
import Multiselect from 'react-widgets/lib/Multiselect'

// This is a static page. It mostly houses demo's and will be hidden for final product
const Demo = () => {
  const colors = ['orange', 'red', 'blue', 'green']
  return (
    <div>
      <h2>Demo Page</h2>
      <h3>Multiselect - react-widgets</h3>
      <Multiselect defaultValue={['red', 'green']} data={colors}/>
    </div>
  )
}

const styles = StyleSheet.create({
  title: {
    color: '#000',
    maxWidth: 300,
    fontWeight: 'bold',
    fontSize: 56
  }
})

export default Demo

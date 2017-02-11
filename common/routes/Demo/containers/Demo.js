import React from 'react'
import { StyleSheet, css } from 'aphrodite'

// multi-select
import 'react-widgets/dist/css/react-widgets.css'
import Multiselect from 'react-widgets/lib/Multiselect'

// table
// https://github.com/facebook/fixed-data-table
import 'fixed-data-table/dist/fixed-data-table.css'
import {Table, Column, Cell} from 'fixed-data-table/dist/fixed-data-table'

// This is a static page. It mostly houses demo's and will be hidden for final product
const Demo = () => {
  const colors = ['orange', 'red', 'blue', 'green']
  // Table data as a list of array.
	const rows = [
	  ['a1', 'b1', 'c1'],
	  ['a2', 'b2', 'c2'],
	  ['a3', 'b3', 'c3'],
	  // .... and more
	];

  return (
    <div>
      <h2>Demo Page</h2>
      <h3>Multiselect - react-widgets</h3>
      <Multiselect defaultValue={['red', 'green']} data={colors}/>

      <h3>Table Demo</h3>
      <Table
	    rowHeight={50}
	    rowsCount={rows.length}
	    width={500}
	    height={500}
	    headerHeight={50}>
	    <Column
	      header={<Cell>Col 1</Cell>}
	      cell={<Cell>Column 1 static content</Cell>}
	      width={100}
	    />
	    <Column
	      header={<Cell>Col 2</Cell>}
	      cell={<Multiselect defaultValue={['red', 'green']} data={colors}/>}
	      width={200}
	    />
	    <Column
	      header={<Cell>Col 3</Cell>}
	      cell={({rowIndex, ...props}) => (
	        <Cell {...props}>
	          Data for column 3: {rows[rowIndex][2]}
	        </Cell>
	      )}
	      width={200}
	    />
	  </Table>
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

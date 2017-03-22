import React from 'react'
import Helmet from 'react-helmet'
import Nav from './Nav'
import { StyleSheet, css } from 'aphrodite'

const App = ({ children }) => {
  return (
    <div className={css(styles.root)}>
      <Helmet title='Roadmap Planner' titleTemplate='%s - Roadmap Planner' />
      <div className={css(styles.header)} >
        <h1 className={css(styles.title)}>Roadmap Planner</h1>
        <Nav />
      </div>
      {children}
      <footer className={css(styles.footer)}>
        Copyright © 2016 <a className={css(styles.footerLink)} href='http://twitter.com/jaredpalmer' target='_blank'>Jared Palmer</a>
      </footer>
    </div>
  )
}

const styles = StyleSheet.create({
  root: {
    color: '#000',
    margin: 'auto',
    padding: '0 1rem'
  },
  header: {
    marginBottom: '1.0rem'
  },
  title: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 32
  },
  footer: {
    margin: '4rem auto',
    textAlign: 'center',
    color: '#b7b7b7'
  },
  footerLink: {
    display: 'inline-block',
    color: '#000',
    textDecoration: 'none'
  }
})

export default App

if (typeof require.ensure !== 'function') require.ensure = (d, c) => c(require)

export default function createRoutes (store) {
  return {
    path: 'demo',
    getComponents (location, cb) {
      require.ensure([
        './containers/Demo'
      ], (require) => {
        let PostPage = require('./containers/Demo').default
        cb(null, PostPage)
      })
    }
  }
}

if (typeof require.ensure !== 'function') require.ensure = (d, c) => c(require)

export default function createRoutes (store) {
  return {
    path: 'people',
    getComponents (location, cb) {
      require.ensure([
        './containers/People'
      ], (require) => {
        let PostPage = require('./containers/People').default
        cb(null, PostPage)
      })
    }
  }
}

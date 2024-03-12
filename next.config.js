module.exports = {
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      '/formen': { page: '/formen' },
      '/formbr': { page: '/formbr' },
      '/formcompleteen': { page: '/formcompleteen' },
      '/formcompletebr': { page: '/formcompletebr' },
    }
  },
  basePath: '',
}

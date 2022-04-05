module.exports = {
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      '/form': { page: '/form' },
      '/formcomplete': { page: '/formcomplete' },
    }
  },
  basePath: '',
}

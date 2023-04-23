// module.exports = {
//   // ...
//   'my-plugin': {
//     enabled: true,
//     resolve: '../src/plugins/my-plugin', // path to plugin folder
//   },
//   // ...
// }
// // ./src/plugins/my-plugin
// module.exports = ({ env }) => ({
//   'netlify-deployments': {
//     enabled: true,
//   },
// })
// //
module.exports = ({ env }) => ({
  'netlify-deployments': {
    enabled: true,
    config: {
      accessToken: process.env.NETLIFY_DEPLOYMENTS_PLUGIN_ACCESS_TOKEN,
    },
  },
})

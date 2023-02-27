//  module.exports = ({ env }) => ({
//   host: env('HOST', '0.0.0.0'),
//   port: env.int('PORT', 1337),
//   app: {
//     keys: env.array('APP_KEYS'),
//   },
//   emitErrors: false,
//   url: env('PUBLIC_URL', 'https://bastartstudios.dk:1337/api'),
//   proxy: env.bool('IS_PROXIED', true),
//   cron: {
//     enabled: env.bool('CRON_ENABLED', false),
//   },
// });

//  url: 'https://api.bastartstudios.dk',

module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
 url: 'https://bastartstudios.dk/cms',
  app: {
    keys: env.array('APP_KEYS'),
  },
});

// @flow
import createAdmin from './admin';
import createApp from './app';
import http from 'http';

const app = createApp();
const server = http.createServer(app.callback());

server.listen(process.env.WEB_PORT || 9042);

if (process.env.NODE_ENV !== 'production') {
  // eslint-disable-next-line no-console
  console.log('running in DEV mode!');
}

createAdmin();

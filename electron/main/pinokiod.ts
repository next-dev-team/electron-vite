import { session } from 'electron';
import Store from 'electron-store';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Pinokiod from 'pinokiod';
import packagejson from '../../package.json';

const store = new Store();

const pinokiod = new Pinokiod({
  //  port: PORT,
  agent: 'electron',
  version: packagejson.version,
  store,
});

export const startPinokiod = async () => {
  console.log('start pinokiod');
  return await pinokiod.start({
    browser: {
      clearCache: async () => {
        console.log('clear cache', session.defaultSession);
        await session.defaultSession.clearStorageData();
        console.log('cleared');
      },
    },
  });
};

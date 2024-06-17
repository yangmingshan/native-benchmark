import { proxySetData, setReadyStart } from './proxy';

proxySetData({
  console: true,
  ready: true,
});

setReadyStart();

App({});

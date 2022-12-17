import { connect } from '../src';

try {
  const client = await connect('ws://127.0.0.1:8080/waapi');
  const info = await client.call('ak.wwise.core.getInfo', {});

  client.subscribe('ak.wwise.core.audio.imported', () => {}, {
    return: ['audioSource:language'],
  });
  console.log(info.apiVersion);
  await client.disconnect();
} catch (err) {
  console.log(err);
}

export default () => new Promise((resolve) => {
  const nodeList = [
    {
      address: 'Moscow, Russia',
      ip: '192.168.0.1',
    },
    {
      address: 'NYC, USA',
      ip: '192.168.0.2',
    },
  ];
  setTimeout(() => resolve(nodeList), 1000);
});

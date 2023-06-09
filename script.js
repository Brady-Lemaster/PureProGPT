const CLIENT_ID = 'hWmT5ZuGe51IgiMD';
const drone = new ScaleDrone(CLIENT_ID, {
  data: {
    name: 'PureProGPT',
    color: '#AFEDCB',
  },
});
drone.on('open', error => {
  const room = drone.subscribe('observable-room');
  room.on('data', (text, member) => {
    drone.publish({
    room: 'observable-room',
    message: prompt,
  });
  });
});

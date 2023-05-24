const CLIENT_ID = 'hWmT5ZuGe51IgiMD';
const drone = new ScaleDrone(CLIENT_ID, {
  data: {
    name: 'PureProGPT',
    color: '#AFEDCB',
  },
});
function botRespond(prompt) {
  drone.publish({
    room: 'observable-room',
    message: prompt,
  });
}
drone.on('open', error => {
  const room = drone.subscribe('observable-room');
  room.on('message', (text, member) => {
    if (member == 'PureProGPT') {}else{
      botRespond(text);
    }
  });
});

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
  if (error) {
    return console.error(error);
  }
  console.log('Successfully connected to Scaledrone');

  const room = drone.subscribe('observable-room');
  
  room.on('open', error => {
    if (error) {
      return console.error(error);
    }
    console.log('Successfully joined room');
  });
  
  room.on('data', (text, member) => {
    if (member=='PureProGPT') {}else{
      botRespond(text);
    }
  });
});

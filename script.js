const CLIENT_ID = 'hWmT5ZuGe51IgiMD';

const drone = new ScaleDrone(CLIENT_ID, {
  data: {
    name: 'PureProGPT Testing',
    color: '#FFFFFF',
  },
});

function botSend(botMessage) {
  drone.publish({
    room: 'observable-room',
    message: botMessage,
  });
}

function botRespond(msgToBot) {
  botSend(msgToBot)
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
    botRespond(text)
  });
});

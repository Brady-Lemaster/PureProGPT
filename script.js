const CLIENT_ID = 'hWmT5ZuGe51IgiMD';

const drone = new ScaleDrone(CLIENT_ID, {
  data: {
    name: botName,
    color: '#FFFFFF',
  },
});

const room = drone.subscribe('observable-room');

function botSend(botMessage) {
  drone.publish({
    room: 'observable-room',
    message: botMessage,
  });
}

function botRespond(msgToBot) {
  botSend(msgToBot)
}

while (2==2) {
  room.on('data', (text, member) => {
    botRespond(text)
  });
}

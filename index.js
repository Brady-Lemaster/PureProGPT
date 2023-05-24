console.log('#' + Math.floor(Math.random() * 0xFFFFFF).toString(16));

const CLIENT_ID = 'hWmT5ZuGe51IgiMD';

const drone = new ScaleDrone(CLIENT_ID, {
  data: { // Will be sent out as clientData via events
    name: botName,
    color: '#FFFFFF',
  },
});

const room = drone.subscribe('observable-room');

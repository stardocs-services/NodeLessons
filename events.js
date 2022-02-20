const EventEmitter = require('events');

const customEmitter = new EventEmitter();

//The order matters. Listen to the event first
customEmitter.on('response',(name, id)=>{
    console.log(`Data Received for Name:${name}`);
    console.log(`Data Received for Id:${id}`);
});
customEmitter.on('response',()=>{
    console.log(`Data Received as well`);
});

//must match the name in the on
customEmitter.emit('response','Amos', 31);
const os = require('os');

// info about current user
const user = os.userInfo();
console.log(user);

// system uptime in seconds
const systemUptime = os.uptime();
console.log(systemUptime);

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMemory: os.totalmem(),
    freeMemory: os.freemem(),
}
console.log(currentOS);
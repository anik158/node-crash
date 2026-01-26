import os from 'os';

// Get the operating system platform
const platform = os.platform();
console.log(`Operating System Platform: ${platform}`);

// Get the CPU architecture
const arch = os.arch();
console.log(`CPU Architecture: ${arch}`);

// Get the total memory in bytes
const totalMemory = os.totalmem();
console.log(`Total Memory: ${totalMemory} bytes`);

// Get the free memory in bytes
const freeMemory = os.freemem();
console.log(`Free Memory: ${freeMemory} bytes`);

// Get the system uptime in seconds
const uptime = os.uptime();
console.log(`System Uptime: ${uptime} seconds`);

// Get the hostname of the operating system
const hostname = os.hostname();
console.log(`Hostname: ${hostname}`);

// Get the network interfaces
const networkInterfaces = os.networkInterfaces();
console.log('Network Interfaces:', networkInterfaces);

// Get the number of CPU cores
const cpuCores = os.cpus();
console.log(`Number of CPU Cores: ${cpuCores.length}`);

//  Get user information
const userInfo = os.userInfo();
console.log('User Information:', userInfo);

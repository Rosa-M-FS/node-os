const convMb= 1024**2;
import os from 'node:os';
const getOsData=()=>{
const osData={    
     name:os.type(),
     type:os.platform(),
     version:os.version(),
     architecture:os.arch(),
     CPUs:os.cpus(),
     totalMemory:(os.totalmem() /convMb),
     freeMemory:(os.freemem()/convMb)
}
console.log(osData)}
export {getOsData};
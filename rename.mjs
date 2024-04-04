import fs from "fs";
import path from "path";
import url from 'url'

const __dirname = path.dirname(url.fileURLToPath(import.meta.url)) + '/___'
let files = fs.readdirSync(__dirname)
for (let file of files) {
  let filenamefull =path.resolve(__dirname +'/' + file)
  let isdir = fs.lstatSync(filenamefull).isDirectory()
  if(!isdir){

    let dest = path.resolve(__dirname +'/' +  file.toLowerCase())
    if(filenamefull !== dest){
      fs.rename(filenamefull,dest, function(err) {
        if ( err ) console.log('ERROR: ' + err);
      });
    }

  }
}

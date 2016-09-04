var child_process = require('child_process');
var fs = require('fs');
var path = require('path');
var cl = require('ciel');
var clog = console.log;

module.exports = function(){
   var initialD = process.cwd();
   fs.readdirSync(initialD).map(nextName => {
      var resolvedPath = path.resolve(initialD, nextName);
      if( fs.statSync(resolvedPath).isDirectory() ){
         return resolvedPath;
      } else return null;
   }).filter(nextPath => nextPath !== null).sort().forEach(nextFolderPath => {
      if(!(
         fs.readdirSync(nextFolderPath).includes('package.json')
      )) return cl.skip('No package.json in ' + nextFolderPath);

      cl.folder(nextFolderPath);
      try {
         clog( child_process.execSync('david', {
            cwd: nextFolderPath,
            encoding: 'utf8'
         }));
      } catch(err) {
         if( err.status !== 1 ){
            cl.fail( require('util').inspect(err, {
               depth: null,
               colors: true
            }));
            process.exit(1);
         }
         clog(err.stdout);
      }
   });
};
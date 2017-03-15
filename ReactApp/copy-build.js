const fs = require('fs-extra');

console.log('Copy build to: /NodeService/www');
fs.emptyDirSync('../NodeService/www');
fs.copySync('./build', '../NodeService/www');

console.log('Copy build to: /MobileApp/www');
fs.emptyDirSync('../MobileApp/www');
fs.copySync('./build', '../MobileApp/www');

console.log('Copy build to: /ElectronApp/www');
fs.emptyDirSync('../ElectronApp/www');
fs.copySync('./build', '../ElectronApp/www');
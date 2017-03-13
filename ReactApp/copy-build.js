const del = require('del');
del.sync(['../MobileApp/www/*'], {force: true});
del.sync(['../NodeService/www/*'], {force: true});

const fs = require('fs-extra');
fs.copySync('./build/', '../MobileApp/www/');
fs.copySync('./build/', '../NodeService/www/');
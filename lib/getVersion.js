var pkg=require('../package.json')

module.exports = {
    getVersion: () => {
    console.log('servermako version ' + pkg.version)
}}
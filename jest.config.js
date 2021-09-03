/** 
 * In the jest config file we specify what is the 
 * path or paths of the configuration files 
 * we are gonna use before executing any tests.
 * 
*/

module.exports = {
    setupFilesAfterEnv: ['<rootDir>/setUpTests.js'],
  };
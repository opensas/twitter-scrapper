module.exports = function() {
  var usage =
    'Usage: $0 -q [query] -o [output]\n' +
    'or just enter: $0 [query] [output]\n\n' +
    'don\'t forget to create config.js file, have a look at config.template.js\n';

  var yargs = require('yargs')
      .usage(usage)
      .alias('h', 'help')
      .describe('q', 'twitter query')
      .describe('o', 'output file (output.json by default)')
      .describe('h', 'show this help message');

  var argv = yargs.argv;

  if (argv.h) {
    yargs.showHelp();
    process.exit(0);
  }

  if (argv._.length >= 1) argv.q = argv._[0];
  if (argv._.length >= 2) argv.o = argv._[1];

  argv.o = argv.o || 'output.json';

  if (!argv.q) {
    console.log('no query specified!\n')
    yargs.showHelp();
    process.exit(0);
  }

  var options = {
    query: argv.q,
    output: argv.o
  };

  return options;

};

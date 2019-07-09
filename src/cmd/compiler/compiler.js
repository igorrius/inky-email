let compiler = require('commander');
// setup compiler running configuration
compiler
    .version('0.0.1 developers version', '-v, --version')
    .usage('[command] [options]');
// setup serve command
compiler
    .command('serve')
    .description('Start a service to handle grpc calls')
    .action(() => {
    console.info('Starting service');
});
// run command and parse input arguments
compiler
    .parse(process.argv);
//# sourceMappingURL=compiler.js.map
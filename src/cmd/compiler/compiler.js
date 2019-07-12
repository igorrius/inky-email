let compiler = require('commander');
// setup compiler running configuration
compiler
    .version('0.0.1 developers version', '-V, --version')
    .usage('[command] [options]');
// setup serve command
compiler
    .command('serve')
    .description('Start a service to handle grpc calls')
    .action(() => {
    console.info('Starting service');
    process.exit();
});
// run command and parse input arguments
compiler
    .parse(process.argv);
compiler.outputHelp();
//# sourceMappingURL=compiler.js.map
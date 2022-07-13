exports.config = {
    /**
     * specify test files
     */
    specs: [
        __dirname + '/features/*.feature'
    ],
    maxInstances: 1,

    /**
     * capabilities
     */
    capabilities: [{
        browserName: 'chrome',
        maxInstances: 1
    }],

    /**
     * test configurations
     */
    logLevel: 'info',
    framework: 'cucumber',

    reporters: ['spec'],

    cucumberOpts: {
        require: [__dirname + '/step-definitions.js'],
        tagExpression: 'not @Skip'
    }
}

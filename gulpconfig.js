/*
 * This file controls the behaviour of the build tasks in gulpfile.js
 */

var COMPONENT_NAME = 'Chart';

// Read the package.json to detect the package name and dependencies

var pkg = JSON.parse(require('fs').readFileSync('./package.json'));

//Default dependencies from package.json, except reactify ( which is used for
// the build). Dependencies can be customised by hard-coding this array.

var dependencies = [];

Object.keys(pkg.dependencies).forEach(function(i){
    if(i !== 'reactify' && i!== 'paths-js') dependencies.push(i);
});

module.exports = {
    
    component: {
        // This is the source ( entry ) file for the component
        file: COMPONENT_NAME + '.js',
        
        // The component name controls the standalone module name
        name: COMPONENT_NAME,
        
        //This is the directory to load the source file from
        src: 'src',
        
        //This is the directory to build the distribution to
        dist: 'dist',
        
        // This is the name of the package that will be exported
        // by the component file. It must match the name of your 
        // package on npm.
        
        pkgName: pkg.name,
        
        // The package dependencies are automatically build into 
        // a common bundle for the examples and executed from the 
        // package build
        
        dependencies: dependencies
        
    },
    
    example: {
        // This is the directory to load the source file from
        src: 'example/src',
        
        // This is the dirctory to build the distribution to 
        dist: 'example/dist'
    }
};
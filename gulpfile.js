var gulp = require('gulp'),
        initGulpTasks = require('react-component-gulp-tasks');


/**
 *  Task configuration is loaded from config.js
 *  
 *  Make any changes to the source or distribution files
 *  and directory configuration there
 * 
 */

var config = require('./gulpconfig');

/**
 * 
 * Tasks are added by the react-component-gulp-tasks package
 * 
 */

initGulpTasks(gulp,config);
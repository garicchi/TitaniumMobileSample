var gulp = require('gulp'),
	plugin = require('gulp-load-plugins')();

gulp.task('jshint', function(){
	return gulp.src('app/controllers/**/*.js')
		.pipe(plugin.jshint())
		.pipe(plugin.jshint.reporter('jshint-stylish'))
		.pipe(plugin.jshint.reporter('fail'));
});

gulp.task('jsbeautifier', function(){
	return gulp.src('app/controllers/**/*.js')
		.pipe(plugin.jsbeautifier({
			js: {
				indentSize: 1,
				indentChar: '\t',
				eol: '\n',
				indentLevel: 0,
				indentWithTabs: true,
				preserveNewlines: true,
				maxPreserveNewlines: 10,
				spaceInParen: false,
				spaceInEmptyParen: false,
				jslintHappy: false,
				spaceAfterAnonFunction: false,
				braceStyle: 'collapse',
				breakChainedMethods: false,
				keepArrayIndentation: true,
				keepFunctionIndentation: true,
				spaceBeforeConditional: true,
				evalCode: false,
				unescapeStrings: false,
				wrapLineLength: 0,
				wrapAttributes: 'auto',
				wrapAttributesIndentSize: 4,
				endWithNewline: false,
				commaFirst: false
			},
			logSuccess: false,
			mode: 'VERIFY_ONLY'
		}));
});
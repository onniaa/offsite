import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';
import pluginImport from 'eslint-plugin-import';

/** @type {import('eslint').Linter.Config[]} */
export default [
	{ files: ['**/*.{js,mjs,cjs,jsx}'] },
	{ languageOptions: { globals: globals.browser } },
	pluginJs.configs.recommended,
	pluginReact.configs.flat.recommended,
	{
		plugins: {
			import: pluginImport
		},
		rules: {
			'indent': [
				'error',
				'tab'
			],
			'linebreak-style': [
		    'error',
		    'unix'
			],
			'quotes': [
		    'error',
		    'single'
			],
			'semi': [
		    'error',
		    'always'
			],
			'eol-last': ['error'],
			'no-trailing-spaces': 'error',
			'space-infix-ops': ['error'],
			'object-curly-spacing': ['error', 'always'],
			'space-before-blocks': 'error',
			'import/order': ['error', {
		    'groups': ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
		    'newlines-between': 'always'
		  }
			],
			'no-multi-spaces': ['error'],
			'react/prop-types': 'off'
		}
	},
];

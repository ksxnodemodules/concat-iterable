
((module) => {
	'use strict';

	var recursiveConstructor = require('x-iterable-utils/recursive-constructor');
	var manySameElements = require('x-iterable-utils/many-same-elements');
	var ConcatIterableSuper = require('x-iterable-utils/appx-super-class')(build, iterate);

	class ConcatIterable extends ConcatIterableSuper {

		static times(...args) {
			return ConcatIterable.multiply(...args);
		}

		static multiply(iterable, times) {
			var args = manySameElements(iterable, times);
			return args.length ? new ConcatIterable(...args) : [];
		}

	}

	module.exports = ConcatIterable;

	function build(self, ...args) {
		return recursiveConstructor(self, ConcatIterable, (value) => value, ...args);
	}

	function * iterate() {
		yield * this.first;
		yield * this.second;
	}

})(module);

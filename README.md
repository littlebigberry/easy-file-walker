#Easy File Walker

An easy way to walk your file system recursively.  This package is an fs.readdir recursive directory search, that returns an array
analogous to a simple fs.readdir call.

##Install

```sh
npm install easy-file-walker
```

##Usage

Easy File Walker makes use of promises.

Lets say we have the following directory structure:

```
folder/
	inner-folder/
		my-inner-file.js
	my-file.js
```

The walker.walk function will return the following result from the above file structure:

```js
var result = [
	'inner-folder',
	'inner-folder/my-inner-file.js',
	'my-file.js'
];
```

##Example

This example uses the same folder structure as above under Usage.

```js
var path = require('path');
var walker = require('easy-file-walker');

var myPath = path.join(__dirname, 'folder');

walker.walk(myPath)
	.then(function (files) {
		console.log(files);
		//	logs:
		// 		[
		//			'inner-folder',
		//			'inner-folder/my-inner-file.js',
		//			'my-file.js'
		//		]
	});
```
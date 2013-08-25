#Easy File Walker

An easy way to walk your file system recursively.

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
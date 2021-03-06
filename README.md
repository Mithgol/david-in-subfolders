[![(a histogram of downloads)](https://nodei.co/npm-dl/davids.png?height=3)](https://npmjs.org/package/davids)

This module (`davids`) runs the [`david`](http://david-dm.org/) command in each of subfolders (subdirectories) of the current directory.

This module is written in JavaScript and requires [Node.js](http://nodejs.org/) to run. It uses some ECMAScript 2016 features, and thus a relatively recent Node.js is required (version 6.8.1 or newer). This module is tested against the latest stable version of Node.js.

## Installing davids

[![(npm package version)](https://nodei.co/npm/davids.png?downloads=true&downloadRank=true)](https://npmjs.org/package/davids)

### Installing as a global application

* Latest packaged version: `npm install -g davids`

* Latest githubbed version: `npm install -g https://github.com/Mithgol/david-in-subfolders/tarball/master`

The application becomes installed globally and appears in the `PATH`. Then use `davids` command to run the application.

### Installing as a portable application

Instead of the above, download the [ZIP-packed](https://github.com/Mithgol/david-in-subfolders/archive/master.zip) source code of the application and unpack it to some directory. Then run `npm install --production` in that directory.

You may now move that directory (for example, on a flash drive) across systems as long as they have the required version of Node.js installed.

Unlike the above (`npm -g`), the application does not appear in the `PATH`, and thus you'll have to run it directly from the application's directory. You'll also have to run `node davids` instead of `davids`.

## Testing davids

[![(build testing status)](https://img.shields.io/travis/Mithgol/david-in-subfolders/master.svg?style=plastic)](https://travis-ci.org/Mithgol/david-in-subfolders)

It is necessary to install [JSHint](http://jshint.com/) for testing.

* You may install JSHint globally (`npm install jshint -g`) or locally (`npm install jshint` in the directory of davids).

After that you may run `npm test` (in the directory of davids). Only the JS code errors are caught; the code's behaviour is not tested.

## License

MIT license (see the `LICENSE` file).

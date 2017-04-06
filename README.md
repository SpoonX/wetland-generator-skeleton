# wetland-generator-skeleton

A skeleton generator for [Wetland's pluggable CLI](https://github.com/SpoonX/wetland-cli).

## What's included

This skeletong comes with boilerplate taken care of, and some extra, minimal examples.

### Step

Steps are what [Boards](https://github.com/SpoonX/boards) uses to process your templates.

This module comes with an example step (upper) which can be removed or replaced.
The file is in `src/upper.js` and gets exported in `index.js`.

### Generator

There's a very minimal generator in `src/SkeletonGenerator.js`. All it does, is show you what a generator looks like and how to use it.

### Emoji

Just for fun, we've included emoji output for this module.

It's easy to take out. It's in `package.json` under dependencies, and gets imported in `src/SkeletonGenerator.js`.

## Getting started

Simple, clone the repository, and name it something else. Edit the Generator and step (or add some) and publish it!

## Running

This generator is runnable!

1. In any project, run `npm i -D wetland-generator-skeleton`.
1. Then, to run the generator run: `wetland generator skeleton Bob`.
1. To have the UpPeRCaSiNg alternated, run: `wetland generator skeleton Bob -a`.
1. To change the file extension, run: `wetland generator skeleton Bob -x txt`.

## License

MIT
# If you want to add any method in the library - do it:

First, and innumerable action: create a method in ```methods``` folder, and create example in ```examples``` folder.

## For build

1) npm i -g rollup
2) rollup <INPUT_FILENAME>.js --format iife --name <PACKAGE_NAME> --file <FILE_NAME>.js
```
rollup index.js --format iife --name Paqura --file dist.js
```

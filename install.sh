#!/bin/bash
set -e

npm install

## Run serverless deploy in each subdirectory
## TODO: determine only the directories that have been modified, and deploy those
for dir in ./*/; do (echo "Installing in $dir" && cd "$dir" && npm install); done

#!/usr/bin/env bash

set -e

./node_modules/.bin/next lint

yarn prettier --check

yarn ts-unused-exports tsconfig.json \
  --excludePathsFromReport='.*__mocks__.*$' \
  --excludePathsFromReport='.*pages.*$'

echo "Linting passed"

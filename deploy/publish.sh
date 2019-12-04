#!/usr/bin/env bash

remainVersion=${1}

if [ -n "$remainVersion" ]; then
  newVersion="$(grep '"version"' package.json | cut -d'"' -f4)"
else
  newVersion=$(node ./deploy/increase_version.js)
  yarn version --new-version "${newVersion}"
fi

version="$(grep '"version"' package.json | cut -d'"' -f4)"

echo newVersion=$newVersion
echo version=$version

if [ "$newVersion" == "$version" ]; then
  yarn publish --tag "${version}"
else
  exit 1
fi

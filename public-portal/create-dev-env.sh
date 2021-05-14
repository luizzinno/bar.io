#!/bin/sh
FILE=./.env.local
if test -f "$FILE"; then
  echo "Exists"
else
  cp ./.env.example ./.env.local
fi

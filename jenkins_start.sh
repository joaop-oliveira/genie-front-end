#!/bin/bash
function myCall() {
    echo "caught 0"
    exit 0
}
trap myCall SIGINT SIGQUIT SIGTERM SIGKILL
yarn start

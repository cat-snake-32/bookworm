#!/bin/bash
concurrently "NODE_ENV=development nodemon server/server.js" "NODE_ENV=development webpack serve --open"
#!/bin/bash

## initialise backend
cd backend
yarn start &

## initialise frontend
cd ../frontend
yarn start
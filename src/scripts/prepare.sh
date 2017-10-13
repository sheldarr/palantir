#!/bin/sh

if [ -e ./public/vendor/milligram.min.css ]
then
    echo "Milligram already copied"
else
    echo -n "Milligram not found. Copying from node_modules..."
    cp ./node_modules/milligram/dist/milligram.min.css ./public/vendor
    echo "OK"
fi
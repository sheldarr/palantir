#!/bin/sh

if [ -e ./public/milligram.min.css ]
then
    echo "Milligram already copied"
else
    echo -n "Milligram not found. Copying from node_modules..."
    cp ./node_modules/milligram/dist/milligram.min.css ./public
    echo "OK"
fi

if [ -e ./public/angular.min.js ]
then
    echo "Angular 1 already copied"
else
    echo -n "Angular 1 not found. Copying from node_modules..."
    cp ./node_modules/angular/angular.min.js ./public
    echo "OK"
fi

if [ -e ./public/core.js ]
then
    echo "Angular 2 already copied"
else
    echo -n "Angular 2 not found. Copying from node_modules..."
    cp ./node_modules/@angular/core/@angular/core.js ./public
    echo "OK"
fi

if [ -e ./public/mithril.min.js ]
then
    echo "Mithril already copied"
else
    echo -n "Mithril not found. Copying from node_modules..."
    cp ./node_modules/mithril/mithril.min.js ./public
    echo "OK"
fi

if [ -e ./public/react.min.js ]
then
    echo "React already copied"
else
    echo -n "React not found. Copying from node_modules..."
    cp ./node_modules/react/dist/react.min.js ./public
    echo "OK"
fi

if [ -e ./public/vue.min.js ]
then
    echo "Vue already copied"
else
    echo -n "Vue not found. Copying from node_modules..."
    cp ./node_modules/vue/dist/vue.min.js ./public
    echo "OK"
fi
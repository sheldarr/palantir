#!/bin/sh

if [ -e ./public/vendor/milligram.min.css ]
then
    echo "Milligram already copied"
else
    echo -n "Milligram not found. Copying from node_modules..."
    cp ./node_modules/milligram/dist/milligram.min.css ./public/vendor
    echo "OK"
fi

if [ -e ./public/vendor/stats.min.js ]
then
    echo "stats.js already copied"
else
    echo -n "stats.js not found. Copying from node_modules..."
    cp ./node_modules/stats.js/build/stats.min.js ./public/vendor
    echo "OK"
fi

if [ -e ./public/vendor/chance.min.js ]
then
    echo "Chance already copied"
else
    echo -n "Chance not found. Copying from node_modules..."
    cp ./node_modules/chance/dist/chance.min.js ./public/vendor
    echo "OK"
fi

if [ -e ./public/vendor/angular.min.js ]
then
    echo "Angular 1 already copied"
else
    echo -n "Angular 1 not found. Copying from node_modules..."
    cp ./node_modules/angular/angular.min.js ./public/vendor
    echo "OK"
fi

if [ -e ./public/vendor/core.js ]
then
    echo "Angular 2 already copied"
else
    echo -n "Angular 2 not found. Copying from node_modules..."
    cp ./node_modules/@angular/core/@angular/core.js ./public/vendor
    echo "OK"
fi

if [ -e ./public/vendor/mithril.min.js ]
then
    echo "Mithril already copied"
else
    echo -n "Mithril not found. Copying from node_modules..."
    cp ./node_modules/mithril/mithril.min.js ./public/vendor
    echo "OK"
fi

if [ -e ./public/vendor/react.min.js ]
then
    echo "React already copied"
else
    echo -n "React not found. Copying from node_modules..."
    cp ./node_modules/react/dist/react.min.js ./public/vendor
    echo "OK"
fi

if [ -e ./public/vendor/vue.min.js ]
then
    echo "Vue already copied"
else
    echo -n "Vue not found. Copying from node_modules..."
    cp ./node_modules/vue/dist/vue.min.js ./public/vendor
    echo "OK"
fi
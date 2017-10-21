#!/bin/bash

( cd ./javascript-frameworks-benchmark && yarn start )

declare -a frameworks=("vue")
declare -a virtualMachines=("16")

# declare -a frameworks=("angularjs" "angular" "mithril" "react" "vue")
# declare -a virtualMachines=("16" "32" "64" "128" "256")

for framework in "${frameworks[@]}"
do
    echo "$framework framework"

    for virtualMachine in "${virtualMachines[@]}"
    do
        echo "$virtualMachine virtual machines"

        node ./chrome-performance-logs-recorder/build/main.js \
            --url="http://localhost:8080/$framework" \
            --output-filename="$framework-$virtualMachine.json"
            --filter-event-names="DrawFrame,Layout,Paint" \
            --local-storage="virtualMachines:$virtualMachine" \
            --duration=6000 \
            --trim=10 \
            --verbose 
            
        node ./trace-event-format-analyzer/build/main.js \
            --paths="$framework-$virtualMachine.json" \
            --complete-events="Paint" \
            --duration-events="Layout" \
            --immediate-events="DrawFrame" \
            --output \
            --verbose
    done
done

( cd ./javascript-frameworks-benchmark && yarn stop )
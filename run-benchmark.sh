#!/bin/bash

declare -a frameworks=("angular" "angular2")
declare -a virtualMachines=("64" "128")

for framework in "${frameworks[@]}"
do
    echo "$framework"

    for virtualMachine in "${virtualMachines[@]}"
    do
        echo "$virtualMachine"

        node ./chrome-performance-logs-recorder/build/main.js --verbose --url="http://localhost:8080/$framework" --filter-event-names="DrawFrame,Layout,Paint" --duration=1000 --local-storage="virtualMachines:$virtualMachine" --output-filename="$framework.$virtualMachine.json"
        node ./trace-event-format-analyzer/build/main.js --verbose --paths="$framework.$virtualMachine.json" --complete-events="Paint" --duration-events="Layout" --immediate-events="DrawFrame" --output
    done
done


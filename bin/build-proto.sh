#!/usr/bin/env bash

# Path to proto-ts plugin
PROTOC_GEN_TS_PATH="./../node_modules/.bin/protoc-gen-ts"

cd $(dirname $0)

# crawl proto files and create known modules
for D in `find ../src/proto -type d`
do
    if [[ ${D} == "../proto" ]]
    then
        continue
    fi

    protoc \
    --plugin=protoc-gen-ts=${PROTOC_GEN_TS_PATH} \
    -I=../src/proto \
    -I=${D} \
    --js_out=import_style=commonjs,binary:../src/proto/ \
    --ts_out=import_style=commonjs,binary:../src/proto/ \
    ${D}/*.proto
done

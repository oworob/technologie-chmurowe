#!/bin/bash

# ./encrypt.sh nazwa haslo

volumename=$1
temp=$(mktemp -d)

docker run --rm -v $volumename:/volume -v $temp:/backup alpine tar cf /backup/volume.tar /volume

gpg --symmetric --cipher-algo AES256 --output $temp/volume.tar.gpg $temp/volume.tar

docker volume rm $volumename

gpg --quiet --decrypt --batch --passphrase="$2" $temp/volume.tar.gpg | docker volume create $volumename -

rm -rf $temp/volume.tar
rm -rf $temp

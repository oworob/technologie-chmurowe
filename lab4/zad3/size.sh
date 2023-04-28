#!/bin/bash

volumes=$(docker volume ls --format "{{.Name}}")

for volume in $volumes
do
  echo "Zużycie przestrzeni dyskowej przez $volume:"
  df --output='pcent' /var/lib/docker/volumes/$volume/_data
done
#!/bin/bash

### Configuration ###
SERVER=myappuser@yourserver.com
KEYFILE=
REMOTE_SCRIPT_PATH=/tmp/grenn-server/deploy.sh


function run()
{
  echo "Running: $@"
  "$@"
}


### Automation steps ###
if [[ "$KEYFILE" != "" ]]; then
  KEYARG="-i $KEYFILE"
else
  KEYARG=
fi

run scp $KEYARG deploy/work.sh $SERVER:$REMOTE_SCRIPT_PATH
echo
echo "---- Running deployment script on remote server ----"
run ssh $KEYARG $SERVER bash $REMOTE_SCRIPT_PATH
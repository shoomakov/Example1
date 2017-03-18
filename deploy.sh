NODE_ENV=production yarn run build &&
cd ./build &&
NODE_ENV=production yarn &&
# cd .. &&
# rsync -avz ./build/* ubuntuVDS2:/projects/momentum/app &&
# ssh ubuntuVDS2 'cd /projects/momentum && docker-compose stop && docker-compose up' &&
# echo 'ok'

docker build -t 2048 .

docker ps | grep -q 2048
if [ $? -eq 1 ]; then
  docker run -d --name 2048 -p 8080:80 2048
  sleep 1
fi

open -a Safari localhost:8080

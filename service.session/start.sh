docker build -t website -f dev.dockerfile .
docker run -v $(pwd)/.:/usr/src/app -p 3000:3000 website


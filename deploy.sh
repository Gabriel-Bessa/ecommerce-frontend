export img=gabrielbessadev/ecommerce-frontend:0.0.1
docker build --tag $img .
docker push $img
docker rmi -f $(docker images -f "dangling=true" -q)

echo "Running Cypress e2e tests headlessly without copying files"

npm install

cp ./docs/.env_example ./.env

docker run -it -v $PWD:/e2e -w /e2e cypress/included:11.2.0 $@
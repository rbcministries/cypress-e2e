Instructions:

- Clone repo
- run `npm install`
- run `npm test` to run tests locally on command line.
- run `npx cypress open` to run tests locally through UI

To run as Docker images
- run `npm run build` to push to ECR
- Create new task in ECS using magento-e2e cluster and Fargate magento2tests Task definition, making sure ports 443 and 80 are open



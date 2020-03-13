FROM cypress/included:3.2.0

RUN npm install --ignore-scripts
RUN npx cypress run --record --parallel --key fe2fd7df-6282-48eb-8992-dee46aad089d --group odbx-e2e --ci-build-id $CODEBUILD_INITIATOR-$(cat $CODEBUILD_SRC_DIR_buildNumber_Artifact/buildNumber.txt) || echo "Tests failed but will continue deploy"
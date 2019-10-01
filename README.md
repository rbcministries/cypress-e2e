# cypress-e2e
End-to-end testing for Our Daily Bread platforms
Reports are generated at http://odbtests.s3-website-us-east-1.amazonaws.com/reports.html

To get started
1. `mkdir project_name`
2. `cp cypress.sample.json project_name/cypress.json`
3. `cp package.sample.json project_name/package.json`
4. `npm run install:all`
6. *Furiosly writes cypress or mocha tests*
7. Add script to package.json similar to `test-odbx`, and add `&& npm run test-project_name` to end of `test` script
7. `npm run test:build`
8. View `mochawesome-report/reports.html` in a browser
9. To upload to s3, run `npm run test:upload`
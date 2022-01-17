## Cypress repo for LambdaTest

## Setup
* Clone the repo
* Install dependencies `npm install`
* In order to run the sample test on LambdaTest you need to update the file lambdatest-config.json with your username and access key.

Run Cypress sample test suite on LambdaTest 
```bash
npx lambdatest-cypress run
```

```
* Update file  lambdatest-config.json to enable local testing on LambdaTest. 
```bash
"tunnel_settings": {
      "tunnel": true,
      "tunnel_name": null
   },
```

## Notes
* You can view your test run on the [LT Dashboard](https://automation.lambdatest.com/build).

## Documentation

Here are a few important links to get you started and help you successfully integrate the CLI into your CI/CD pipelines.

-   [LambdaTest Setup & Pre-requisites](https://www.lambdatest.com/support/docs/getting-started-with-cypress-testing/)
-   [Run your first Cypress Test on LambdaTest](https://www.lambdatest.com/support/docs/running-your-first-cypress-test/)
-   [Supported OS & Browsers](https://www.lambdatest.com/support/docs/supported-browsers-and-os/)

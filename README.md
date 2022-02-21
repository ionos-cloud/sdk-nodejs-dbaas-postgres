# sdk-nodejs-dbaas
[![[ CD ] DBaaS Postgres / Node](https://github.com/ionos-cloud/sdk-resources/actions/workflows/release-dbaas-postgres-node.yml/badge.svg)](https://github.com/ionos-cloud/sdk-resources/actions/workflows/release-dbaas-postgres-node.yml)

⚠️ **_Note: Database as a Service is currently in the Closed Beta (CB) phase. We recommend keeping usage and testing to non-production critical applications. Please contact your sales representative or support for more information._**

# Node API Client For IONOS Cloud Dbaas Postgres
An enterprise-grade Database is provided as a Service (DBaaS) solution that
can be managed through a browser-based \"Data Center Designer\" (DCD) tool or
via an easy to use API.

The API allows you to create additional database clusters or modify existing
ones. It is designed to allow users to leverage the same power and
flexibility found within the DCD visual tool. Both tools are consistent with
their concepts and lend well to making the experience smooth and intuitive.

## Installation

Install the following dependencies:

```shell
npm i --save @ionos-cloud/sdk-nodejs-dbaas-postgres
```

## Usage

```javscript
const sdk = require('@ionos-cloud/sdk-nodejs-dbaas-postgres')

const config = new sdk.Configuration({username: 'username_here', password: 'password_here'});
const dcApi = new sdk.ClustersApi(config);

dcApi.clustersGet().then((response) => console.log(response));

```
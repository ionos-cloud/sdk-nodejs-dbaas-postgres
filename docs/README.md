# Overview
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
Import the SDK using:

```javascript
const sdk = require('@ionos-cloud/sdk-nodejs-dbaas-postgres')
```

Or, if the import is done from an ES module, use:

```javascript
import * as sdk from '@ionos-cloud/sdk-nodejs-dbaas-postgres';
```

Usage example:
```javascript
const sdk = require('@ionos-cloud/sdk-nodejs-dbaas-postgres')

const config = new sdk.Configuration({username: 'username_here', password: 'password_here'});
const clustersApi = new sdk.ClustersApi(config);

clustersApi.clustersGet().then((response) => console.log(response));

```

### Authentication

The username and password or the authentication token can be manually specified when initializing the SDK client:

```javascript
const config = new sdk.Configuration({username: 'username_here', password: 'password_here'});
const clustersApi = new sdk.ClustersApi(config);
```

Environment variables can also be used; the SDK uses the following variables:

* IONOS\_USERNAME - to specify the username used to login
* IONOS\_PASSWORD - to specify the password
* IONOS\_TOKEN - if an authentication token is being used

In this case, the client configuration must be initialized using `fromEnv()`:

```javascript
const client = new sdk.ClustersApi(sdk.Configuration.fromEnv());
```

{% hint style="danger" %}
**Warning**: Make sure to follow the Information Security Best Practices when using credentials within your code or storing them in a file.
{% endhint %}


## Feature Reference

The IONOS Cloud SDK for Nodejs DBaaS Postgres aims to offer access to all resources in the IONOS DBaaS Postgres API, and has additional features to make integration easier:

* Authentication for API calls
* Asynchronous request handling 

## FAQ

1. How can I open a bug report/feature request? 

Bug reports and feature requests can be opened in the Issues repository: [https://github.com/ionos-cloud/sdk-nodejs-dbaas-postgres/issues/new/choose](https://github.com/ionos-cloud/sdk-nodejs-dbaas-postgres/issues/new/choose)

2. Can I contribute to the NodeJS DBaaS Postgres SDK?

Our SDKs are automatically generated using OpenAPI Generator and don’t support manual changes. If you require changes, please open an issue and we will try to address it.
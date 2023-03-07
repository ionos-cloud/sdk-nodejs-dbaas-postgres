## 1.0.0

An enterprise-grade Database is provided as a Service (DBaaS) solution that can be managed through a browser-based "Data Center Designer" (DCD) tool or via an easy to use API.

The API allows you to create additional database clusters or modify existing ones. It is designed to allow users to leverage the same power and flexibility found within the DCD visual tool. Both tools are consistent with their concepts and lend well to making the experience smooth and intuitive.

## 1.1.1 \(March, 2023\)
### Features
* added new state for clusters: `DEGRADED`
* added new parameters: `limit` and `offset`

## 1.1.0 \(March, 2023\)

### Features

* added new property for clusters: `dns_name`

### Documentation

* generate the documentation automatically

## 1.0.1 \(May 18th, 2022\)

### Enhancements:
* `location` and `backup_location` parameters on `CreateClusterProperties` are now strings
* `Location` and `BackupLocation` models are now removed

### Features
* **new values** for `storage_type` parameter: _**SSD_STANDARD**, **SSD_PREMIUM**_. Value **_SSD_** is deprecated. Use the equivalent **_SSD_PREMIUM_** instead.

## 1.0.2 \(Jul 14th, 2022\)

### Features
* added size and location to ClusterBackup

## 1.0.3 \(Oct 26th, 2022\)

### Fixes

- Fixed `IONOS_TOKEN` authentication bug. Now, the authentication using `IONOS_TOKEN` works properly.
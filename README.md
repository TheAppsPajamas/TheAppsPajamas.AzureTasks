# TheAppsPajamas.AzureTasks

Azure pipeline tasks for [TheAppsPajamas Continuous Delivery](https://www.theappspajamas.com) Asset Pipeline Service

## Includes

TheAppsPajamas Service Account Key Installer

Installs a service account key to your pipeline before build time. Can be linked to Azure key vault to secure service account keys

## Building

    npm install
    ./src/tsc
    tfx extension create --manifest-globs vss-extension.json 

## Documentation

See [TheAppsPajamas Docs](https://www.theappspajamas.com/docs)

## Support

See [TheAppsPajamas Support](https://www.theappspajamas.com/support)

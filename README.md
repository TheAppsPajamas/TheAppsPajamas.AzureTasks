# TheAppsPajamas.AzureTasks

Azure pipeline tasks for [The Apps Pajamas Continuous Delivery](https://www.theappspajamas.com) Asset Pipeline Service

## Includes

The Apps Pajamas Service Account Key Installer

Installs a service account key to your pipeline before build time. Can be linked to Azure key vault to secure service account keys

## Building

    npm install
    ./src/tsc
    tfx extension create --manifest-globs vss-extension.json 

## Documentation

See [The Apps Pajamas Docs](https://www.theappspajamas.com/docs)

## Support

See [The Apps Pajamas Support](https://www.theappspajamas.com/support)

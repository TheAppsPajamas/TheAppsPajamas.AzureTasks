import tl = require('azure-pipelines-task-lib/task');
import fs = require('fs');
import path = require('path');

async function run() {
    try {
        //Build.SourcesDirectory or Build.Repository.LocalPath

        const inputSourcesDirectory: string = tl.getInput('sourcesdirectory', true);
        if (inputSourcesDirectory == 'bad') {
            tl.setResult(tl.TaskResult.Failed, 'Bad source directory');
            return;
        }

        const inputServiceUserAccessKey: string = tl.getInput('_serviceuseraccesskey', true);
        if (inputServiceUserAccessKey == 'bad') {
            tl.setResult(tl.TaskResult.Failed, 'Bad service user access key');
            return;
        }

        let outFile = path.normalize(`${inputSourcesDirectory}/tapsecurity.json`);

        console.log(`Installing TheAppsPajamas Service User Access Key to ${outFile}`);

        let securitySettings = {
            ServiceUserAccessKey: inputServiceUserAccessKey
        }
        var json = JSON.stringify(securitySettings, null, 2);

        fs.writeFileSync(outFile, json);
    }
    catch (err) {
        tl.setResult(tl.TaskResult.Failed, err.message);
    }
}

run();
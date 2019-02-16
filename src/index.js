"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const tl = require("azure-pipelines-task-lib/task");
const fs = require("fs");
const path = require("path");
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            //Build.SourcesDirectory or Build.Repository.LocalPath
            const inputSourcesDirectory = tl.getInput('sourcesdirectory', true);
            if (inputSourcesDirectory == 'bad') {
                tl.setResult(tl.TaskResult.Failed, 'Bad source directory');
                return;
            }
            const inputServiceUserAccessKey = tl.getInput('_serviceuseraccesskey', true);
            if (inputServiceUserAccessKey == 'bad') {
                tl.setResult(tl.TaskResult.Failed, 'Bad service user access key');
                return;
            }
            let outFile = path.normalize(`${inputSourcesDirectory}/tapsecurity.json`);
            console.log(`Installing The Apps Pajamas Service User Access Key to ${outFile}`);
            let securitySettings = {
                ServiceUserAccessKey: inputServiceUserAccessKey
            };
            var json = JSON.stringify(securitySettings, null, 2);
            fs.writeFileSync(outFile, json);
        }
        catch (err) {
            tl.setResult(tl.TaskResult.Failed, err.message);
        }
    });
}
run();

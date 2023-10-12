const core = require('@actions/core')
//const github = require('@actions/github')
const exec = require('@actions/exec')
function run() {
    // 1) Get some input values
    const bucket = core.getInput('bucket', {required:true});
    const bucketRegion = core.getInput('bucket-region', {required: true});
    const distFolder = core.getInput('dist-folder', {required:true})
    
    //github.getOctokit() we dont use it here, but could be used for accessing github REST API

    //2) Upload files
    const s3Uri = `s3://${bucket}`;
    //exec.exec(`aws s3 sync ${distFolder} ${s3Uri} --rgion ${bucketRegion}`); //this will look for environment variables to authenticate request

    const websiteUrl = `http://${bucket}.s3-website-${bucketRegion}.amazonws.com}`;
    core.setOutput('website- url', websiteUrl); //equivalent to echo 

    core.notice('Hello from my custom JavaScript Action!')
}


run();

//after cd to folder
//npm init -y #aby zainicjalizować krzystanie z npm
//npm install @actions/core @actions/github @actions/exec #aby zainstalować wtyczki JS z githuba
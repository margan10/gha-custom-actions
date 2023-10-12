const core = require('@actions/core')
const github = require('@actions/github')
const exec = require('@actions/exec')
function run() {
    
    core.notice('Hello from my custom JavaScript Action!')
}


run();

//after cd to folder
//npm init -y #aby zainicjalizować krzystanie z npm
//npm install @actions/core @actions/github @actions/exec #aby zainstalować wtyczki JS z githuba
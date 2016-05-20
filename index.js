#!/usr/bin/env node

'use strict'
var program = require('commander')
var rl = require('readline')
var prompts = rl.createInterface(process.stdin, process.stdout)
var fs = require('fs-extra')
var replace = require('replace')
var exec = require('child_process').exec

class TarsjsCLI {
  getCommand() {

    var instance = this

    program
      .version('1.0.0')
      .option('-v, --version', 'version')
      .option('-n, --new', 'new')
      .option('-r, --run', 'run')
      .parse(process.argv)

    if (program.run) {
      instance.runProject()
    } else if (program.new) {
      instance.newProject()
    }

  }

  newProject() {
    var project = {};
    prompts.question('Project name : ', function(name) {
      project.name = name

      prompts.question('IP network template (172.16.0) : ', function(iptemplate) {
        if (!iptemplate || iptemplate.split('.').length !== 3) {
          iptemplate = "172.16.0"
        }

        project.iptemplate = iptemplate

        fs.copySync(__dirname + '/node_modules/tarsjs-template', process.cwd() + '/' + project.name + '/')
        fs.unlinkSync(process.cwd() + '/' + project.name + '/package.json')
        fs.renameSync(process.cwd() + '/' + project.name + '/package0.json', process.cwd() + '/' + project.name + '/package.json')


        for (var key in project) {
          replace({
            regex: "==project." + key + "==",
            replacement: project[key],
            paths: [process.cwd() + '/' + project.name + '/'],
            recursive: true,
            silent: true,
          });
        }

        var cmd = 'cd ' + process.cwd() + '/' + project.name + '/api/; ' + 'sails new src'
        exec(cmd, function(error, stdout, stderr) {

          cmd = 'docker network rm ' + project.name + '_tars_net'
          exec(cmd, function(error, stdout, stderr) {

            fs.removeSync(process.cwd() + '/' + project.name + '/api/src/node_modules')
            /*if (stderr) console.log(stderr)
            if (stdout) console.log(stdout)
            if (error) console.log(error)*/
            console.log("Project created !")

            process.exit()

          });

        });



      });

    });
  }

  runProject() {
    console.log('not implemented yet, please use docker-compose up instead.')
  }
}
module.exports = new TarsjsCLI();

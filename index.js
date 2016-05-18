#!/usr/bin/env node

var program = require('commander')
var rl = require('readline')
var fs = require('fs-extra')
var replace = require('replace')
var exec = require('child_process').exec

var prompts = rl.createInterface(process.stdin, process.stdout)

program
  .version('1.0.0')
  .option('-v, --version', 'version')
  .option('-n, --new', 'new')
  .option('-r, --run', 'run')
  .parse(process.argv)


  if (program.run) {
    console.log('not implemented yet')
  }
  else if (program.new) {
    var project = {};
    prompts.question('Project name : ', function (name) {
      project.name = name

      prompts.question('IP address template (172.16.0) : ', function (iptemplate) {
        if(!iptemplate || iptemplate.split('.').length !== 3) iptemplate = "172.16.0"
        project.iptemplate = iptemplate

        fs.copy(__dirname+'/node_modules/tarsjs-template', process.cwd()+'/'+project.name+'/', function (err) {
          if (err) return console.error(err)


          fs.unlinkSync(process.cwd()+'/'+project.name+'/package.json')
          fs.renameSync(process.cwd()+'/'+project.name+'/package0.json', process.cwd()+'/'+project.name+'/package.json')


          for(key in project){
            replace({
              regex: "==project."+key+"==",
              replacement: project[key],
              paths: [process.cwd()+'/'+project.name+'/'],
              recursive: true,
              silent: true,
            });
          }

          var cmd = 'sails new '+process.cwd()+'/'+project.name+'/api/src';

          exec(cmd, function(error, stdout, stderr) {
            if(stderr) console.log(stderr)
            if(stdout) console.log(stdout)
            if(error) console.log(error)
            else console.log("Project created !")

            process.exit()
          });


        });

      });

    });
  }

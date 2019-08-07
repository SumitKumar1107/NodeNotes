const chalk = require('chalk');
const yargs = require('yargs');
const validator = require('validator')
const notes = require('./notes.js')

//const notes = add();
//console.log(chalk.green.inverse.bold(notes));

//console.log(validator.isEmail('andrew@example.com'))
//console.log(validator.isURL('https://mead.io'))

yargs.version('1.1.0')


// Add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder:{
      title:{
          describe:'Note title',
          demandOption:true,
          type:'string'
      }  
    },
    body:{
        describe: 'Note body',
        demandOption: true,
        type:'string',
    },
    handler: function(argv){
       notes.addNote(argv.title,argv.body)
    }
})

// remove command
yargs.command({
    command: 'remove',
    describe : 'Remove a note',
     builder:{
      title:{
          describe:'Note title',
          demandOption:true,
          type:'string'
      }  
    },
    handler: function(argv){
        notes.removeNote(argv.title)
    }
})
// list command
yargs.command({
    command: 'list',
    describe : 'List a note',
    handler: function(){
       notes.listnotes() 
    }
})
// Read the command
yargs.command({
    command: 'read',
    describe : 'Read a note',
     builder:{
      title:{
          describe:'Note title',
          demandOption:true,
          type:'string'
      }  
    },
    handler: function(argv){
        notes.readNotes(argv.title)
    }
})



yargs.parse(); 
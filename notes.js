const fs = require('fs')
const chalk = require('chalk');

const getnotes =  () => {
    return 'your notes...' 
}

const addNote = (title,body) => {
    const notes = loadNotes()
    const duplicateNotes = notes.filter((note) => note.title === title)
    
    if(duplicateNotes.length === 0){
      notes.push({
        title: title,
        body: body
    })
    
    saveNotes(notes) 
    console.log('new note added')
    }
    else
    {
        console.log('note title taken')
    }
}

const saveNotes = (notes)=>{
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}

const loadNotes = ()=>{
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }
    catch(e){
        return []
    }
}

const removeNote = title => {
    const notes = loadNotes()
    const notestokeep = notes.filter((note) => note.title !== title)
    console.log(notestokeep.length)
    if(notes.length > notestokeep.length){
      console.log(chalk.green.inverse('note removed'))
      console.log(notestokeep)
      saveNotes(notestokeep)  
    }
    else
    {
      console.log(chalk.red.inverse('no note found '))   
    }
}
const listnotes = () => {
    const notes = loadNotes()
    console.log(chalk.inverse('your notes'))
    
    notes.forEach((note) => {
        console.log(note.title)
    })
}

const readNotes = (title) => {
   const notes = loadNotes()
   const note = notes.find((note) => note.title === title)
   
   if(note){
       console.log(chalk.inverse(note.title))
       console.log(note.body)
   }
   else
   {
       console.log(chalk.red.inverse('note not found'))
   }
} 


module.exports= {
    getnotes : getnotes,
    addNote : addNote,
    removeNote : removeNote,
    listnotes: listnotes,
    readNotes:readNotes 
} 
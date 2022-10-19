const fs = require('fs');
const path = require('path');

//function to display a single note
function displayNote(id,notesArr)
{
    const display = notesArr.filter(note => note.id === id)[0];
    return display;
}

//function to add note
function createNote(body, notesArr)
{
    const note = body;
    notesArr.push(note);

    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({notes : notesArr}, null , 2)
    );

    return note;
}

//function to delete a note
function deleteNote(id,notesArr)
{
    const newNoteArr = notesArr.filter(note => note.id !== id);

    
    for(let i=0;i<newNoteArr.length;i++)
    {
        newNoteArr[i].id = i.toString();
    }
   
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({notes : newNoteArr}, null , 2)
    );

    return newNoteArr;
}


module.exports = {
    displayNote,
    createNote,
    deleteNote
}
const express = require('express');
const app = express();

const fs = require('fs');
const path = require('path');

app.use(express.urlencoded({extended:true}));
app.use(express.json());

const PORT = process.env.PORT || 3001;

const {notes} = require('./db/db.json');

//find by title name fuunction
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
        path.join(__dirname, './db/db.json'),
        JSON.stringify({notes : notesArr}, null , 2)
    );

    return note;
}

app.get('/notes/:id',(req,res)=>{
    const display = displayNote(req.params.id, notes);
    
    if(display)
    {
        res.json(display);
    }
    else
    {
        res.send(404);
    }
});

app.get('/notes',(req,res)=>{
    res.json(notes);
});

app.post('/notes',(req,res)=>{
    req.body.id = notes.length.toString();

    const note = createNote(req.body,notes);

    res.json(note);
});

app.listen(PORT,()=>{
    console.log(`Server started on ${PORT}`);
});
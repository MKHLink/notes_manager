const express = require('express');
const app = express();

const PORT = process.env.PORT || 3001;

const {notes} = require('./db/db.json');

//find by title name fuunction
function displayNote(id,notesArr)
{
    const display = notesArr.filter(note => note.id === id)[0];
    return display;
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

app.listen(PORT,()=>{
    console.log(`Server started on ${PORT}`);
});
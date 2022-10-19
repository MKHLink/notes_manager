const {displayNote, createNote, deleteNote} = require('../../lib/functions');

const router = require('express').Router();
const fs = require('fs');
const path = require('path');

//function to get a single note entry
router.get('/notes/:id',(req,res)=>{
    const {notes} = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../../db/db.json')));

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

//route to get all the notes in db.json
router.get('/notes',(req,res)=>{
    const {notes} = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../../db/db.json')));
    res.json(notes);
});

//route to create a note
router.post('/notes',(req,res)=>{
    const {notes} = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../../db/db.json')));
    req.body.id = notes.length.toString();

    const note = createNote(req.body,notes);

    res.json(note);
});

//route to delete a note
router.delete('/notes/:id',(req,res)=>{
    const {notes} = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../../db/db.json')));
    const note = deleteNote(req.params.id,notes);

    res.json(note);
});

module.exports = router;
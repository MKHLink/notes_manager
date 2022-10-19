const {displayNote,
    createNote,
    deleteNote} = require('../../lib/functions');

const router = require('express').Router();
const fs = require('fs');
const path = require('path');


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

router.get('/notes',(req,res)=>{
    const {notes} = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../../db/db.json')));
    res.json(notes);
});

router.post('/notes',(req,res)=>{
    const {notes} = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../../db/db.json')));
    req.body.id = notes.length.toString();

    const note = createNote(req.body,notes);

    res.json(note);
});

router.delete('/notes/:id',(req,res)=>{
    const {notes} = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../../db/db.json')));
    const note = deleteNote(req.params.id,notes);

    res.json(note);
});

module.exports = router;
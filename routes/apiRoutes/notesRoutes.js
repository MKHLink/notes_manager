const {displayNote,
    createNote,
    deleteNote} = require('../../lib/functions');

const router = require('express').Router();
const {notes} = require('../../db/db.json');


router.get('/notes/:id',(req,res)=>{
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
    res.json(notes);
});

router.post('/notes',(req,res)=>{
    req.body.id = notes.length.toString();

    const note = createNote(req.body,notes);

    res.json(note);
});

router.delete('/notes/:id',(req,res)=>{

    const note = deleteNote(req.params.id,notes);

    res.json(note);
});

module.exports = router;
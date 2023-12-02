const notes=[

    {
        text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam', 
        createdOn: new Date().toDateString()
    }, 
    {
        text:'Aliquam erat volutpat. Ut tincidunt, velit vel aliquam commodo, tellus urna auctor tortor, non ultrices libero ante sed magna.',
        createdOn: new Date().toDateString()
    }
]



module.exports = {
    get: (req, res) => {
        return res.json(notes);
    },

    create: (req, res) => {
        try {
            console.log(req.body);
            const newNote = req.body;
            notes.push(newNote);
            return res.status(201).json(newNote);
        } catch (error) {
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    },

    deleteNote : (req,res) =>{
        try{
            notes.splice(req.body.index, 1);
            return res.status(201).json(req.body.index);
        }
        catch(error){
            return res.status(500).json({error: 'error'})
        }
    }
};

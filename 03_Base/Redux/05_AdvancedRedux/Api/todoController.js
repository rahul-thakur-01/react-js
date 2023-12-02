const todos=[
    {
        "text":"Go to Gym at 9", "completed":false
    },
    {
        "text":"Go to Office at 10", "completed":false
    },
    {
        "text":"Meeting at 11", "completed":false
    }
]

// module.exports.get=(req, res)=>{
//     return res.end(JSON.stringify(todos));
// }

module.exports = {
    get: (req, res) => {
        return res.json(todos);
    },
    create: (req, res) => {
        const newTodo = req.body;
        todos.push(newTodo);
        return res.status(201).json(newTodo);
    },
    toggle: (req,res) => {
        todos[req.body.index].completed = !todos[req.body.index].completed;
        return res.status(201).json(req.body.index);
    }
};

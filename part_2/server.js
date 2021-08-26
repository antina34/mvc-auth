// const users = [];

// //get all users
// app.get('/users', (req, res) => {
//     res.json(users)
// })

// //create new user
// app.post('/users', async(req, res) => {
//     try {
//         // bcrypt.hash(sting, saltRounds) some randome data
//         const hashedPassword = await bcrypt.hash(req.body.password, 10)
//         const user = {
//             name: req.body.name,
//             password: hashedPassword
//         }
//         users.push(user)
//         res.status(201).send()
//     } catch {
//         res.status(500).send()
//     }
// })

// //login user
// app.post('/users/login', async(req, res) => {
//     const user = users.find(user => user.name = req.body.name)
//     if (!user) {
//         return res.status(400).send('Sorry something went wrong')
//     }
//     try {
//         if (await bcrypt.compare(req.body.password, user.password)) {
//             res.send('Success!')
//         } else {
//             res.send('Wrong password')
//         }
//     } catch {
//         res.status(500).send()
//     }
// })

const posts = [{
        username: "Jim",
        title: "Jim's post"
    },
    {
        username: "Bob",
        title: "Bob's post"
    }
]

app.get(`/posts`, authenticateToken, (req, res) => {
    res.json(posts.filter(post => post.username === req.user.name))
})
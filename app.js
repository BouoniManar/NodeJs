const express = require('express')

const app = express()


app.listen(8001,()=>{
    console.log('listening on port 8001')
})


// Route /auth/login
app.get('/auth/login', (req,res)=>{
    res.send('<h1>Welcome To TEK-UP University ! <h1>')
});



// Route /auth/register
app.get('/auth/register', (req,res) =>{
    res.sendFile(__dirname+('/accueil.html'))
})



// Route  /post/all
app.get('/post/all', (req,res)=>{
    // creation d'un tableau d'objet (array)
    const posts = [
        {id:1,title:'chapitre1' , content:'Contenu du premier chapitre'},
        { id: 2, title: 'chapitre2', content: 'Contenu du deuxième chapitre' },
        { id: 3, title: 'chapitre3', content: 'Contenu du troisième chapitre ' }
    ];
    res.json(posts);
});


// Route /post/:id
app.get('/post/id',(req,res)=>{
 res.json({id:req.params.id,content:'Contenu du premier chapitre'})
});
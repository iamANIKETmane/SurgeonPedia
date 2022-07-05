const express = require('express')
const mongoose =require('mongoose')
const Article=require('./models/article')
const methodOverride=require('method-override')
const articleRouter=require('./routes/articles')
const app =express()


mongoose.connect('mongodb://localhost/surgeon',)
app.set('view engine','ejs')//view engine is set to ejs as all veiws are in ejs and will converted to html 
app.use(express.urlencoded({extended:false}))
app.use(methodOverride('_method'))


 
app.get('/',async(req,res)=>{
    const articles =await Article.find().sort({createdAt :'desc'})
    res.render('articles/index',{articles:articles})//html doc is rendered
})
app.use('/articles',articleRouter)

app.listen(5000)
const webpack = require('webpack/lib/index.js')
const config = require('./webpack.config')
const compiler = webpack(config)
compiler.run((err, stats)=>{
    if(err){
        console.error(err)
    }else{
        console.log(stats)
    }
})
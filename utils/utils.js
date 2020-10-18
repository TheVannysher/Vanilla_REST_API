const fs = require('fs')

function writeToFile(filename,content){
    fs.writeFileSync(filename, JSON.stringify(content), 'utf-8', (error)=>{
        if(error){
            console.log(error)
        }
    })
}

module.exports = {
    writeToFile
}
var fs=require('fs');
var plugins={}
var data=fs.readdirSync('plugins');

data.forEach(function  (file) {
        if (fs.existsSync(`./plugins/${file}`)&&file !='index.js') {
            var filename=file.replace(/\..*/,function(){return ''});
            plugins[filename]=require(`./${file}`);
        }
})
module.exports=plugins;
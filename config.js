const chalk = require("chalk")
const fs = require("fs")

global.ownerNumber = ["14188083258@s.whatsapp.net"]
global.nomerOwner = "14188083258"
global.nomorOwner = ['1418083258']
global.namaDeveloper = "Lazack Bugs" // Do not change this
global.namaOwner = "Lazack Bugs"
global.namaBot = "Lazack Bugs"
global.versionBot = "15.5"
global.packname = "Lazack Bugs"
global.saluran = 'GMJ0lAyZ#jpog12CvbdGQ7u9cm9QIAeMBTEYTHwUZ1f6stOBVQjk'// ID Saluran Kamu
global.author = "Lazack Bugs"
global.saluranName = 'LAZACK BOTS' 
global.thumb = fs.readFileSync("./assets/logo.png")
global.ThM = 'https://img86.pixhost.to/images/487/563032543_skyzopedia.jpg'

let file = require.resolve(__filename) 
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})

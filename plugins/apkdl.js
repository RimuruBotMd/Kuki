let fetch = require('node-fetch')

let handler = async (m, { conn, usedPrefix, command, args }) => {
   if (!args[0]) throw `Contoh: ${usedPrefix + command} https://play.google.com/store/apps/details?id=com.linecorp.LGGRTHN`
   let res = await fetch(`https://api.lolhuman.xyz/api/apkdownloader?apikey=ayakaviki&package=${args[0]}`)
   let f = await res.json()
   let { apk_name, apk_icon, apk_version, apk_author, apk_link } = f.result
   let apkk = `Name : ${apk_name}
Version : ${apk_version}
Author : ${apk_author}
`
await conn.sendFile(m.chat, apk_icon, 'apk.jpg', apkk, m)
await conn.sendFile(m.chat, apk_link, 'apk.zip', apk_name, m)
}
handler.help = ['apkdl']
handler.tags = ['downloader']
handler.command = /^(apkdl|apkdownload)$/i
handler.limit = true

module.exports = handler
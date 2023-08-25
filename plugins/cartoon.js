let fetch = require('node-fetch')
let uploadImage = require('../lib/uploadImage.js')

let handler = async (m, { conn, usedPrefix, command, text }) => {
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) throw 'Kirim/Reply Gambar dengan caption .cartoon'
conn.chatRead(m.chat);
  conn.sendMessage(m.chat, {
    react: {
      text: '🕒',
      key: m.key,
    }
  });
let media = await q.download()
let url = await uploadImage(media)
let hasil = await (await fetch(`https://api.lolhuman.xyz/api/editor/cartoon?apikey=a03b95861cfa18e990228d7b&img=${url}`)).buffer()
await conn.sendFile(m.chat, hasil, '', wm, m)
	
}
handler.help = ['cartoon']
handler.tags = ['maker']
handler.command = /^(cartoon)$/i
handler.limit = true
module.exports = handler
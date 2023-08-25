let fetch = require('node-fetch')
let uploadImage = require('../lib/uploadImage.js')

var apikey = 'ayakaviki'

let handler = async (m, { conn, usedPrefix, command, text }) => {
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) throw 'Kirim/Reply Gambar dengan caption .myfair'
conn.chatRead(m.chat);
  conn.sendMessage(m.chat, {
    react: {
      text: '🕒',
      key: m.key,
    }
  });
let media = await q.download()
let url = await uploadImage(media)
let hasil = await (await fetch(`https://api.lolhuman.xyz/api/filter/mayfair?apikey=${apikey}&img=${url}`)).buffer()
conn.chatRead(m.chat);
  conn.sendMessage(m.chat, {
    react: {
      text: '☑️',
      key: m.key,
    }
  });
await conn.sendFile(m.chat, hasil, '', wm, m)
	
}
handler.help = ['myfair']
handler.tags = ['maker']
handler.command = /^(myfair)$/i
handler.limit = true

module.exports = handler
let { sticker } = require('../lib/sticker.js')
let axios = require('axios')

let handler = async (m, { conn, text }) => {
   if (!text) return m.reply('masukan text')
   if (text.length > 30) return m.reply('Maksimal 30 Teks!')
   conn.chatRead(m.chat);
  conn.sendMessage(m.chat, {
    react: {
      text: '🕒',
      key: m.key,
    }
  });
    let pp = await conn.profilePictureUrl(m.sender, 'image').catch(_ => './src/avatar_contact.png')

   const obj = {
      "type": "quote",
      "format": "png",
      "backgroundColor": "#000000",
      "width": 512,
      "height": 768,
      "scale": 2,
      "messages": [{
         "entities": [],
         "avatar": true,
         "from": {
            "id": 1,
            "name": m.name,
            "photo": {
               "url": pp
            }
         },
         "text": text,
         "replyMessage": {}
      }]
   }
   const json = await axios.post('https://bot.lyo.su/quote/generate', obj, {
      headers: {
         'Content-Type': 'application/json'
      }
   })
   const buffer = Buffer.from(json.data.result.image, 'base64')
   let stiker = await sticker(buffer, false, global.packname, global.author)
   conn.chatRead(m.chat);
  conn.sendMessage(m.chat, {
    react: {
      text: '☑️',
      key: m.key,
    }
  });
    if (stiker) return conn.sendFile(m.chat, stiker, 'Quotly.webp', '', m)
}

handler.help = ['qc']
handler.tags = ['sticker']
handler.command = /^(qc|quoted|quotly)$/i

module.exports = handler
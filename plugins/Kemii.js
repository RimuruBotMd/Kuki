let handler = async (m, { conn, usedPrefix: _p }) => {
  let name = await conn.getName(m.sender)
  let flaaa2 =[
'https://telegra.ph/file/6b08378c3475f9da6f8d5.jpg',
'https://telegra.ph/file/1cab71ea99529ba2fb35c.jpg',
'https://telegra.ph/file/eafab17acf59dc96617e4.jpg']
  let user = global.db.data.users[m.sender]
  let message = `
Hello *${name}* Kikuchanj is online, is there anything I can help you with??`
conn.reply(m.chat, message, m, {
      contextInfo: {
        externalAdReply: {
          title: "Kikuchanj Is Online🥀",
          body: "Ketik .menu untuk menampilkan fitur bot🥀",
          thumbnailUrl: pickRandom(flaaa2),
          mediaType: 1,
          renderLargerThumbnail: true
        }
      }
    });
}

handler.customPrefix = /^(pp|p)$/i
handler.command = new RegExp

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}
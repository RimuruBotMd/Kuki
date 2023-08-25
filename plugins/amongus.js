let handler = async (m, { conn }) => {
    conn.chatRead(m.chat);
  conn.sendMessage(m.chat, {
    react: {
      text: '🕒',
      key: m.key,
    }
  });
	conn.sendImageAsSticker(m.chat, 'https://api.betabotz.org/api/sticker/among?apikey=Kemii', m, { packname: "2023 © Kikuchanj"})
}
handler.help = ['amongus']
handler.tags = ['tools']

handler.command = /^(amongus)$/i
handler.premium = false
handler.register = true
handler.limit = 5
module.exports = handler
let handler = async (m, { conn }) => {
    conn.chatRead(m.chat);
  conn.sendMessage(m.chat, {
    react: {
      text: '🕒',
      key: m.key,
    }
  });
	conn.sendFile(m.chat, 'https://api.betabotz.org/api/nsfw/ahegao?apikey=Kemii', 'Kemii.jpg', '2023 © Kikuchanj', m)
}
handler.help = ['ahegao']
handler.tags = ['nsfw']

handler.command = /^(ahegao)$/i
handler.premium = false
handler.register = true
handler.limit = 5
module.exports = handler
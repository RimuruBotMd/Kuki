let handler = async (m, { conn }) => {
    conn.chatRead(m.chat);
  conn.sendMessage(m.chat, {
    react: {
      text: '🕒',
      key: m.key,
    }
  });
	conn.sendFile(m.chat, 'https://api.betabotz.org/api/anime/nsfwloli?apikey=Kemii', 'nsfw.jpg', 'Lolicon', m)
}
handler.help = ['lolicon']
handler.tags = ['nsfw']

handler.command = /^(lolicon)$/i
handler.premium = false
handler.register = true
handler.limit = 5
module.exports = handler
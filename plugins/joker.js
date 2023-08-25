let fetch = require('node-fetch')
let handler = async (m, { conn, args, text, command, usedPrefix, isCreator, isPrems }) => {
  if (!text) return m.reply(`Gunakan dengan cara ${usedPrefix}${command} Kemii`)
	conn.chatRead(m.chat)
	conn.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})
  let res = `https://api.lolhuman.xyz/api/textprome/jokerlogo?apikey=a03b95861cfa18e990228d7b&text=${text}`
  conn.sendFile(m.chat, res, 'joker.jpg', `Nih kak`, m, false)
}
handler.help = ['joker'].map(v => v + ' <text>')
handler.tags = ['maker']
handler.command = /^(joker)$/i
handler.register = true
handler.limit = true

module.exports = handler


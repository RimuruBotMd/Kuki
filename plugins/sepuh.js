let handler = async (m, { conn }) => {
    conn.chatRead(m.chat);
  conn.sendMessage(m.chat, {
    react: {
      text: '🕒',
      key: m.key,
    }
  });
	conn.sendFile(m.chat, 'https://telegra.ph/file/2aeb28d1449c7f5f55b29.mp4', 'sepuh.mp4', 'Ajarin Aku Dong Puh😭', m)
}
handler.customPrefix = /^(sepuh|tutor)$/i
handler.command = new RegExp

module.exports = handler
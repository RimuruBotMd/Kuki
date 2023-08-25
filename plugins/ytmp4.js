let handler = async (m, { conn, text, command }) => {
if (!text) throw 'Linknya Mana.??'
conn.chatRead(m.chat);
  conn.sendMessage(m.chat, {
    react: {
      text: '🕒',
      key: m.key,
    }
  });
try {
const url = `https://yt-downloader.akkun3704.repl.co/?url=${text}&filter=audioandvideo&quality=lowestvideo&contenttype=video/mp4`
conn.sendFile(m.chat, url, 'anu.mp4', '_Nih Kak Videonya_', m)
} catch (e) {
m.reply(eror)
}
}

handler.command = /^(ytmp4|youtubemp4|ytv)$/i
handler.help = ["ytmp4"]
handler.tags = ['downloader']
handler.limit = true

module.exports = handler
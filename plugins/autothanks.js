let handler = async (m, { conn }) => {
  let user = global.db.data.users[m.sender]
  let name = await conn.getName(m.sender)
  let date = new Date().toLocaleDateString('en-US', {timeZone: 'Asia/Makassar'})
  let time = new Date().toLocaleTimeString('en-US', {timeZone: 'Asia/Jakarta', hour: 'numeric', minute: 'numeric', hour12: true})
  let thanksWords = ['terima kasih', 'thanks', 'makasi', 'makasih', 'thank you', 'tq', 'ty']
  let isThanks = false
  thanksWords.forEach((thanksWord) => {
    if (m.text.toLowerCase().includes(thanksWord)) {
      isThanks = true
    }
  })
  if (isThanks) {
    let replyMessage = `Terimakasih Kembali Kak! *${name}*`
    conn.reply(m.chat, replyMessage, m, {
      contextInfo: {
        externalAdReply: {
          title: "Sama Sama Kak.",
          body: time,
          thumbnailUrl: 'https://telegra.ph/file/fbe50a27a6f31148fabe2.jpg',
          mediaType: 1,
          renderLargerThumbnail: true
        }
      }
    });
  }
}

handler.customPrefix = /^((thanks?|makasi|makasih|hatur nuhun|terima kasih|thank you|tq|ty)(\s|$))/i
handler.command = new RegExp
module.exports = handler


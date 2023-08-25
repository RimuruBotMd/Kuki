let handler = async(m, { conn, args, usedPrefix }) => {
  
let name = await conn.getName(m.sender)
let codeh = ['736390','882910','882010','715611','002819','562622','432282','322929','662522','443321','937100','762837','028393','625529','727638','992719','092739','727269','629461','239210']
let getRandom = codeh[Math.floor(Math.random() * codeh.length)]
conn.reply(m.chat, `
Hii *${name}* Code Verifikasi Sudah Terkirim Lewat Pesan Private Silahkan Cek Dan Lanjutkan Verifikasi❤️`, m)
setTimeout(() => {
      conn.reply(m.sender, `Dear *${name}* Ini Adalah Code Verifikasi Anda Silahkan Anda Masukan ${usedPrefix}regnope ${getRandom}`, m)
}, 1000)
}
handler.help = ['regwa <Perbaikan>']
handler.tags = ['start']
handler.command = /^(regwa)$/i
handler.limit = false
handler.private = false
handler.group = true

module.exports = handler
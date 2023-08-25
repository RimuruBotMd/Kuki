const uploadImage = require('../lib/uploadImage');
const fetch = require('node-fetch');
let handler = async (m, { 
conn, 
usedPrefix, 
command
 }) => {
	var q = m.quoted ? m.quoted : m
	var mime = (q.msg || q).mimetype || q.mediaType || ''
	if (/image/g.test(mime) && !/webp/g.test(mime)) {
		conn.chatRead(m.chat)
	    conn.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})
		try {
			const img = await q.download?.()
			let out = await uploadImage(img)
			let old = new Date()
			let res = await fetch(`https://api.betabotz.org/api/maker/jadianime?url=${out}&apikey=Kemii`)
			let convert = await res.json()
			let buff = await fetch(convert.result.img_crop_single)
  .then(res => res.buffer())
            conn.chatRead(m.chat);
  conn.sendMessage(m.chat, {
    react: {
      text: '☑️',
      key: m.key,
    }
  });
			await conn.sendMessage(m.sender, { image: buff, caption: `🍟 *Fetching* : ${((new Date - old) * 1)} ms` }, { quoted: m })
		} catch (e) {
			console.log(e)
			m.reply(`[ ! ] Identifikasi Gagal.`)
		}
	} else {
		m.reply(`Kirim gambar dengan caption *${usedPrefix + command}* atau tag gambar yang sudah dikirim`)
	}
	
};
handler.help = ['jadianime'];
handler.command = ['toanime', 'jadianime'];
handler.tags = ['maker'];
handler.premium = false;
handler.register = true;
handler.limit = 5;
module.exports = handler;
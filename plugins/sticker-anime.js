let { sticker } = require('../lib/sticker.js')

let handler = async (m, { conn, text, usedPrefix, command }) => {
conn.chatRead(m.chat);
  conn.sendMessage(m.chat, {
    react: {
      text: '🕒',
      key: m.key,
    }
  });
let stiker = await sticker(null, global.API(`${pickRandom(stikerhuuu)}`), global.packname, global.author)
    if (stiker) return conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
    throw stiker.toString()
    
}

handler.help = ['stickanime', 'animestick']
handler.tags = ['sticker', 'anime']
handler.command = /^(stickanime|animestick)$/i
handler.premium = true

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
let stikerhuuu = [

	'https://telegra.ph/file/f34d76df4a2065af1a5ba.jpg',
	'https://telegra.ph/file/05c1b22ee83bcd7723b4d.jpg',
	'https://telegra.ph/file/1d886f66a44871205335f.jpg',
	'https://telegra.ph/file/54d19a9094dc509370bf9.jpg',
	'https://telegra.ph/file/e649475bcde78a9977ee5.jpg',
	'https://telegra.ph/file/32ba20b6139b129c559c8.jpg',
	'https://telegra.ph/file/948434cda49e4af5d9f11.jpg',
	'https://telegra.ph/file/6f353c68533283fe79871.jpg',
	'https://telegra.ph/file/de268ca9b01101acf2b8a.jpg',
	'https://telegra.ph/file/fc6c5b2ae9a20c4256e7f.jpg',
	'https://telegra.ph/file/efb70bb0988640f841742.jpg',
	'https://telegra.ph/file/77d03fff530a2bcff3bf7.jpg',
	'https://telegra.ph/file/6e4623464a659dd8d902b.jpg',
	'https://telegra.ph/file/685aa39f0cb0f2c4fd85b.jpg',
	'https://telegra.ph/file/10454b9ad693e1eefea58.jpg',
	'https://telegra.ph/file/7de8ce5c290c3d8be0856.jpg',
	'https://telegra.ph/file/8d7c4eadb7a4722747074.jpg',
	'https://telegra.ph/file/ccc5f8eaac0f30919ef6c.jpg',
	'https://telegra.ph/file/95f4b43439d7888f15ea5.jpg',
	'https://telegra.ph/file/9c2a750db555bd2fad1f3.jpg',
	'https://telegra.ph/file/efc5f7e637744fd6bfec2.jpg',
	'https://telegra.ph/file/3a5231aade245665633bd.jpg',
	'https://telegra.ph/file/2ecfc76feb26ec1eab99b.jpg',
	'https://telegra.ph/file/dabb70983b4e833d98344.jpg',
	'https://telegra.ph/file/75193a893e38fc580afe6.jpg',
	'https://telegra.ph/file/217aa0f4ec76273808aa4.jpg',
	'https://telegra.ph/file/8a35d3446b97ae22c7b23.jpg',
	'https://telegra.ph/file/092df720701575a7ceaaa.jpg',
	'https://telegra.ph/file/a65184a676cd648de34c3.jpg',
	'https://telegra.ph/file/180e28807e78419d45537.jpg',
	'https://telegra.ph/file/140eff27be983e0cd6781.jpg',
	'https://telegra.ph/file/1581b791e16d0029e16b5.jpg',
	'https://telegra.ph/file/6a4b36372b4f265bae3bc.jpg',
	'https://telegra.ph/file/093caff422f194f00bc6c.jpg',
	'https://telegra.ph/file/2294b7ab49eca8a8046b2.jpg',
	'https://telegra.ph/file/869224d1c417e8b5c8ff1.jpg',
	'https://telegra.ph/file/a78443f0ee887f46808d7.jpg',
	'https://telegra.ph/file/1889878933264d16c58bf.jpg',
	'https://telegra.ph/file/735aeb47d9c4aa87aaaf3.jpg',
	'https://telegra.ph/file/fcf861516db09dda164e0.jpg',
	'https://telegra.ph/file/355d96d7e06d109435f67.jpg',
	'https://telegra.ph/file/a3bd959e8cf3131be2213.jpg',
	'https://telegra.ph/file/5d908f4a17515a15c6202.jpg',
	'https://telegra.ph/file/8902f4fc550727a62e99f.jpg',
	'https://telegra.ph/file/6a6a40e924c16a8f0de03.jpg',
	'https://telegra.ph/file/b035d3038a0b124f1d846.jpg',
	'https://telegra.ph/file/9d475f7852bf6f6193c80.jpg',
	'https://telegra.ph/file/872c360a7104d86752650.jpg',
	'https://telegra.ph/file/f6bbb53620374257bfa51.jpg',
	'https://telegra.ph/file/9b76375f3869440818d57.jpg',
	'https://telegra.ph/file/a78443f0ee887f46808d7.jpg',
	'https://telegra.ph/file/805a37b1e9a963e7d7ecf.jpg',
	'https://telegra.ph/file/f9c4d97477b647cf57a2b.jpg',
	'https://telegra.ph/file/b6905b77e6c7732592a13.jpg',
	'https://telegra.ph/file/9f82c432d0ba4cfffda9a.png',
	'https://telegra.ph/file/484083949d4bfd763b8cf.jpg',
	'https://telegra.ph/file/2b71a8d46d29351479fbc.jpg',
	'https://telegra.ph/file/ae610571b62b5ab876e9c.jpg',
	'https://telegra.ph/file/cc8255d5b989eef587af2.jpg',
	'https://telegra.ph/file/30d2e7375996abd9cfee3.jpg',
	'https://telegra.ph/file/78980c90c44a95a1d30fa.jpg',
	'https://telegra.ph/file/2ac5d8ccf23e73eaa5bfa.jpg',
	'https://telegra.ph/file/14ae0ba2da77d74e6b80c.jpg',
	'https://telegra.ph/file/b6905b77e6c7732592a13.jpg',
	'https://telegra.ph/file/9da45a352eb4c40e5d641.jpg',
	'https://telegra.ph/file/59e78846ee365975ee6e3.jpg',
	'https://telegra.ph/file/1bf7dee46b83eb4c41d7d.jpg',
	'https://telegra.ph/file/0525a7929f819cb8278f3.jpg',
	'https://telegra.ph/file/df4680f51f1da37f0e5de.jpg',
	'https://telegra.ph/file/222c96d6f5cfdec4cc25a.jpg',
	'https://telegra.ph/file/f34d76df4a2065af1a5ba.jpg',
	'https://telegra.ph/file/05c1b22ee83bcd7723b4d.jpg',
	'https://telegra.ph/file/1d886f66a44871205335f.jpg',
	'https://telegra.ph/file/54d19a9094dc509370bf9.jpg',
	'https://telegra.ph/file/e649475bcde78a9977ee5.jpg',
	'https://telegra.ph/file/32ba20b6139b129c559c8.jpg',
	'https://telegra.ph/file/948434cda49e4af5d9f11.jpg',
	'https://telegra.ph/file/6f353c68533283fe79871.jpg',
	'https://telegra.ph/file/de268ca9b01101acf2b8a.jpg',
	'https://telegra.ph/file/fc6c5b2ae9a20c4256e7f.jpg',
	'https://telegra.ph/file/efb70bb0988640f841742.jpg',
	'https://telegra.ph/file/77d03fff530a2bcff3bf7.jpg',
	'https://telegra.ph/file/6e4623464a659dd8d902b.jpg',
	'https://telegra.ph/file/685aa39f0cb0f2c4fd85b.jpg',
	'https://telegra.ph/file/10454b9ad693e1eefea58.jpg',
	'https://telegra.ph/file/7de8ce5c290c3d8be0856.jpg',
	'https://telegra.ph/file/8d7c4eadb7a4722747074.jpg',
	'https://telegra.ph/file/ccc5f8eaac0f30919ef6c.jpg',
	'https://telegra.ph/file/95f4b43439d7888f15ea5.jpg',
	'https://telegra.ph/file/9c2a750db555bd2fad1f3.jpg',
	'https://telegra.ph/file/efc5f7e637744fd6bfec2.jpg',
	'https://telegra.ph/file/3a5231aade245665633bd.jpg',
	'https://telegra.ph/file/2ecfc76feb26ec1eab99b.jpg',
	'https://telegra.ph/file/dabb70983b4e833d98344.jpg',
	'https://telegra.ph/file/75193a893e38fc580afe6.jpg',
	'https://telegra.ph/file/217aa0f4ec76273808aa4.jpg',
	'https://telegra.ph/file/8a35d3446b97ae22c7b23.jpg',
	'https://telegra.ph/file/092df720701575a7ceaaa.jpg',
	'https://telegra.ph/file/a65184a676cd648de34c3.jpg',
	'https://telegra.ph/file/180e28807e78419d45537.jpg',
	'https://telegra.ph/file/140eff27be983e0cd6781.jpg',
	'https://telegra.ph/file/1581b791e16d0029e16b5.jpg',
	'https://telegra.ph/file/6a4b36372b4f265bae3bc.jpg',
	'https://telegra.ph/file/093caff422f194f00bc6c.jpg',
	'https://telegra.ph/file/2294b7ab49eca8a8046b2.jpg',
	'https://telegra.ph/file/869224d1c417e8b5c8ff1.jpg',
	'https://telegra.ph/file/a78443f0ee887f46808d7.jpg',
	'https://telegra.ph/file/1889878933264d16c58bf.jpg',
	'https://telegra.ph/file/735aeb47d9c4aa87aaaf3.jpg',
	'https://telegra.ph/file/fcf861516db09dda164e0.jpg',
	'https://telegra.ph/file/355d96d7e06d109435f67.jpg',
	'https://telegra.ph/file/f1db29ed188159d14fc44.jpg',
	'https://telegra.ph/file/d2f5e2aca7f2c8ec732f6.jpg',
	'https://telegra.ph/file/8d20d271911c64d1c4acf.jpg',
	'https://telegra.ph/file/ee5faa155d540e189687f.jpg',
	'https://telegra.ph/file/305301b1bc211a02bffce.jpg',
	'https://telegra.ph/file/d56bfca798e704148c592.jpg',
	'https://telegra.ph/file/433f5544a8de58b766248.jpg',
	'https://telegra.ph/file/adf02aabeeac135c40333.jpg',
	'https://telegra.ph/file/22fc7baa39472b570c23c.jpg',
	'https://telegra.ph/file/22fc7baa39472b570c23c.jpg',
	'https://telegra.ph/file/ac28e289077fa9bea1d72.jpg',
	'https://telegra.ph/file/cf387acdc48d2d65035b9.jpg',
	'https://telegra.ph/file/7a551521c4a620e6e2448.jpg',
	'https://telegra.ph/file/17d77676cafe1adb22951.jpg',
	'https://telegra.ph/file/6afbd19d5c5b61e715467.jpg',
	'https://telegra.ph/file/c32176197b2809065004f.jpg',
	'https://telegra.ph/file/496995500a75fcbbeec9d.jpg',
	'https://telegra.ph/file/ac05c193e77dc1eb42536.jpg',
	'https://telegra.ph/file/a43afff9eb761b45c7a44.jpg'
]
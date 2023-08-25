const {
	createHash
} = require('crypto');
const fetch = require('node-fetch');

let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i;
let handler = async function(m, {
    conn,
	text,
	usedPrefix
}) {
	let user = global.db.data.users[m.sender];
	if (user.registered === true) throw `Kamu Sudah Register\nMau Register Ulang? Ketik ${usedPrefix}unreg 90259a21exxxxxx`;
	if (!Reg.test(text)) throw `Incorrect format\n*${usedPrefix}daftar nama.umur*`;
	let [_, name, splitter, age] = text.match(Reg);
	if (!name) throw 'Name cannot be empty (Alphanumeric)';
	if (!age) throw 'Age cannot be empty (Numeric)';
	age = parseInt(age);
	if (age > 120) throw 'Terlalu Tua.';
	if (age < 5) throw 'Terlalu Muda.';
	user.name = name.trim();
	user.age = age;
	user.regTime = +new Date();
	user.registered = true;
	let sn = createHash('md5').update(m.sender).digest('hex');

	let balanceBonus = getRandomInt(100, 1000);
	let limitBonus = getRandomInt(100, 200);
	let expBonus = getRandomInt(10000, 100000);

	let registerinfo = 
		`
Register Successful!

╭─「 Info 」
│ Name: ${name}
│ Umur: ${age}
│ Balance: +${balanceBonus}
│ Limit: +${limitBonus}
│ Exp: +${expBonus}
│ SN: ${sn}
╰────
    `
    conn.reply(m.chat, registerinfo, m, {
      contextInfo: {
        externalAdReply: {
          title: "Register Successfull!",
          body: `Selamat Kak ${name} Register Successfull`,
          thumbnailUrl: 'https://telegra.ph/file/29ee22b2ac524a1c3d658.jpg',
          mediaType: 1,
          renderLargerThumbnail: true
        }
      }
    });
};

handler.help = ['register', 'daftar'].map((v) => v + ' <name>.<age>');
handler.tags = ['start'];
handler.command = /^(register|daftar)$/i;

module.exports = handler;

function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
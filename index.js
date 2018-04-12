const Discord = require("discord.js");
const client = new Discord.Client();
const bot = new Discord.Client();

const token = "NDMyNDQ0MjUzNjk2OTUwMjc5.Dau6nw.o1DTk5qjRPN_Og031lc8yhNUmFo";
const prefix = "%";

client.login(token);

client.on("ready", () => {
	console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", message => {
	if (message.author.bot || message.author.id == client.user.id || !message.content.startsWith(prefix)) return;

	var explode = message.content.split(" ");
	var command = explode.shift().replace(prefix, "");

	var botMember = message.guild.members.get(client.user.id);
	var botPermissions = message.channel.permissionsFor(botMember);
	var memberPermissions = message.channel.permissionsFor(message.member);

	switch (command) {
		case "kick" : {
			if (!memberPermissions.has("KICK_MEMBERS")) {
				message.channel.send("You don't have permissions to kick other users!");
				break;
			}

			if (!botPermissions.has("KICK_MEMBERS")) {
				message.channel.send("Bot doesn't have permissions to kick users!");
				break;
			}

			if (message.mentions.members.size == 0) {
				message.channel.send("You have to mention the user you want to kick!");
				break;		
			}

			message.mentions.members.forEach((member, memberId) => {
				if (!member.kickable) {
					message.channel.send(`Unable to kick **${member.tag}**!`);
				} else {
					member.kick().then(() => {
						message.channel.send(`Kicked **${member.tag}**!`);
					})
					.catch(console.error);
				}
			});

			break;
		}

		case "ban" : {
			if (!memberPermissions.has("BAN_MEMBERS")) {
				message.channel.send("You don't have permissions to ban other users!");
				break;
			}

			if (!botPermissions.has("BAN_MEMBERS")) {
				message.channel.send("Bot doesn't have permissions to ban users!");
				break;
			}

			if (message.mentions.members.size == 0) {
				message.channel.send("You have to mention the user you want to ban!");
				break;		
			}

			message.mentions.members.forEach((member, memberId) => {
				if (!member.bannable) {
					message.channel.send(`Unable to ban **${member.tag}**!`);
				} else {
					member.kick().then(() => {
						message.channel.send(`Banned **${member.tag}**!`);
					})
					.catch(console.error);
				}
			});

			break;
		}

		case "hug" : {
			if (message.mentions.members.size == 0) {
				message.channel.send("You have to mention the user you want to hug!");
				break;		
			}

			var images = [
				"https://media.giphy.com/media/BXrwTdoho6hkQ/giphy.gif",
				"https://media.giphy.com/media/qscdhWs5o3yb6/giphy.gif",
				"https://media.giphy.com/media/xZshtXrSgsRHy/giphy.gif",
				"https://media.giphy.com/media/svXXBgduBsJ1u/giphy.gif",
                "https://media.giphy.com/media/143v0Z4767T15e/giphy.gif",
                "https://media.giphy.com/media/od5H3PmEG5EVq/giphy.gif",
				"https://i.imgur.com/KWCgD5x.gif",
				"https://lh3.googleusercontent.com/-oWQTWYfhlEI/VWRQDOAIYCI/AAAAAAAABWc/Qr-Xc6G8Nuo/w800-h800/tumblr_m68m3wjllW1qewqw2.gif",
				"https://i.imgur.com/6koVXbP.gif",
				"https://pa1.narvii.com/6717/9c8654d42e2d13eca2ec5ce8f9052e8350c997fa_00.gif",
                "https://media1.tenor.com/images/d0c2e7382742f1faf8fcb44db268615f/tenor.gif",
                "https://vignette.wikia.nocookie.net/r2d/images/4/40/9cd13826.gif/revision/latest?cb=20141229175738", 
                "https://thumbs.gfycat.com/WellgroomedVapidKitten-max-1mb.gif",
				"https://cdn.discordapp.com/attachments/396609929504489473/432552500361691156/tenor.png"
				
			];

			message.mentions.members.forEach((member, memberId) => {
				message.channel.send(new Discord.RichEmbed({
					description: `**${message.member.displayName}** hugs **${member.displayName}**!`,
					image: {
						url: images[Math.floor(Math.random() * images.length)]
					}
				}));
			});

			break;
		}

		case "spank" : {
			if (message.mentions.members.size == 0) {
				message.channel.send("You have to mention the user you want to spank!");
				break;		
			}

			var images = [
				"https://78.media.tumblr.com/8d9457527e4d925186510708bf752a4b/tumblr_mzgeclJJ9Y1rbnx7io1_500.gif",
				"http://img1.ak.crunchyroll.com/i/spire1/fd23a596b5b6155c89420717dbf9c4e81464631514_full.gif",
				"http://i.giphy.com/l41lNLGDSAZo1lcd2.gif",
				"https://ci.memecdn.com/6928944.gif",
				"https://media.giphy.com/media/zkn7frya243hm/giphy.gif",
				"http://i.imgur.com/PBZVXVW.gif",
				"http://animediet.net/wp-content/uploads/2012/10/tumblr_mau3m763Y71qzd219o9_500.gif",
				"http://ww4.sinaimg.cn/mw690/a801236bjw1f3qduj81g1g20dc07i4qv.gif",
				"https://ncache.ilbe.com/files/attach/new/20170917/72258130/8628727813/10029333479/611445cdede65d2e30ea2eaf174adba6.gif",
				"https://memestatic.fjcdn.com/gifs/Spankings_a76d6e_6374436.gif",
				"https://pokenirvash2.files.wordpress.com/2016/03/08-spanking.gif"
				
			];

			message.mentions.members.forEach((member, memberId) => {
				message.channel.send(new Discord.RichEmbed({
					description: `**${message.member.displayName}** spanked **${member.displayName}**!`,
					image: {
						url: images[Math.floor(Math.random() * images.length)]
					}
				}));
			});

			break;
		}

		case "kiss" : {
			if (message.mentions.members.size == 0) {
				message.channel.send("You have to mention the user you want to kiss!");
				break;		
			}

			var images = [
				"https://78.media.tumblr.com/582d44fc3e01e6c4b5d43360097cefca/tumblr_mvt3bpKsUQ1r02cm5o1_500.gif",
				"https://78.media.tumblr.com/582d44fc3e01e6c4b5d43360097cefca/tumblr_mvt3bpKsUQ1r02cm5o1_500.gif",
				"https://i.pinimg.com/originals/e8/3a/fa/e83afa35d71203bf60764cbbc17516db.gif",
				"https://media.giphy.com/media/cPGr0rmMotcxW/giphy.gif",
				"https://78.media.tumblr.com/2c0afb2bce3dea809f5e9dd283dc459b/tumblr_oh2v64hpfy1tlmyzco1_500.gif",
				"http://pa1.narvii.com/6489/30e1c9cb773b1dba3b6dde55f2310dfcd952d386_00.gif",
				"https://pa1.narvii.com/5971/59017b02a30fbd83c051aa5218926e49ac45e4bc_hq.gif",
				"https://78.media.tumblr.com/3f923b744494786b5d00116c812534b3/tumblr_p4v8v8PVe41w7cvmoo1_500.gif",
				"https://78.media.tumblr.com/301ae2d7f59f33f9272846916fa2e16d/tumblr_oxibrsJa1l1t87n9ho1_500.gif",
				"https://78.media.tumblr.com/59a9740c35e8d938d0d5714c8fbd7549/tumblr_nhza7bifQf1tjv4fjo1_500.gif"
				
			];

			message.mentions.members.forEach((member, memberId) => {
				message.channel.send(new Discord.RichEmbed({
					description: `**${message.member.displayName}** kisses **${member.displayName}**...`,
					image: {
						url: images[Math.floor(Math.random() * images.length)]
					}
				}));
			});

			break;
		}

		case "slap" : {
			if (message.mentions.members.size == 0) {
				message.channel.send("You have to mention the user you want to slap!");
				break;		
			}

			var images = [
				"https://media.giphy.com/media/VEmm8ngZxwJ9K/giphy.gif",
				"https://media.giphy.com/media/jLeyZWgtwgr2U/giphy.gif",
				"http://i0.kym-cdn.com/photos/images/newsfeed/001/093/848/033.25067",
				"https://media.giphy.com/media/VEmm8ngZxwJ9K/giphy.gif",
				"https://media.giphy.com/media/81kHQ5v9zbqzC/giphy.gif",
				"https://media.giphy.com/media/iUgoB9zOO0QkU/giphy.gif",
				"https://media.giphy.com/media/8UHRbvmsFVyS2VXJKU/giphy.gif"
				
			];

			message.mentions.members.forEach((member, memberId) => {
				message.channel.send(new Discord.RichEmbed({
					description: `**${message.member.displayName}** slaps **${member.displayName}**!`,
					image: {
						url: images[Math.floor(Math.random() * images.length)]
					}
				}));
			});

			break;
		}

		case "cuddle" : {
			if (message.mentions.members.size == 0) {
				message.channel.send("You have to mention the user you want to cuddle!");
				break;		
			}

			var images = [
				"http://gifimage.net/anime-cuddle-gif-6/",
				"https://cdn.discordapp.com/attachments/396609929504489473/433277869716668456/cuddle-SyZk8U7vb.gif",
				"https://cdn.discordapp.com/attachments/396609929504489473/433284570935328778/cuddle-HkUlIUXDZ.gif",
				"https://cdn.discordapp.com/attachments/396609929504489473/433284931763044372/cuddle-r1VzDkmjW.gif"
				
			];

			message.mentions.members.forEach((member, memberId) => {
				message.channel.send(new Discord.RichEmbed({
					description: `**${message.member.displayName}** cuddles **${member.displayName}**!`,
					image: {
						url: images[Math.floor(Math.random() * images.length)]
					}
				}));
			});

			break;
		}

		case "bloodsuck" : {
			if (message.mentions.members.size == 0) {
				message.channel.send("You have to mention the user you want to bloodsuck! OwO");
				break;		
			}

			var images = [
				"https://cdn.discordapp.com/attachments/396609929504489473/432581128348762112/1483510363-62e86e5cd09c017279bba28e05c67493.png",
				"https://cdn.discordapp.com/attachments/396609929504489473/432581364718632970/bloodsuck-.gif",
				"https://cdn.discordapp.com/attachments/396609929504489473/433266764533596161/bloodsuck-.gif"
				
			];

			message.mentions.members.forEach((member, memberId) => {
				message.channel.send(new Discord.RichEmbed({
					description: `**${message.member.displayName}** bloodsucks **${member.displayName}**!`,
					image: {
						url: images[Math.floor(Math.random() * images.length)]
					}
				}));
			});

			break;
		}
		
		case "pat" : {
			if (message.mentions.members.size == 0) {
				message.channel.send("You have to mention the user you want to pat!");
				break;		
			}

			var images = [
				"https://media.giphy.com/media/ye7OTQgwmVuVy/giphy.gif",
				"https://media.giphy.com/media/109ltuoSQT212w/giphy.gif",
				"https://media.giphy.com/media/osYdfUptPqV0s/giphy.gif",
				"http://gifimage.net/wp-content/uploads/2017/09/anime-head-pat-gif-2.gif",
				"https://cdn.discordapp.com/attachments/396609929504489473/433288526226915349/anime-head-pat-gif-4.gif",
				"https://cdn.discordapp.com/attachments/396609929504489473/433288885494087690/tumblr_nwnb5jRdsh1u7nlyno1_500.gif"
				
			];

			message.mentions.members.forEach((member, memberId) => {
				message.channel.send(new Discord.RichEmbed({
					description: `**${message.member.displayName}** pats **${member.displayName}**!`,
					image: {
						url: images[Math.floor(Math.random() * images.length)]
					}
				}));
			});

			break;
		}
		
		case "say" : {
			/*
			if (!memberPermissions.has("ADMINISTRATOR")) {
				message.channel.send("Only administrators can talk as the bot!");
				break;
			}
			*/

			if (explode.length <= 0) {
				message.channel.send("You have to write what you want the bot to say!");
				break;		
			}

			message.channel.send(explode.join(" "));
			break;
		}

		case "natsu" : {
			if (message.mentions.members.size == 0) {
				message.channel.send("Ping person to tell them to subscribe!");
				break;		
			}

			var images = [
				"https://im5.ezgif.com/tmp/ezgif-5-ef664d1f2f.gif",
				"https://im5.ezgif.com/tmp/ezgif-5-ef664d1f2f.gif",
				"https://im5.ezgif.com/tmp/ezgif-5-ef664d1f2f.gif"
				
			];

			message.mentions.members.forEach((member, memberId) => {
				message.channel.send(new Discord.RichEmbed({
					description: `**${message.member.displayName}** Subscribe **${member.displayName}**...`,
					image: {
						url: images[Math.floor(Math.random() * images.length)]
					}
				}));
			});
		}

		case "help" : {
			message.channel.send("Hello thank you soo much for adding me here. I'm really glad to serve for your server :smile: . So here are a list of commands which can be used through me  (Most are for entertainment :p) Hope you enjoy using me x3 . Have fun!! OwO I forgot to mention, the Prefix for using me is (%) {Only the percentage symbol} Use this before every command for example: %say");
            message.channel.send("```Available commands are :                                                                kick (Admistrator command :Ability to kick anyone with just 1 command) ban (Admistrator command : Ablity to ban anyone with just 1 command)  hug , spank , kiss , slap , say , natsu , yt , owner , bloodsuck , cuddle , pat```")
			message.channel.send("Owner: Natsu#8850 Developers: xFallen 'angel#6845 And Natsu#8850   Youtube -https://www.youtube.com/channel/UCJQ9gb108zaQ3Ywp3ELs0FA")
			break;
		}
		
		case "yt" : {
			message.channel.send("https://www.youtube.com/channel/UCJQ9gb108zaQ3Ywp3ELs0FA");
		}
				
		case "owner" : {
			message.channel.send("Owner: Natsu#8850 Developers: xFallen 'angel#6845 And Natsu#8850");
		}
	}
});

bot.on('message', (message) => { 
       if(message.content == '%hi') {
		   message.channel.sendMessage('Hello there sup?');
		   }
});

bot.on('message', (message) => { 
       if(message.content == '%sup') {
		   message.channel.sendMessage('Nothing much just speaking with you and with others in different servers :wink:');
		   }
});

bot.on('ready', {} => {
	console.log('Bot Launched')
	bot.user.setGame("Use %help for help")
});

bot.login('NDMyNDQ0MjUzNjk2OTUwMjc5.Dau6nw.o1DTk5qjRPN_Og031lc8yhNUmFo');
client.login(process.env.BOT_TOKEN);

const Discord = require('discord.js');

const client = new Discord.Client();
client.once('ready', () => {
    console.log('mee6 is a prank');
});

const prefix = '';








client.on('message', message =>{
    if (!message.content.startsWith(prefix) || message.author.bot) return;


     const args = message.content.slice(prefix.length).split(/ +/);
     const command = args.shift().toLowerCase();

    if (command === 'מניאק'){
        message.channel.send('שתעק, לא לקלל');
    } else if (command == 'מניאוק'){
        message.channel.send('שתעק, לא לקלל');
    } else if (command == 'היי'){
        message.channel.send('היי, אחוק');
    } else if (command == 'שלום'){
        message.channel.send('שלום, אחוק');
    } else if (command == 'אליה'){
        message.channel.send('אליה עסוק, עזובתו בשקט');
    } else if (command == 'פורטנייט'){
        message.channel.send('פורטנייט זה משחק מפגר, רוקט ליג זה יותר טוב');
    }


 });

 
 client.login(process.env.token);

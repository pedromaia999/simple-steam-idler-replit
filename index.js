const steamUser = require('steam-user');
const steamTotp = require('steam-totp');
const keep_alive = require('./keep_alive.js')

var username = 'mtozi@walla.co.il';
var password = '';
var shared_secret = process.env.password;

var games = [414700,10,730,30,40,70,130,50,60,20,847370,346900,1222670,714010,386360,304930,552990,444090,933110,1049590,1128810,459820,1625450,1714040,1623660,397900,1961460,1335200,1353300,440,1172470,570];  // Enter here AppIDs of the needed games
var status = 1;  // 1 - online, 7 - invisible


user = new steamUser();
user.logOn({"accountName": username, "password": password, "twoFactorCode": steamTotp.generateAuthCode(shared_secret)});
user.on('loggedOn', () => {
	if (user.steamID != null) console.log(user.steamID + ' - Successfully logged on');
	user.setPersona(status);               
	user.gamesPlayed(games);
});

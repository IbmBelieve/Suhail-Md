const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_19_47_07_14_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNDYsXG4gICAgICAgIDg4LFxuICAgICAgICA2NCxcbiAgICAgICAgNDIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDQ2LFxuICAgICAgICAxODQsXG4gICAgICAgIDU1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDM1LFxuICAgICAgICA3NixcbiAgICAgICAgNTYsXG4gICAgICAgIDc4LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjMsXG4gICAgICAgIDk1LFxuICAgICAgICA4NixcbiAgICAgICAgMTMxLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgOTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNixcbiAgICAgICAgNjAsXG4gICAgICAgIDg3LFxuICAgICAgICAzNCxcbiAgICAgICAgMTcsXG4gICAgICAgIDU1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNjEsXG4gICAgICAgIDgsXG4gICAgICAgIDU2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDYwLFxuICAgICAgICA3NyxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNTksXG4gICAgICAgIDU0LFxuICAgICAgICAyMixcbiAgICAgICAgMTI1LFxuICAgICAgICA2OCxcbiAgICAgICAgMjI4LFxuICAgICAgICA4MCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTI1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDkwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNixcbiAgICAgICAgNTUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTQ0LFxuICAgICAgICA4NSxcbiAgICAgICAgMTE4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTQwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTg2LFxuICAgICAgICAyMCxcbiAgICAgICAgMTY3LFxuICAgICAgICA1NyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMjksXG4gICAgICAgIDM4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTAzLFxuICAgICAgICAzMyxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDMsXG4gICAgICAgIDI4LFxuICAgICAgICA4MSxcbiAgICAgICAgMTI0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzNCxcbiAgICAgICAgNSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDg1LFxuICAgICAgICA2MSxcbiAgICAgICAgOTgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNTUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTEyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDI1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNzksXG4gICAgICAgIDExNixcbiAgICAgICAgMjE4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNjEsXG4gICAgICAgIDExNSxcbiAgICAgICAgNDUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjA1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDYxLFxuICAgICAgICAxNCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxODMsXG4gICAgICAgIDEyLFxuICAgICAgICAyOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICA3NCxcbiAgICAgICAgMjU0LFxuICAgICAgICAyOCxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTI5LFxuICAgICAgICA0OCxcbiAgICAgICAgMTgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDksXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTU1LFxuICAgICAgICAyOSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDk2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDY4LFxuICAgICAgICA3MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3LFxuICAgICAgICA3NyxcbiAgICAgICAgMTAwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNjYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgODcsXG4gICAgICAgIDE3LFxuICAgICAgICA5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjI2LFxuICAgICAgICAxNSxcbiAgICAgICAgOTIsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjM4LFxuICAgICAgICA2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTg1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMzYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTAwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgOCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAzNixcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTIwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDI5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDExNixcbiAgICAgICAgMjMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNjIsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjI3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgOTksXG4gICAgICAgIDEwMixcbiAgICAgICAgMixcbiAgICAgICAgMTkyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjA4LFxuICAgICAgICAyNDksXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTg3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE0LFxuICAgICAgICA3MyxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNDUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTcyLFxuICAgICAgICA5MyxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMzUsXG4gICAgICAgIDExOCxcbiAgICAgICAgNjksXG4gICAgICAgIDE4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDY0LFxuICAgICAgICAxODQsXG4gICAgICAgIDYsXG4gICAgICAgIDI4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDMyLFxuICAgICAgICAzMixcbiAgICAgICAgMTkzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDczLFxuICAgICAgICAxMjQsXG4gICAgICAgIDc3LFxuICAgICAgICAwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxODQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiYlFCUFN4S3Z4KzEvK054elFpYzllNTg0dFVEVkxKV0dmVnp5QWRkM2IzUT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMyLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMyLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiTTBLdEZBR1JScTIyZlBjblZYa0swZ1wiLFxuICBcInBob25lSWRcIjogXCJmZjg5YTQ4Yi0yYjZmLTQ2YzgtOGQxMi1kZmI3ZDQ1N2QxMmJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjEzLFxuICAgICAgMTg4LFxuICAgICAgMTY2LFxuICAgICAgOTAsXG4gICAgICAyMDIsXG4gICAgICAxMCxcbiAgICAgIDEyMSxcbiAgICAgIDE1LFxuICAgICAgMjE2LFxuICAgICAgMjQ0LFxuICAgICAgODgsXG4gICAgICA0MixcbiAgICAgIDI5LFxuICAgICAgMjMyLFxuICAgICAgMjQwLFxuICAgICAgMjMsXG4gICAgICA2NyxcbiAgICAgIDExMixcbiAgICAgIDIyNCxcbiAgICAgIDU1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEzLFxuICAgICAgMTQ3LFxuICAgICAgMTE0LFxuICAgICAgMTc5LFxuICAgICAgMTE1LFxuICAgICAgMTA5LFxuICAgICAgMTg0LFxuICAgICAgMTQ4LFxuICAgICAgMTQ1LFxuICAgICAgNDQsXG4gICAgICAxNjMsXG4gICAgICAyNTAsXG4gICAgICAxNSxcbiAgICAgIDE1MyxcbiAgICAgIDE2OSxcbiAgICAgIDk4LFxuICAgICAgNTgsXG4gICAgICA2MixcbiAgICAgIDIwNixcbiAgICAgIDE0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlhCNENQTEY5XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MDY1MzQ5MDYwOjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJJLiBCLiBNIFRWXCIsXG4gICAgXCJsaWRcIjogXCIyMzc3MzEyMjE0MDE3Nzk6M0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLcUk5dXdGRUxiVzBMUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImNvMUhyVE1UVnp1S1ZDeWwvMVZrUmJVUjN1SklZaUNzSHNEQ3pNSjYwQWc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiWnpMbGs1dmtlc3FOUUJVbXJNZ2NoMXpTUkswSUY2UTE4eXFWNHQ0V0JBL3BzWS9hMlFGdm11ZWdtMEI2VEg1cERkdmZvMHptZ0x3YlhPRHQvUzR2Q3c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiU1JqL0tVZkZLS1Z2Ym1CaElMS2VRN2J5MUdxZHdvcnFnZ1JWN3lxZFJhOUNLdzRoT0k4MVA5Yi9oVXgrR2xvWUVuenUzVVJWVW1vK3JqRHVkenpvRHc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODA2NTM0OTA2MDozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgODcsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjA5ODY0MjZcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",

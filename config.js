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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_07_07_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNDUsXG4gICAgICAgIDIwNixcbiAgICAgICAgOTYsXG4gICAgICAgIDYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNTksXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTU0LFxuICAgICAgICA3MSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTA5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjEsXG4gICAgICAgIDIzMixcbiAgICAgICAgNjIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU0LFxuICAgICAgICA1MixcbiAgICAgICAgMTc5LFxuICAgICAgICA1NyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDg4LFxuICAgICAgICAxODcsXG4gICAgICAgIDgxLFxuICAgICAgICA0MCxcbiAgICAgICAgNzEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMSxcbiAgICAgICAgMTk4LFxuICAgICAgICA1OSxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTE5LFxuICAgICAgICA3MCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNTcsXG4gICAgICAgIDMwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNTksXG4gICAgICAgIDk1LFxuICAgICAgICA0NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTg0LFxuICAgICAgICA2MyxcbiAgICAgICAgODQsXG4gICAgICAgIDg5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE2LFxuICAgICAgICAxODQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMzQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxODAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNTIsXG4gICAgICAgIDU4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDMwLFxuICAgICAgICA2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDEyMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMyxcbiAgICAgICAgMzEsXG4gICAgICAgIDcsXG4gICAgICAgIDU2LFxuICAgICAgICA4OCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDkxLFxuICAgICAgICA0NyxcbiAgICAgICAgMTk0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDMwLFxuICAgICAgICA5MCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgOTMsXG4gICAgICAgIDkzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDQ0LFxuICAgICAgICA5MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMyxcbiAgICAgICAgMjQsXG4gICAgICAgIDEzNixcbiAgICAgICAgNDcsXG4gICAgICAgIDc3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDg1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyNixcbiAgICAgICAgMzEsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTU3LFxuICAgICAgICAxODYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjM2LFxuICAgICAgICA5MSxcbiAgICAgICAgMTQwLFxuICAgICAgICA1MCxcbiAgICAgICAgNDcsXG4gICAgICAgIDk3LFxuICAgICAgICAxODAsXG4gICAgICAgIDM1LFxuICAgICAgICAyMjksXG4gICAgICAgIDE2NixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTE2LFxuICAgICAgICAzMixcbiAgICAgICAgMzEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTM2LFxuICAgICAgICA4OSxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDUwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDY1LFxuICAgICAgICAxMDksXG4gICAgICAgIDUyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNjAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjQsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTYsXG4gICAgICAgIDEyLFxuICAgICAgICA2MyxcbiAgICAgICAgMyxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMTksXG4gICAgICAgIDMwLFxuICAgICAgICA3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE1LFxuICAgICAgICA0NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxMTJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDk1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMzksXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTU2LFxuICAgICAgICA0MCxcbiAgICAgICAgMTksXG4gICAgICAgIDg4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjE3LFxuICAgICAgICA3NixcbiAgICAgICAgNixcbiAgICAgICAgNjYsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDk5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNTUsXG4gICAgICAgIDYsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDExMSxcbiAgICAgICAgMzksXG4gICAgICAgIDQ4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDUsXG4gICAgICAgIDE4LFxuICAgICAgICAxOTksXG4gICAgICAgIDY2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNzIsXG4gICAgICAgIDksXG4gICAgICAgIDE3MixcbiAgICAgICAgMTAxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDM5LFxuICAgICAgICA0NSxcbiAgICAgICAgMjUzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDY5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE5NixcbiAgICAgICAgNTQsXG4gICAgICAgIDMyLFxuICAgICAgICAzMCxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDEzNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNjIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwia2llcWZpOVBjQlNocnlaQURrYzBsNU02OE5jc3V4MmFKVk5RWnRucWNFaz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ4MDY1MzQ5MDYwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJDQTFENTFFRTFFMzdGQUNCQ0JFOTIyODk5MDRERDhEMVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjEyOTcyNjRcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiMEFiNUN2YXJRUUMwRkR5SlZwTVBhZ1wiLFxuICBcInBob25lSWRcIjogXCJiMWY4ZjU2NC0yNWQ2LTRiMTItYWQ5NC0xODNlOTQ4YWU3MmFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQ4LFxuICAgICAgMzUsXG4gICAgICAyMjQsXG4gICAgICAxNDksXG4gICAgICAxNzQsXG4gICAgICAyMjgsXG4gICAgICAyNDAsXG4gICAgICAyMDQsXG4gICAgICA1NixcbiAgICAgIDE2OSxcbiAgICAgIDE2NCxcbiAgICAgIDE0NyxcbiAgICAgIDcwLFxuICAgICAgNzcsXG4gICAgICAyNDcsXG4gICAgICA3MixcbiAgICAgIDIyOSxcbiAgICAgIDE0MixcbiAgICAgIDIwNSxcbiAgICAgIDExM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzcsXG4gICAgICAxMzgsXG4gICAgICAxOTksXG4gICAgICAyMzUsXG4gICAgICAyMDIsXG4gICAgICAyMTEsXG4gICAgICA0NixcbiAgICAgIDEsXG4gICAgICAyLFxuICAgICAgMTk2LFxuICAgICAgMTU2LFxuICAgICAgMjM3LFxuICAgICAgMTQwLFxuICAgICAgMjMzLFxuICAgICAgOSxcbiAgICAgIDE3MCxcbiAgICAgIDE5MixcbiAgICAgIDIzMixcbiAgICAgIDExMSxcbiAgICAgIDIzNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI2TUQ4TlJNRFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODA2NTM0OTA2MDo4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiSS4gQi4gTSBUVlwiLFxuICAgIFwibGlkXCI6IFwiMjM3NzMxMjIxNDAxNzc5OjhAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS3lJOXV3RkVPZlM0N1FHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJjbzFIclRNVFZ6dUtWQ3lsLzFWa1JiVVIzdUpJWWlDc0hzREN6TUo2MEFnPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkx6Vy9aNlNiYW84d2dqNUZFNWFGNy8rVkY3ZjRaQloxdlZFM0ZPRENVYmpkdXFCQmFXb2QrTGpIeXJjMHNybkordmdTalg3LzY3dElXOC9sRG9ZTkRnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImN5em11WDUvbVljNU9yaElXelQ4M0FzZUJaaHh6bHJLWm1UNU93ZTRWdDNvM1BEQnBHamkwYnBQTFJ0dFRrb214clRUK3ptbzU1QVJ5RzFiUURxSmdnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgwNjUzNDkwNjA6OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA3MixcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxMjk3MjU4LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTVdkXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFNV2QuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ1YWZpc28vZWFDOGl5MzJQNEpXdzdPejZWQ1lxYmFyNmdZd01YVHFrL2ZnPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE1NzA2MDQwNzQsXCJjdXJyZW50SW5kZXhcIjo0LFwiZGV2aWNlSW5kZXhlc1wiOlswLDMsNF19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


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

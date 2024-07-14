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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_01_07_14_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDUsXG4gICAgICAgIDMxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDI0MCxcbiAgICAgICAgOTMsXG4gICAgICAgIDg1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDc1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDg1LFxuICAgICAgICAyMCxcbiAgICAgICAgMTA4LFxuICAgICAgICA4MSxcbiAgICAgICAgMTc2LFxuICAgICAgICAzMyxcbiAgICAgICAgMTExLFxuICAgICAgICAxMDgsXG4gICAgICAgIDMxLFxuICAgICAgICAxMzAsXG4gICAgICAgIDQwLFxuICAgICAgICAxMixcbiAgICAgICAgMTA5LFxuICAgICAgICAxMzksXG4gICAgICAgIDM5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE3LFxuICAgICAgICA3OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDQzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE3NixcbiAgICAgICAgODcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDU0LFxuICAgICAgICA4NSxcbiAgICAgICAgNzksXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTcsXG4gICAgICAgIDM3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDg1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNCxcbiAgICAgICAgMjA3LFxuICAgICAgICAzNyxcbiAgICAgICAgNTUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTMzLFxuICAgICAgICAwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDY1LFxuICAgICAgICAxM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDQyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMzQsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTk5LFxuICAgICAgICAxMyxcbiAgICAgICAgMjUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNjcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTM3LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIxLFxuICAgICAgICA2NixcbiAgICAgICAgMTg0LFxuICAgICAgICA2MyxcbiAgICAgICAgMTI0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDg1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNTcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNjEsXG4gICAgICAgIDg4LFxuICAgICAgICA4MyxcbiAgICAgICAgNjhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMzLFxuICAgICAgICA0NyxcbiAgICAgICAgMSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNSxcbiAgICAgICAgMjE2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDU1LFxuICAgICAgICA2MSxcbiAgICAgICAgMTEyLFxuICAgICAgICA0NixcbiAgICAgICAgOTgsXG4gICAgICAgIDEzNixcbiAgICAgICAgNDMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjQ2LFxuICAgICAgICA4MyxcbiAgICAgICAgMTczLFxuICAgICAgICA4NCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMTIsXG4gICAgICAgIDcsXG4gICAgICAgIDc3LFxuICAgICAgICA1NCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjIzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjUwLFxuICAgICAgICA0MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDg4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNDUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNDQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDI1MixcbiAgICAgICAgNzMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNjksXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTE4LFxuICAgICAgICA0MyxcbiAgICAgICAgNjMsXG4gICAgICAgIDEsXG4gICAgICAgIDk5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDI1MixcbiAgICAgICAgODEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjU0LFxuICAgICAgICA2OCxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDkwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDI0LFxuICAgICAgICAxODgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTk3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE0LFxuICAgICAgICA5MyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNzksXG4gICAgICAgIDY2LFxuICAgICAgICA1NyxcbiAgICAgICAgMTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxMTBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDc0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICA1NyxcbiAgICAgICAgMTY3LFxuICAgICAgICA1OCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDk2LFxuICAgICAgICA5MyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNTksXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTE2LFxuICAgICAgICAzMixcbiAgICAgICAgOTUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDkwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDY3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTczLFxuICAgICAgICA0NCxcbiAgICAgICAgMTk1LFxuICAgICAgICA4OSxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMDksXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNTEsXG4gICAgICAgIDIxLFxuICAgICAgICAyMDYsXG4gICAgICAgIDY2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNjIsXG4gICAgICAgIDMyLFxuICAgICAgICA0MyxcbiAgICAgICAgMTMsXG4gICAgICAgIDQwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDYsXG4gICAgICAgIDEsXG4gICAgICAgIDcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNSxcbiAgICAgICAgNzcsXG4gICAgICAgIDUsXG4gICAgICAgIDUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMzYsXG4gICAgICAgIDg4LFxuICAgICAgICAxMzksXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTMwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNjAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiNGZPeEppZHZVTnZTemRJQUJKUUMxbmN1UGJYM2tpWlZtK0ZDb091cHZWbz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ5MDUxNjA5MDAzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIwNkQ0NDIyMjU5QkVEQUMyNDgyQUQ2Qzg4RUM2RTU5RlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjA5ODcyNzhcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ5MDUxNjA5MDAzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI2QUU3ODBEMjZCOTg2MDY4RjBFRjBCMTM5MTc0RTg4QVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjA5ODcyODFcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiMXdDOHlScERSd1dUT1B0cE9Wb3NoZ1wiLFxuICBcInBob25lSWRcIjogXCJkOGZhMDMyYS1mNzY3LTQ5ZjctOThhYy01YTA5NDViNDY5YTRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgODAsXG4gICAgICA4OCxcbiAgICAgIDExMyxcbiAgICAgIDE4MixcbiAgICAgIDc2LFxuICAgICAgNTQsXG4gICAgICAzNixcbiAgICAgIDE4OSxcbiAgICAgIDEwMixcbiAgICAgIDE1NixcbiAgICAgIDMwLFxuICAgICAgMTA4LFxuICAgICAgMTMsXG4gICAgICAzOSxcbiAgICAgIDE1NixcbiAgICAgIDEyOSxcbiAgICAgIDIyNSxcbiAgICAgIDEwMCxcbiAgICAgIDIwOSxcbiAgICAgIDgwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDksXG4gICAgICAxMjUsXG4gICAgICA4OSxcbiAgICAgIDY5LFxuICAgICAgMTQ1LFxuICAgICAgOTAsXG4gICAgICAyMjgsXG4gICAgICAxMTEsXG4gICAgICA1OSxcbiAgICAgIDYsXG4gICAgICAxODEsXG4gICAgICAxODQsXG4gICAgICAyOSxcbiAgICAgIDEyOCxcbiAgICAgIDI2LFxuICAgICAgMTk1LFxuICAgICAgMTYyLFxuICAgICAgMTYyLFxuICAgICAgMjI4LFxuICAgICAgMTQ5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjJIS05RUkZKXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDUxNjA5MDAzOjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjEzMTMxMDYwNTU5NDg0MToyQGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIvCfpKtcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMTHJqYkFGRUlqZDBMUUdHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImtaMkRJNXhabkgvMUdVZ3dISFAxU2U4ZVZjQ2tOODBDcTZsOFRRUEt4V2s9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiNUp4V2ZHWG41UlduWDhuRnpxNXV3OGFndnUvY1VjK2N0NU0ya3hlSFdLMjZkamdycklqK0FnUkNkUldCcElad1l2UWhXdWJkcVpSclVWcUt5VnhiQ3c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiL0w5bU5JMGNxQnlFWVpXTGJhcmNjZHpGOE1IZ2ZXZ2crQ3JlL2F6L1B4b1VZR2plVDlWWEF1RW9DVUtRb0hCWTFhNjJFdHhGd01zTlRRSGpHVlUxaHc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTA1MTYwOTAwMzoyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDEwNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwOTg3Mjc1LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTXRNXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFNdE0uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJTRXQyVGdsSnU5eTR5eGRSNnhNcE8ydEZrSTZLU1E4d1JIOUhqa1hBNGNjPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE0NDMwNjczMTQsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMDQ0OTcxODkwNFwifSIKfQ=="  // PUT your SESSION_ID 


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

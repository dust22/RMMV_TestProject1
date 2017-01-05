// Generated by RPG Maker.
// Do not edit this file directly.
var $plugins =
[
{"name":"YEP_CoreEngine","status":true,"description":"v1.23 Needed for the majority of Yanfly Engine Scripts. Also\r\ncontains bug fixes found inherently in RPG Maker.","parameters":{"---Screen---":"","Screen Width":"1280","Screen Height":"720","Scale Battlebacks":"true","Scale Title":"true","Scale Game Over":"true","Open Console":"false","Reposition Battlers":"true","GameFont Load Timer":"0","Update Real Scale":"false","Collection Clear":"true","---Gold---":"","Gold Max":"99999999","Gold Font Size":"20","Gold Icon":"313","Gold Overlap":"A lotta","---Items---":"","Default Max":"99","Quantity Text Size":"20","---Stats---":"","Max Level":"99","Actor MaxHP":"9999","Actor MaxMP":"9999","Actor Parameter":"999","Enemy MaxHP":"999999","Enemy MaxMP":"9999","Enemy Parameter":"999","---Battle---":"","Animation Rate":"4","Flash Target":"false","Show Events Transition":"true","Show Events Snapshot":"true","---Font---":"","Chinese Font":"SimHei, Heiti TC, sans-serif","Korean Font":"Dotum, AppleGothic, sans-serif","Default Font":"GameFont, Verdana, Arial, Courier New","Font Size":"28","Text Align":"left","---Windows---":"","Digit Grouping":"true","Line Height":"36","Icon Width":"32","Icon Height":"32","Face Width":"144","Face Height":"144","Window Padding":"18","Text Padding":"6","Window Opacity":"192","Gauge Outline":"true","Gauge Height":"18","Menu TP Bar":"true","---Window Colors---":"","Color: Normal":"0","Color: System":"16","Color: Crisis":"17","Color: Death":"18","Color: Gauge Back":"19","Color: HP Gauge 1":"20","Color: HP Gauge 2":"21","Color: MP Gauge 1":"22","Color: MP Gauge 2":"23","Color: MP Cost":"23","Color: Power Up":"24","Color: Power Down":"25","Color: TP Gauge 1":"28","Color: TP Gauge 2":"29","Color: TP Cost Color":"29"}},
{"name":"YEP_BaseParamControl","status":true,"description":"v1.02 Gain control over the method of calculation for base\nparameters: MaxHP, MaxMP, ATK, DEF, MAT, MDF, AGI, LUK.","parameters":{"---MaxHP---":"","MHP Formula":"(base + plus) * paramRate * buffRate + flat","MHP Maximum":"customMax || (user.isActor() ? 9999 : 999999)","MHP Minimum":"customMin || 1","---MaxMP---":"","MMP Formula":"(base + plus) * paramRate * buffRate + flat","MMP Maximum":"customMax || (user.isActor() ? 9999 : 9999)","MMP Minimum":"customMin || 0","---Attack---":"","ATK Formula":"(base + plus) * paramRate * buffRate + flat","ATK Maximum":"customMax || (user.isActor() ? 999 : 999)","ATK Minimum":"customMin || 1","---Defense---":"","DEF Formula":"(base + plus) * paramRate * buffRate + flat","DEF Maximum":"customMax || (user.isActor() ? 999 : 999)","DEF Minimum":"customMin || 1","---M.Attack---":"","MAT Formula":"(base + plus) * paramRate * buffRate + flat","MAT Maximum":"customMax || (user.isActor() ? 999 : 999)","MAT Minimum":"customMin || 1","---M.Defense---":"","MDF Formula":"(base + plus) * paramRate * buffRate + flat","MDF Maximum":"customMax || (user.isActor() ? 999 : 999)","MDF Minimum":"customMin || 1","---Agility---":"","AGI Formula":"(base + plus) * paramRate * buffRate + flat","AGI Maximum":"customMax || (user.isActor() ? 999 : 999)","AGI Minimum":"customMin || 1","---Luck---":"","LUK Formula":"(base + plus) * paramRate * buffRate + flat","LUK Maximum":"customMax || (user.isActor() ? 999 : 999)","LUK Minimum":"customMin || 1","LUK Effect":"Math.max(1.0 + (user.luk - target.luk) * 0.001, 0.0)"}},
{"name":"MadeWithMv","status":false,"description":"Show a Splash Screen \"Made with MV\" and/or a Custom Splash Screen before going to main screen.","parameters":{"Show Made With MV":"true","Made with MV Image":"MadeWithMv","Show Custom Splash":"false","Custom Image":"http://www.morrell-middleton.co.uk/wp-content/uploads/logo-placeholder.jpg","Fade Out Time":"120","Fade In Time":"120","Wait Time":"160"}},
{"name":"YEP_MessageCore","status":true,"description":"v1.17 Adds more features to the Message Window to customized\nthe way your messages appear and functions.","parameters":{"---General---":"","Default Rows":"4","Default Width":"Graphics.boxWidth","Face Indent":"Window_Base._faceWidth + 24","Fast Forward Key":"pagedown","Enable Fast Forward":"true","Word Wrapping":"false","Description Wrap":"false","Word Wrap Space":"false","Tight Wrap":"false","---Font---":"","Font Name":"GameFont","Font Size":"28","Font Size Change":"12","Font Changed Max":"96","Font Changed Min":"12","Font Outline":"4","Maintain Font":"false","---Name Box---":"","Name Box Buffer X":"-28","Name Box Buffer Y":"0","Name Box Padding":"this.standardPadding() * 4","Name Box Color":"0","Name Box Clear":"false","Name Box Added Text":"\\c[6]","Name Box Auto Close":"false"}}
];

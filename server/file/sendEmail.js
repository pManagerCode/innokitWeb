const nodemailer = require("nodemailer"); //引入模块
let transporter = nodemailer.createTransport({
  host: "smtp.office365.com",
  port: 587,
  //secure: true, // true for 465, false for other ports
  secureConnection: true, // use SSL
  auth: {
    user: "edward.liang@innokit.com.au", // 发送方的邮箱
    pass: "zkfkmskpdgcrqqbh", // smtp 的授权码
  },
});

/*
let transporter = nodemailer.createTransport({
	//node_modules/nodemailer/lib/well-known/services.json  查看相关的配置，如果使用qq邮箱，就查看qq邮箱的相关配置
	service: 'qq', //类型
	port: 465,
	secure: true, // true for 465, false for other ports
	auth: {
		user: '550285995@qq.com', // 发送方的邮箱
		pass: 'akoervokshzcbdad' // smtp 的授权码
	}
});

pass 不是邮箱账户的密码而是stmp的授权码（必须是相应邮箱的stmp授权码）

QQ邮箱:设置--账户--POP3/SMTP服务---开启---获取stmp授权码 
Office365:In my office365 account, I went to the settings, Security & Privacy, Additional security verification, clicked on Create and manage app passwords. Then it will let you generate an app password that you will then use as your nodemailer auth config password. This will also bypass the 2-factor authentication if you have one like mine.
Note that you must copy the generated password immediately. It will only let you copy the password once. Upon closing the window, you can't view it again.
*/

function sendMail(
  mail,
  cc,
  bcc,
  subject,
  msg,
  attachments,
  successCallback,
  errorCallback
) {
  try {
    // 发送的配置项
    let mailOptions = {
      from: "edward.liang@innokit.com.au", // 发送方
      to: mail, //接收者邮箱，多个邮箱用逗号间隔,
      cc: cc,
      bcc: bcc,
      subject: subject,
      text: "", // 文本内容
      html: msg, //页面内容
      attachments: attachments,
    };

    //发送函数
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        errorCallback(error);
      } else {
        successCallback("Email sent successfully. We'll contact you shortly.");
      }
    });
  } catch (err) {
    errorCallback(err.message);
  }
}

module.exports = {
  sendMail,
};

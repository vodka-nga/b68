﻿
let telegram = require('../../Models/Telegram');

module.exports = function(bot, id) {
	telegram.findOne({'form':id}, 'phone', function(err, data){
		if (data) {
			let opts = {
				parse_mode: 'markdown',
			    reply_markup: {
				    remove_keyboard: true,
			    }
			};
			bot = null;
			id = null;
		}else{
			let opts = {
				parse_mode: 'markdown',
			    reply_markup: {
			      	keyboard: [
				        [{text: 'CHIA SẺ SỐ ĐIỆN THOẠI', request_contact: true}],
				    ],
				    resize_keyboard: true,
			    }
			};
			bot.sendMessage(id, '*RV88.FUN*  Vui lòng ấn CHIA SẺ SỐ ĐIỆN THOẠI để _XÁC THỰC_ và lấy mã OTP miễn phí.', opts);
			bot = null;
			id = null;
		}
	});
}

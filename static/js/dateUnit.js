var dateUnit={
	dateAdd:function(strInterval, NumDay, dtTmp){
		if (dtTmp == null | dtTmp == "")
			dtTmp = new Date();
		switch (strInterval) {
		case "m":
			return new Date(Date.parse(dtTmp) + (60000 * NumDay));
		case "h":
			return new Date(Date.parse(dtTmp) + (3600000 * NumDay));
		case "d":
			return new Date(Date.parse(dtTmp) + (86400000 * (NumDay + 1)));
		case "w":
			return new Date(Date.parse(dtTmp) + ((86400000 * 7) * NumDay)
					+ 86400000);
		case "M":
			return new Date(dtTmp.getFullYear(), (dtTmp.getMonth()) + NumDay, dtTmp
					.getDate(), dtTmp.getHours(), dtTmp.getMinutes(), dtTmp
					.getSeconds());
		case "y":
			return new Date((dtTmp.getFullYear() + NumDay), dtTmp.getMonth(), dtTmp
					.getDate(), dtTmp.getHours(), dtTmp.getMinutes(), dtTmp
					.getSeconds());
		}
	},
	dateFormat:function(date, fmt){
			var o = {
					"M+" : date.getMonth() + 1, // 月份
					"d+" : date.getDate(), // 日
					"h+" : date.getHours() % 12 == 0 ? 12 : date.getHours() % 12, // 小时
					"H+" : date.getHours(), // 小时
					"m+" : date.getMinutes(), // 分
					"s+" : date.getSeconds(), // 秒
					"q+" : Math.floor((date.getMonth() + 3) / 3), // 季度
					"S" : date.getMilliseconds()
				// 毫秒
				};
				var week = {
					"0" : "\u65e5",
					"1" : "\u4e00",
					"2" : "\u4e8c",
					"3" : "\u4e09",
					"4" : "\u56db",
					"5" : "\u4e94",
					"6" : "\u516d"
				};
//				var week = {
//					"0" : "Sun.",
//					"1" : "Mon.",
//					"2" : "Tues.",
//					"3" : "Wed.",
//					"4" : "Thur.",
//					"5" : "Fri.",
//					"6" : "Sat."
//				};
				if (/(y+)/.test(fmt)) {
					fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "")
							.substr(4 - RegExp.$1.length));
				}
				if (/(E+)/.test(fmt)) {
					fmt = fmt
							.replace(
									RegExp.$1,
									((RegExp.$1.length > 1) ? (RegExp.$1.length > 2 ? "\u661f\u671f"
											: "\u5468")
											: "")
											+ week[date.getDay() + ""]);
				}
//				if (/(E+)/.test(fmt)) {
//					fmt = fmt
//							.replace(
//									RegExp.$1,
//									((RegExp.$1.length > 1) ? (RegExp.$1.length > 2 ? ""
//											: "")
//											: "")
//											+ week[date.getDay() + ""]);
//				}
				for ( var k in o) {
					if (new RegExp("(" + k + ")").test(fmt)) {
						fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k])
								: (("00" + o[k]).substr(("" + o[k]).length)));
					}
				}
				return fmt;
	},
	strToDate:function(strDate) { 
		  var st = strDate; 
		  var date;
		  if(st.indexOf(' ')!=-1){
		  	var a = st.split(" "); 
		  	var b = a[0].split("-");
		  	var c = a[1].split(":"); 
		  	date = new Date(b[0], b[1], b[2], c[0], c[1], c[2]);
		  }else{
		  	var c = st.split(":"); 
		  	if(c[2]){
		  		date= new Date(2000, 1, 1, c[0], c[1], c[2]);
		  	}else{
		  		date= new Date(2000, 1, 1, c[0], c[1], 0);
		  	}
		  }
		  return date; 
	} 
}

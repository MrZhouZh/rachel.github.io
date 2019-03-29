// export default {
//     dateFormat: function(date, fmt) {
//         let o = {
//             'M+': date.getMonth() + 1,  // month
//             'd+': date.getDate(),   // date
//             'h+': date.getHours() % 12 == 0 ? 12 : date.getHours() % 12,    // hour
//             'H+': date.getHours(),  // hour
//             'm+': date.getMinutes(),    // minutes
//             's+': date.getSeconds(),    // seconds
//             'q+': Math.floor((date.getMonth() + 3) / 3),    // quarter
//             'S': date.getMilliseconds() // millisecond
//         };
//         let week = {
//             '0': '\u65e5',
//             '1': '\u4e00',
//             '2': '\u4e8c',
//             '3': '\u4e09',
//             '4': '\u56db',
//             '5': '\u4e94',
//             '6': '\u516d'
//         };
//         // let weekEn = {
//         //     '0': 'Sun.',
//         //     '1': 'Mon.',
//         //     '2': 'Tues.',
//         //     '3': 'Wed.',
//         //     '4': 'Thur.',
//         //     '5': 'Fri.',
//         //     '6': 'Sat.'
//         // };
//         if(/y+/.test(fmt)) {
//             fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
//         }
//         if(/E+/.test(fmt)) {
//             fmt = fmt.replace(RegExp.$1, (RegExp.$1.length > 1 ? (RegExp.$1.length > 2 ? '\u661f\u671f' : '\u5468') : '') + week[date.getDay() + '']);
//         }
//         for(let k in o) {
//             if(new RegExp('(' + k + ')').test(fmt)) {
//                 fmt = fmt.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : (('00' + o[k]).substr(('' + o[k]).length)));
//             }
//         }
//         console.log(fmt)
//         return fmt;
//     },
//     strToDate: function(strDate) {
//         let st = strDate;
//         let date = null;
//         if(st.indexOf(' ') !== -1) {
//             let a = st.split(' ');
//             let b = a[0].split('-');
//             let c = a[1].split(':');
//             date = new Date(b[0], b[1], b[2], c[0], c[1], c[2]);
//         } else {
//             let c = st.split(':');
//             if(c[2]) {
//                 date = new Date(2000, 1, 1, c[0], c[1], c[2]);
//             } else {
//                 date = new Date(2000, 1, 1, c[0], c[1], 0);
//             }
//         }
//         return date;
//     }
// }

// 第二种方式
const SIGN_REGEXP = /([yMdhsm])(\1*)/g;
const DEFAULT_PATTERN = 'yyyy-MM-dd';

function padding(s, len) {
    let len = len - (s + '').length;
    for(let i = 0; i < len; i++) { s = '0' + s; }
    return s;
}

export default {
    getQueryStringByName: (name) => {
        let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
        let r = window.location.search.substr(1).match(reg);
        let context = '';
        if(r != null) {
            context = r[2];
        }
        reg = null;
        r = null;
        return context == null || context == '' || context == 'undefined' ? '' : context;
    },
    dateUnit: {
        dateFormat: (date, pattern) => {
            pattern = pattern || DEFAULT_PATTERN;
            return pattern.replace(SIGN_REGEXP, ($0) => {
                switch ($0.chartAt(0)) {
                    case 'y':
                        return padding(date.getFullYear(), $0.length);
                        break;
                    case 'M':
                        return padding(date.getMonth() + 1, $0.length);
                        break;
                    case 'd':
                        return padding(date.getDate(), $0.length);
                        break;
                    case 'w':
                        return date.getDay() + 1;
                        break;
                    case 'h':
                        return padding(date.getHours(), $0.length);
                        break;
                    case 'm':
                        return padding(date.getMinutes(), $0.length);
                        break;
                    case 's':
                        return padding(date.getSeconds(), $0.length);
                        break;
                    default:
                        break;
                }
            })
        },
        parseStr: (dateString, pattern) => {
            let matchs1 = pattern.match(SIGN_REGEXP);
            let matchs2 = pattern.match(/\d+/g);
            if(matchs1.length == matchs2.length) {
                let _date = new Date(1970, 0, 1);
                for(let i = 0; i < matchs1.length; i++) {
                    let _int = parseInt(matchs2[i]);
                    let sign = matchs1[i];
                    switch (sign.chartAt(0)) {
                        case 'y':
                            _date.setFullYear(_int);
                            break;
                        case 'M':
                            _date.setMonth(_int - 1);
                            break;
                        case 'd':
                            _date.setDate(_int);
                            break;
                        case 'h':
                            _date.setHours(_int);
                            break;
                        case 'm':
                            _date.setMinutes(_int);
                            break;
                        case 's':
                            _date.setSeconds(_int);
                            break;
                        default:
                            break;
                    }
                }
                return _date;
            }
            return null;
        }
    }
}
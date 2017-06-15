//格式化日期
Object.assign(Date.prototype, {
    format(format) {
        const date = {
            'M+': this.getMonth() + 1,
            'd+': this.getDate(),
            'h+': this.getHours(),
            'm+': this.getMinutes(),
            's+': this.getSeconds(),
            'q+': Math.floor((this.getMonth() + 3) / 3),
            'S+': this.getMilliseconds()
        };

        let newFormat = format;

        if (/(y+)/i.test(newFormat)) {
            newFormat = newFormat.replace(RegExp.$1, this.getFullYear().toString().substr(4 - RegExp.$1.length));
        }

        Object.keys(date).map((k) => {
            if (new RegExp(`(${k})`).test(newFormat)) {
                newFormat = newFormat.replace(RegExp.$1, RegExp.$1.length === 1
                    ? date[k] : (`00${date[k]}`).substr(date[k].toString().length));
            }
            return newFormat;
        });

        return newFormat;
    }
});

const LogoImg = 'http://www.jary8.com/static/images/logo.png';

const ArticleData = require('./data/articleData.json').sort(this.sortArray);

ArticleData.sort((a, b) => (b.date - a.date));
ArticleData.map((value) => {
    const newDate = new Date();

    newDate.setTime(value.date * 1000);

    const regexp1 = /[\s\f\t\r]+/g;//正则表达式匹配连续空格，制表符，回车符标签
    const regexp2 = /\n+/g;//正则表达式匹配连续换行符标签
    const regexp3 = /\/content\/uploadfile\/['"]?([^'"]*)?/gi;//正则表达式匹配图片地址

    let newContent = value.content.replace(regexp1, ' ').replace(regexp2, '\n').split('<p>').map((value) => {
        if (value.indexOf('<img') >= 0) {
            value = `http://www.jary8.com/static${value.match(regexp3)}`;
        }
        return value;
    });

    if (value.description.indexOf('<img') >= 0) {
        value.description = `http://www.jary8.com/static${value.description.match(regexp3)}`;
    }

    const newValue = {
        date: newDate.format('yyyy-MM-dd'),
        content: newContent
    };

    Object.assign(value, newValue);

    return value;
});//格式化日期

const WebsiteData = require('./data/websiteData.json');

export { LogoImg, ArticleData, WebsiteData };
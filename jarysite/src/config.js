//格式化日期
Date.prototype.format = function (format) {
    const date = {
        'M+': this.getMonth() + 1,
        'd+': this.getDate(),
        'h+': this.getHours(),
        'm+': this.getMinutes(),
        's+': this.getSeconds(),
        'q+': Math.floor((this.getMonth() + 3) / 3),
        'S+': this.getMilliseconds()
    };
    if (/(y+)/i.test(format)) {
        format = format.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    for (let k in date) {
        if (new RegExp('(' + k + ')').test(format)) {
            format = format.replace(RegExp.$1, RegExp.$1.length === 1
                ? date[k] : ('00' + date[k]).substr(('' + date[k]).length));
        }
    }
    return format;
};

const ArticleData = require('./data/articleData.json').sort(this.sortArray);

ArticleData.map((value) => {
    const newDate = new Date();
    newDate.setTime(value.date * 1000);
    value.date = newDate.format('yyyy-MM-dd');

    const regexp1 = /<[^>]*>/g;//正则表达式匹配各种HTML标签
    const regexp2 = /\s\f\t\r+/g;//正则表达式匹配img标签
    const regexp3 = /\n+/g;//正则表达式匹配img标签
    value.content = value.content.replace(regexp1, '\n').replace(regexp2, '\n').replace(regexp3, '\n');//正则匹配替换文章图片路径
    value.content = value.content.split('\n'); //按</p><p>转换字符串为数组

    return value;
});//格式化日期

const WebsiteData = require('./data/websiteData.json');

module.exports = { ArticleData, WebsiteData };
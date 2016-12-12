//将 Buffer 转换为 JSON 对象
console.log('将 Buffer 转换为 JSON 对象 语法：buf.toJSON()');
var buffer = new Buffer('www.runoob.com');
var json = buffer.toJSON(buffer);
console.log(json);

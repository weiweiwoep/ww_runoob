
//写入缓冲区
console.log('写入缓冲区');
var buf = new Buffer(256);
var len = buf.write("www.runoob.com");
console.log("写入字节数："+len);

//从缓冲区读取数据
console.log("从缓冲区读取数据");
var buffer = new Buffer(26);
for (var i = 0; i < 26; i++){
    buffer[i] = i + 97;
}
console.log(buffer.toString('ascii'));      // 输出: abcdefghijklmnopqrstuvwxyz
console.log(buffer.toString('ascii',0,5));  // 输出: abcde
console.log(buffer.toString('utf8',0,5));   // 输出: abcde
console.log(buffer.toString(undefined,0,5));    // 使用 'utf8' 编码, 并输出: abcde

//将 Buffer 转换为 JSON 对象
console.log('将 Buffer 转换为 JSON 对象 语法：buf.toJSON()');
var buffer = new Buffer('www.runoob.com');
var json = buffer.toJSON(buffer);
console.log(json);

//缓冲区合并
//语法：Buffer.concat(list[, totalLength])
var buffer1 = new Buffer('菜鸟教程');
var buffer2 = new Buffer('www.runoob.com');
var buffer3 = Buffer.concat([buffer1,buffer2]);
console.log('合并后 buffer3 的内容：'+buffer3.toString());

//缓冲区比较
//语法：buf.compare(otherBuffer);
console.log('缓冲区比较');
var buffer4 = new Buffer('ABCD');
var buffer5 = new Buffer('ABCDE');
var result = buffer4.compare(buffer5);

if (result < 0){
    console.log(buffer4 + '在' + buffer5 + '之前');
}else if (result == 0){
    console.log(buffer4 + '与' + buffer5 + '相同');
}else{
    console.log(buffer4 + '在' + buffer5 + '之后');
}

//拷贝缓冲区
//buf.copy(targetBuffer[, targetStart[, sourceStart[, sourceEnd]]])
/**
 * 参数
参数描述如下：
targetBuffer - 要拷贝的 Buffer 对象。
targetStart - 数字, 可选, 默认: 0
sourceStart - 数字, 可选, 默认: 0
sourceEnd - 数字, 可选, 默认: buffer.length
 */
console.log('拷贝缓冲区');
var sourceBuffer = new Buffer('ABC');
//创建一个拷贝缓冲区
var targetBuffer = new Buffer(3);
sourceBuffer.copy(targetBuffer);
console.log('targetBuffer content: '+targetBuffer);

//缓冲区裁剪
//语法：buf.slice([start[, end]])
/**
 * 
 * 参数
参数描述如下：
start - 数字, 可选, 默认: 0
end - 数字, 可选, 默认: buffer.length
返回值
返回一个新的缓冲区，它和旧缓冲区指向同一块内存，但是从索引 start 到 end 的位置剪切。
 * 
 */
console.log('缓冲区裁剪');
var buffer6 = new Buffer('runoob');
//剪切缓冲区
var buffer7 = buffer6.slice(0,2);
console.log('buffer7 content: '+buffer7);

//缓冲区长度
//语法：buf.length;
console.log('缓冲区长度');
var buffer8 = new Buffer('www.runoob.com');
//缓冲区长度
console.log('buffer length:' + buffer8.length);

/**
 * 1-12-1、心跳请求消息
 * */
function (paramArray){
	var array=[
   	    {type:MESSAGE_PARAM_TYPE.FLOAT,length:4,value:""},
		{type:MESSAGE_PARAM_TYPE.FLOAT,length:4,value:""},
		{type:MESSAGE_PARAM_TYPE.INT,length:4,value:""}
	];
	for(var i in paramArray)
		array[i].value=paramArray[i];
	return MessageHeadReq("0x01","0x20","32").concat(array);
}
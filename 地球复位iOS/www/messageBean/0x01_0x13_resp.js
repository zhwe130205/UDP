/**
 * 1-8-2、删除好友响应消息
 * */
function (){
	var array=[
		{type:MESSAGE_PARAM_TYPE.INT,length:4,name:"ResCode"},
		{type:MESSAGE_PARAM_TYPE.INT,length:4,name:"Checksum"}
	];
	return MessageHeadResp().concat(array);
}
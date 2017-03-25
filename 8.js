 
//选中，事件委托
box.onclick=function(event){
	var oEvent=event || window.event;
	var target=oEvent.target || oEvent.srcElement;
	if(target.nodeName == "SPAN" || target.nodeName == "DIV"){
		target.style.background="red"; 
	} 
	//删除节点
	aInput[4].onclick=function(){
		if(target.nodeName == "SPAN" || target.nodeName == "DIV"){
			target.parentNode.removeChild(target); 
		}
		target.style.background="white"; 
	};
	//添加节点
	aInput[3].onclick=function(){
		text=aInput[0].value;
		if(text){
			var one=document.createElement("span");
			var two=document.createTextNode(text);
			one.appendChild(two);
			if(target.nodeName == "DIV"){ 
				target.appendChild(one); 
			}else if(target.nodeName == "SPAN" ){
				target.parentNode.appendChild(one); 
			} 
		}else{
			alert("请输入要添加节点的内容！");
		}
		target.style.background="white";
	};

};


 
//获取元素
var box=document.querySelector("#box");
var aDiv=document.querySelectorAll(".aDiv"); 
var aInput=document.getElementsByTagName("input"); 
//变色
var flag=true; 
var time=500;
var color; 
var iterator;
function show(node,flag=true){	 
	if(node){
		 	setTimeout(function() {
			color="rgba("+Math.floor(225*Math.random())+","+Math.floor(225*Math.random())+","+Math.floor(225*Math.random())+","+0.5+")";	
			node.style.background=color; 
		}, time);
		time+=500; 
		setTimeout(function() {
			if(flag == true ) node.style.background="none"; 
			else  alert("恭喜你，找到匹配内容！");//找到就弹出great！ 
		}, time);
	}else{
		setTimeout(function() {
			alert("抱歉，未找到匹配内容！");//遍历完了所有节点，没找到的情况
		}, time);
	}
} 
  
aInput[2].onclick=function(){
	time=500;
	iterator=document.createNodeIterator(box,NodeFilter.SHOW_ELEMENT,null,false);
	nodeshow(iterator.nextNode());
};
function nodeshow(node){
	  if(node !== null){
  		show(node);
	 	nodeshow(iterator.nextNode()); 
    }
}

//查询 
aInput[1].onclick=function(){
    time=500;
	var text=aInput[0].value; 
	if(text){ 
		iterator=document.createNodeIterator(box,NodeFilter.SHOW_ELEMENT,null,false); 
		node=iterator.nextNode();
		while(node!==null){ 
			if(node.tagName.toLowerCase() !== "div" && node.innerHTML == text){  
				show(node,false);
				break;
			}else{ 
				show(node);
				node=iterator.nextNode();
				if(node==null) show(node,"no");
			} 
		} 
	}
	else alert("请输入查询内容！");  
};	
 

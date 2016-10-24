//遍历原型链找到定义属性的的对象
function getDefiningObject(obj,proKey){
	obj = Object(obj);//保证obj是对象
	while(obj && !{}.hasOwnproperty.call(obj,proKey)){
		obj = Object.getPrototypeOf(obj);

	}
	return obj;
}

//深度复制对象
function copyObject(orin){
	var copy = Object.create(Object.getPrototypeOf(orin));
	
	return copyOwnPropertiesFrom(copy,orin);;
}
function copyOwnPropertiesFrom(target,source){
	Object.getOwnPropertyNames(source).forEach(function(proKey){
		let desc = Object.getOwnPropertyDescriptor(source,proKey);
	 	Object.defineProperty(target,proKey,desc);
	})
	return target;
}

function isType(obj,type){
  if(typeof type !== 'string' && type.length >1){
    throw new Error('invalid type')
  }
  type = type.charAt(0).toUpperCase()+type.slice(1)
  let  str = Object.prototype.toString.call((obj));
  return str.slice(9,str.length-1) === type;
}
function getType(obj){
  let str = Object.prototype.toString.call((obj));
  return str.slice(9,str.length-1);
}
function getRegExp(reg) {
  let flag = '';
  if(reg.global) flag+='g';
  if(reg.ignoreCase) flag+='i';
  if(reg.multiline) flag+='m';
  return flag;
}

function deepClone(parent){
  const parents = [];
  const children = [];
  const _clone = (parent)=>{
    let type = getType(parent);
    let child;
    let flag ;
    switch(type){
      case 'Null':
        return null;
      case 'Date':
        return new Date(parent.getTime())
      case 'RegExp':
        child =  new RegExp(parent.source,getRegExp(parent));
        if (parent.lastIndex) child.lastIndex = parent.lastIndex;
        return child;
      case 'Symbol':
        return  Symbol(String(parent).slice(7,-1));
      case 'Array'||'Object':
        flag = type;
        if(type === 'Object'){
          proto = Object.getPrototypeOf(parent);
          // 利用Object.create切断原型链
          child = Object.create(proto);
        }else{
          child = []
        }
        parents.push(parent)
        children.push(child)
        break;
      default:
         return parent;
      //处理循环引用
      const index = parents.indexOf(parent);
      if(index > -1){
        return children[index]
      }
      parents.push(parent);
      children.push(child);
      for(let i in parent){
        child[i] = parent[i];
      }
      return child;
    }
  }
  return _clone(parent);
}
function person(pname) {
  this.name = pname;
}

const Messi = new person('Messi');

function say() {
  console.log('hi');
}

const oldObj = {
  a: say,
  c: new RegExp('ab+c', 'i'),
  d: Messi,
  f:['a','b'],
  h:Symbol('foo')
};
oldObj['e'] = {
  e2:oldObj,
  e3:[oldObj]
};
const newObj = deepClone(oldObj);
console.log(newObj);

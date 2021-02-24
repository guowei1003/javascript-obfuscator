/**
 * 创建一个自定义的映射关系存储
 * @param metadataKey 映射的key
 * @param metadataValue 映射key 对应的value值
 * @param target 映射需要的对应的类 或者实例
 * @param propertyKey 实例上的属性
 * **/
function customDecorator(metadataKey, metadataValue) {
  return ( target, propertyKey) =>{
    Reflect.defineMetadata(metadataKey,metadataValue, target, propertyKey)
  }
}

@customDecorator('role', ['1'])
class Post {
  name = ''
}
const post = new Post()
let rg =  Reflect.getMetadata('role',post, 'name')
console.log(rg)
// ["1"]
rg.push('2')
rg =  Reflect.getMetadata('role',post, 'name')
console.log(rg)
// ["1", "2"]

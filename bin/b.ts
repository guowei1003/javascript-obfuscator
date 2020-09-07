function logClass(params:string):any {
  return function(target:any,attr:any){
    console.log(target)
    console.log(attr)
    target[attr] = params;
    target.run = function (){
      console.log(this.name+'在跑')
    }
  }
}

class Http{
  @logClass('王五')
  public name:String | undefined;
  constructor(){

  }
  getData():void{
    console.log(this.name)
  }
}
var h:any = new Http();
h.getData();
h.run();
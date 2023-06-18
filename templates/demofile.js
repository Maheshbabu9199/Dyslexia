console.log("Started...");


for(let i=1;i<=5;i++)
{
  let s=0;
  val = new Date().getSeconds();
  console.log(i+"th iteration value is "+val);
  
  while(true){
    if(new Date().getSeconds()==val+2){
        console.log("inside the while loop checking for the sec val value");
        s=1;
        break;
    }
  }
  if(s==1){
    console.log("for "+i+"th iteration"+"s value is"+s);
    s=0;
  }
}

console.log("ended..");
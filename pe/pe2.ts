let a=1,b=1,s=0;
while(b<4e6){
  a+=b;
  a^=b;
  b^=a;
  a^=b;
  s+=(a&1)?0:a;
}
console.log(s);
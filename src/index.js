  module.exports=function getZerosCount(number,base)
  {
    function count_degree(number,divisor)
	{
	var max_degree=0;
	while (Math.pow(divisor,max_degree)<=number) {
		max_degree++;
	}
	max_degree--;
    count_numbers=0;
    count_degrees=0;
    for(var i=max_degree;i>0;i--)
    {
    	count_degrees+=i*(Math.floor(number/Math.pow(divisor,i))-count_numbers);
    	count_numbers=Math.floor(number/Math.pow(divisor,i));
    }
    return count_degrees;
    }
    function is_simple(x)
    {
    	if(x===1||x===2||x===3)
    		return true;
    	for(var i=2;i<=x/2;i++)
    		if(x%i===0)
    			return false;
        return true;
    }
    function simple_divisors(x)
    {
    	var obj={};
    	if(is_simple(x))
    	{
    		obj[x]=1;
    		return obj;
    	}
    	for(var i=2;i<=x/2;i++)
    		if(is_simple(i))
    		{
    			var j=0;
    			while(x%Math.pow(i,j)===0)
    				j++;
    			j--;
    			if(j>0)
    				obj[i]=j;
    		}
    return obj;
    }

var base_divisors=simple_divisors(base);
var factorial_divisors={};
for (var key in base_divisors) {
    	factorial_divisors[key]=count_degree(number,key);
}
var result=[];
for (key in base_divisors) {
       	result.push(Math.floor(factorial_divisors[key]/base_divisors[key]));
}   
var compare=(a,b)=>a-b;
var zeros_count=result.sort(compare)[0];
return zeros_count;
}
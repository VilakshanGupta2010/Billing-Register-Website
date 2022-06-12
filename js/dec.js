function dec(string1)
{
	//var string1="]24 ^24 `23 >22 c24 l21 ]24 d25 g25 /11 _24 m22 j23";
	var splitresult;
	var LastReslt="";
	splitresult= string1.split(" ");
	for(i=0; i<splitresult.length; i++)
	{
		//Getting midvalue
		var midvalue=parseInt(splitresult[i].substring(1,2));
		//document.write(midvalue);
		
		if (midvalue===2)
			{
				//Substring first character and then convert into corrosponding ASCII value.
				var asciiVal=splitresult[i].substring(0,1);
				NewVal =parseInt(asciiVal.charCodeAt());
				
				//substring the random value.
				randomVal=parseInt(splitresult[i].substring(2,3));
				
				//final Ascii Value.
				var add= NewVal+randomVal;
				
			}
		else if(midvalue===1)
			{
				//Substring first character and then convert into corrosponding ASCII value.
				var asciiVal=splitresult[i].substring(0,1);
				NewVal =parseInt(asciiVal.charCodeAt());
				
				//substring the random value.
				randomVal=parseInt(splitresult[i].substring(2,3));
				
				//final Ascii Value.
				var add= NewVal-randomVal;
			}
		//final result produced into character value.
			var LastReslt=LastReslt + String.fromCharCode(add);
			
	}
	window.location.href=LastReslt;
} 
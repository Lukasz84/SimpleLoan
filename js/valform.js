$(document).ready(function ()
{
$('input:text').bind("mouseover keyup",val);
function val()
{
var cur=$(this);
cur.next('p').remove();	
if(cur.hasClass('loan'))
	{
		if(isNaN(cur.val()))
		{
			cur.after('<p style="display:inline; color:ORANGE; padding-left:5px;">  *To pole nie jest liczba</p>');
			
				cur.data('valid',false);
			
		}
		else if(cur.val()<500||cur.val()>50000)
			{
				cur.after('<p style="display:inline; color:ORANGE; padding-left:5px;">  * Select proper loan range </p>');
				cur.data('valid',false);
			}
		else
			{
				cur.data('valid',true);
			}
	}
if(cur.hasClass('require'))
	{
		
			if($.trim(cur.val())=='')
			{
				cur.after('<p style="display:inline; color:ORANGE; padding-left:5px;">  *To pole jest wymagane</p>');
				cur.data('valid',false);
			}
			else if(cur.val().length<2)
			{
				cur.after('<p style="display:inline;">  *Podana nazwa jest za krótka</p>');
				cur.data('valid',false);
			}
			else
			{
				cur.data('valid',true);
			}
	}
if(cur.hasClass('number'))
	{
		if(isNaN(cur.val()))
			{
				cur.after('<p style="display:inline; color:ORANGE; padding-left:5px;">  *To pole nie jest liczba</p>');
				cur.data('valid',false);
			}
		else
			{
				cur.data('valid',true);
			}
	}

	
		$('#oblicz').click(function(){
			if($('#time').val()=="14 day's" && cur.val()>499 && cur.val()<50001)
				{
					var first;
					var rate;
					var fee;
					first=$('#money').val();
					first=parseFloat(first);
					rate=first*0.01;
					fee=first*0.001;
					rate=parseFloat(rate);
					fee=parseFloat(fee);
					rate=rate.toFixed(2);
					fee=fee.toFixed(2);				
					var date=$('#time').val();
					var amount;
					amount=parseFloat(rate)+parseFloat(fee);
					amount=amount.toFixed(2);
					var total;
					total=parseFloat(first)+parseFloat(rate)+parseFloat(fee);
					total=total.toFixed(2);
					$('#result').html('Your loan: ' + first +'<br>Rate of loan: ' 
					+ rate +'<br>Fee for loan: ' + fee 
					+ '<br> Length of loan: ' + date + '<br> Total amount: ' + amount 
					+ '<br> Total loan cost: ' + total);
					
					
				}
			else if($('#time').val()=="30 day's" && cur.val()>499 && cur.val()<50001)
				{
					var first;
					var rate;
					var fee;
					first=$('#money').val();
					first=parseFloat(first);
					rate=first*0.012;
					fee=first*0.0012;
					rate=parseFloat(rate);
					fee=parseFloat(fee);
					rate=rate.toFixed(2);
					fee=fee.toFixed(2);				
					var date=$('#time').val();
					var amount;
					amount=parseFloat(rate)+parseFloat(fee);
					amount=amount.toFixed(2);
					var total;
					total=parseFloat(first)+parseFloat(rate)+parseFloat(fee);
					total=total.toFixed(2);
					$('#result').html('Your loan: ' + first +'<br>Rate of loan: ' 
					+ rate +'<br>Fee for loan: ' + fee 
					+ '<br> Length of loan: ' + date + '<br> Total amount: ' + amount 
					+ '<br> Total loan cost: ' + total)
				}
			else if($('#time').val()=="2 month's" && cur.val()>499 && cur.val()<50001)
				{
					var first;
					var rate;
					var fee;
					first=$('#money').val();
					first=parseFloat(first);
					rate=first*0.02;
					fee=first*0.002;
					rate=parseFloat(rate);
					fee=parseFloat(fee);
					rate=rate.toFixed(2);
					fee=fee.toFixed(2);				
					var date=$('#time').val();
					var amount;
					amount=parseFloat(rate)+parseFloat(fee);
					amount=amount.toFixed(2);
					var total;
					total=parseFloat(first)+parseFloat(rate)+parseFloat(fee);
					total=total.toFixed(2);
					$('#result').html('Your loan: ' + first +'	<br>Rate of loan: ' 
					+ rate +'<br>Fee for loan: ' + fee 
					+ '<br> Length of loan: ' + date + '<br> Total amount: ' + amount 
					+ '<br> Total loan cost: ' + total)
				}
			else if($('#time').val()=="3 month's" && cur.val()>499 && cur.val()<50001)
				{
					var first;
					var rate;
					var fee;
					first=$('#money').val();
					first=parseFloat(first);
					rate=first*0.025;
					fee=first*0.0025;
					rate=parseFloat(rate);
					fee=parseFloat(fee);
					rate=rate.toFixed(2);
					fee=fee.toFixed(2);				
					var date=$('#time').val();
					var amount;
					amount=parseFloat(rate)+parseFloat(fee);
					amount=amount.toFixed(2);
					var total;
					total=parseFloat(first)+parseFloat(rate)+parseFloat(fee);
					total=total.toFixed(2);
					$('#result').html('Your loan: ' + first +'<br>Rate of loan: ' 
					+ rate +'<br>Fee for loan: ' + fee 
					+ '<br> Length of loan: ' + date + '<br> Total amount: ' + amount 
					+ '<br> Total loan cost: ' + total)
				}
			else if($('#time').val()=="6 month's" && cur.val()>499 && cur.val()<50001)
				{
					var first;
					var rate;
					var fee;
					first=$('#money').val();
					first=parseFloat(first);
					rate=first*0.035;
					fee=first*0.0035;
					rate=parseFloat(rate);
					fee=parseFloat(fee);
					rate=rate.toFixed(2);
					fee=fee.toFixed(2);				
					var date=$('#time').val();
					var amount;
					amount=parseFloat(rate)+parseFloat(fee);
					amount=amount.toFixed(2);
					var total;
					total=parseFloat(first)+parseFloat(rate)+parseFloat(fee);
					total=total.toFixed(2);
					$('#result').html('Your loan: ' + first +'<br>Rate of loan: ' 
					+ rate +'<br>Fee for loan: ' + fee 
					+ '<br> Length of loan: ' + date + '<br> Total amount: ' + amount 
					+ '<br> Total loan cost: ' + total)
				}
				else if($('#time').val()=="one year" && cur.val()>499 && cur.val()<50001)
				{
					var first;
					var rate;
					var fee;
					first=$('#money').val();
					first=parseFloat(first);
					rate=first*0.045;
					fee=first*0.0045;
					rate=parseFloat(rate);
					fee=parseFloat(fee);
					rate=rate.toFixed(2);
					fee=fee.toFixed(2);				
					var date=$('#time').val();
					var amount;
					amount=parseFloat(rate)+parseFloat(fee);
					amount=amount.toFixed(2);
					var total;
					total=parseFloat(first)+parseFloat(rate)+parseFloat(fee);
					total=total.toFixed(2);
					$('#result').html('Your loan: ' + first +'<br>Rate of loan: ' 
					+ rate +'<br>Fee for loan: ' + fee 
					+ '<br> Length of loan: ' + date + '<br> Total amount: ' + amount 
					+ '<br> Total loan cost: ' + total)
				
				}
			
			});	
	}

	
	//Funkcja sprawdzania klawisza
	$('#next1').click(function()
		{
			$('#info').html('');
			var data=true;
			$('.loan').each(function() {
                var current=$(this);
				if(current.data('valid')!=true)
					{
						data=false;
					}
					
				});
		
		if(data){
			$('#info').html('');
			$('#calc').hide('slow');
			$('#first').show('slow');
			
		}
		else
		$('#info').html('<br><h3 style="color:ORANGE; "> Please corect Your data and click Next again');
		});

$('#back').click(function()
{
	$('#first').hide('slow'); $('#calc').show('slow');
	});
});


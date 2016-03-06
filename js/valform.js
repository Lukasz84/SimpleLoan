$(document).ready(function ()
{
$('input:text').bind("mouseover keyup",val);
function val()
{
var cur=$(this);
cur.next('p').remove();	

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
			if($('#time').val()=="14 day's")
				{
					var first;
					var rate;
					var fee;
					first=$('#amount').val();
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
			else if($('#time').val()=="30 day's")
				{
					var first;
					var rate;
					var fee;
					first=$('#amount').val();
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
			else if($('#time').val()=="2 month's")
				{
					var first;
					var rate;
					var fee;
					first=$('#amount').val();
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
			else if($('#time').val()=="3 month's")
				{
					var first;
					var rate;
					var fee;
					first=$('#amount').val();
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
			else if($('#time').val()=="6 month's")
				{
					var first;
					var rate;
					var fee;
					first=$('#amount').val();
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
				else if($('#time').val()=="one year")
				{
					var first;
					var rate;
					var fee;
					first=$('#amount').val();
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
				
				}});//Koniec funkcji obliczajacej finanse
				
				//Walidacja drugiego kroku
if(cur.hasClass('post'))
	{
		if(cur.val().length<5)
			{
				cur.after('<p style="display:inline; color:ORANGE; padding-left:5px;">  * Post code is too short </p>');
				cur.data('valid',false);
			}
		else
			{
				cur.data('valid',true);
			}
	}
//Funkcje sprawdzajace trzeciego kroku	
		
if(cur.hasClass('address'))
	{
		var email=/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
		if(!email.test(cur.val()))
			{
				cur.after('<p style="display:inline; color:ORANGE; padding-left:5px;">  * Put correct e-mail address </p>');
				cur.data('valid',false);
			}
		else
			{
				cur.data('valid',true);
			}
	}
	
if(cur.hasClass('addressc'))
	{
		var email=/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
		if(!email.test(cur.val()))
			{
				cur.after('<p style="display:inline; color:ORANGE; padding-left:5px;">  * Put correct e-mail address </p>');
				cur.data('valid',false);
			}
		else if($('#address').val()!=cur.val())
		{
			cur.after('<p style="display:inline; color:ORANGE; padding-left:5px;">  * Put this same e-mail address  </p>');
				cur.data('valid',false);
			
		}
		else
			{
				cur.data('valid',true);
			}
	}
if(cur.hasClass('nino'))
	{
		var email=/^([a-zA-Z]{2})([0-9]{10})$/;
		if(!email.test(cur.val()))
			{
				cur.after('<p style="display:inline; color:ORANGE; padding-left:5px;">  * Wrong NINo. </p>');
				cur.data('valid',false);
			}
		else
			{
				cur.data('valid',true);
			}
	}
if(cur.hasClass('dob'))
	{
		
		if(isNaN(cur.val()))
			{
				cur.after('<p style="display:inline; color:ORANGE; padding-left:5px;">  * It\'s not a number </p>');
				cur.data('valid',false);
			}
		else
			{
				cur.data('valid',true);
			}
	}

	}
	

	
	//Funkcja sprawdzania klawisza dla pierwszego kroku
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
		
//Funkcja sprawdzania klawisza dla drugiego kroku
	$('#next2').click(function()
		{
			$('#info2').html('');
			var data2=true;
			$('.require').each(function() {
                var current=$(this);
				if(current.data('valid')!=true)
					{
						data2=false;
					}
					
				});
				$('.post').each(function() {
                var current=$(this);
				if(current.data('valid')!=true)
					{
						data2=false;
					}
					
				});
		
		
	
		if(data2)
		{
				$('#info2').html('');
			$('#first').hide('slow');
			$('#second').show('slow');
		}
		else
			$('#info2').html('<br><h3 style="color:ORANGE; "> Please corect Your data afcdsfggfgnd click Next again');
			
		});

//Funkcja sprawdzania klawisza dla trzeciego kroku
	$('#next3').click(function()
		{
			$('#info3').html('');
			var data3=true;
			$('.address').each(function() {
                var current=$(this);
				if(current.data('valid')!=true)
					{
						data3=false;
					}
					
				});
		$('.addressc').each(function() {
                var current=$(this);
				if(current.data('valid')!=true)
					{
						data3=false;
					}
					
				});
		$('.nino').each(function() {
                var current=$(this);
				if(current.data('valid')!=true)
					{
						data3=false;
					}
					
				});
	
		$('.dob').each(function() {
                var current=$(this);
				
				
				
					{
						data3=false;
					}
					
				});
				
					
		if(data3)
		{
			$('#info3').html('');
			$('#second').hide('slow');
			$('#third').show('slow');
		}
		else
			$('#info3').html('<br><h3 style="color:ORANGE;"> Please corect Your data afcdsfggfgnd click Next again');
});

//Walidacja czwartego kroku

$('#back').click(function()
{
	$('#first').hide('slow'); $('#calc').show('slow');
	});
	
$('#back1').click(function()
{
	$('#second').hide('slow'); $('#first').show('slow');
});


});




//JQUERY UI THEME!!!!!!!!!!!!!!!!!
//Slider rate
 $(function() {
    $( "#slider" ).slider({
         range: "min",
      value: 500,
      min: 500,
      max: 10000,
	  step:50,
      slide: function( event, ui ) {
        $( "#amount" ).val(ui.value);
      }
    });
    $( "#amount" ).val( $( "#slider" ).slider( "values", 1 ) );
  });
 //Tool tip
   $(function() {
    $( document ).tooltip();
  });
 
 
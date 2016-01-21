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
if(cur.hasClass('loan'))
	{
		if(!isNaN(cur.val()))
		{
			cur.after('<p style="display:inline; color:ORANGE; padding-left:5px;">  *To pole nie jest liczba</p>');
				cur.data('valid',false);
			
		}
	}
	
	//Funkcja sprawdzania klawisza
	$('#next1').click(function()
		{
			var data=true;
			$('.require').each(function() {
                var current=$(this);
				if(current.data('valid')!=true)
					{
						data=false;
					}
				});
				$('.number').each(function() {
                var current=$(this);
				if(current.data('valid')!=true)
					{
						data=false;
					}
				});
				
				
		
		if(data){
			$('#first').hide('slow');
			$('#second').show('slow');
		}
		else
		$('#info').html('Zle');
		
		});
}
$('#back').click(function(){$('#second').hide('slow'); $('#first').show('slow');});
});


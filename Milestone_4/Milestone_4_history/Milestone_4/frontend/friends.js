function getSeason(answer) {
  if (answer.id == "graph") {
    document.getElementById('season').classList.add('season');
    document.getElementById('label_season').classList.add('season');
    document.getElementById('season_graph').classList.remove('season');
    document.getElementById('label_graph').classList.remove('season');
    document.getElementById('episode1').classList.add('episode');
    document.getElementById('label1').classList.add('episode');
    document.getElementById('episode2').classList.add('episode');
    document.getElementById('label2').classList.add('episode');
    document.getElementById('episode3').classList.add('episode');
    document.getElementById('label3').classList.add('episode');
    document.getElementById('episode4').classList.add('episode');
    document.getElementById('label4').classList.add('episode');
    document.getElementById('episode5').classList.add('episode');
    document.getElementById('label5').classList.add('episode');
    document.getElementById('episode6').classList.add('episode');
    document.getElementById('label6').classList.add('episode');
    document.getElementById('episode7').classList.add('episode');
    document.getElementById('label7').classList.add('episode');
    document.getElementById('episode8').classList.add('episode');
    document.getElementById('label8').classList.add('episode');
    document.getElementById('episode9').classList.add('episode');
    document.getElementById('label9').classList.add('episode');
    document.getElementById('episode10').classList.add('episode');
    document.getElementById('label10').classList.add('episode');
  } else {
    document.getElementById('season').classList.remove('season');
    document.getElementById('label_season').classList.remove('season');
    document.getElementById('season_graph').classList.add('season');
    document.getElementById('label_graph').classList.add('season');
  }
}
    
function getEpisode(answer) {
  if (answer.value == 1) {
    document.getElementById('episode1').classList.remove('episode');
    document.getElementById('label1').classList.remove('episode');
    document.getElementById('episode2').classList.add('episode');
    document.getElementById('label2').classList.add('episode');
    document.getElementById('episode3').classList.add('episode');
    document.getElementById('label3').classList.add('episode');
    document.getElementById('episode4').classList.add('episode');
    document.getElementById('label4').classList.add('episode');
    document.getElementById('episode5').classList.add('episode');
    document.getElementById('label5').classList.add('episode');
    document.getElementById('episode6').classList.add('episode');
    document.getElementById('label6').classList.add('episode');
    document.getElementById('episode7').classList.add('episode');
    document.getElementById('label7').classList.add('episode');
    document.getElementById('episode8').classList.add('episode');
    document.getElementById('label8').classList.add('episode');
    document.getElementById('episode9').classList.add('episode');
    document.getElementById('label9').classList.add('episode');
    document.getElementById('episode10').classList.add('episode');
    document.getElementById('label10').classList.add('episode');
  } else if (answer.value == 2) {
    document.getElementById('episode2').classList.remove('episode');
    document.getElementById('label2').classList.remove('episode');
    document.getElementById('episode1').classList.add('episode');
    document.getElementById('label1').classList.add('episode');
    document.getElementById('episode3').classList.add('episode');
    document.getElementById('label3').classList.add('episode');
    document.getElementById('episode4').classList.add('episode');
    document.getElementById('label4').classList.add('episode');
    document.getElementById('episode5').classList.add('episode');
    document.getElementById('label5').classList.add('episode');
    document.getElementById('episode6').classList.add('episode');
    document.getElementById('label6').classList.add('episode');
    document.getElementById('episode7').classList.add('episode');
    document.getElementById('label7').classList.add('episode');
    document.getElementById('episode8').classList.add('episode');
    document.getElementById('label8').classList.add('episode');
    document.getElementById('episode9').classList.add('episode');
    document.getElementById('label9').classList.add('episode');
    document.getElementById('episode10').classList.add('episode');
    document.getElementById('label10').classList.add('episode');
  } else if (answer.value == 3) {
    document.getElementById('episode1').classList.add('episode');
    document.getElementById('label1').classList.add('episode');
    document.getElementById('episode2').classList.add('episode');
    document.getElementById('label2').classList.add('episode');
    document.getElementById('episode3').classList.remove('episode');
    document.getElementById('label3').classList.remove('episode');
    document.getElementById('episode4').classList.add('episode');
    document.getElementById('label4').classList.add('episode');
    document.getElementById('episode5').classList.add('episode');
    document.getElementById('label5').classList.add('episode');
    document.getElementById('episode6').classList.add('episode');
    document.getElementById('label6').classList.add('episode');
    document.getElementById('episode7').classList.add('episode');
    document.getElementById('label7').classList.add('episode');
    document.getElementById('episode8').classList.add('episode');
    document.getElementById('label8').classList.add('episode');
    document.getElementById('episode9').classList.add('episode');
    document.getElementById('label9').classList.add('episode');
    document.getElementById('episode10').classList.add('episode');
    document.getElementById('label10').classList.add('episode');
  } else if (answer.value == 4) {
    document.getElementById('episode1').classList.add('episode');
    document.getElementById('label1').classList.add('episode');
    document.getElementById('episode2').classList.add('episode');
    document.getElementById('label2').classList.add('episode');
    document.getElementById('episode3').classList.add('episode');
    document.getElementById('label3').classList.add('episode');
    document.getElementById('episode4').classList.remove('episode');
    document.getElementById('label4').classList.remove('episode');
    document.getElementById('episode5').classList.add('episode');
    document.getElementById('label5').classList.add('episode');
    document.getElementById('episode6').classList.add('episode');
    document.getElementById('label6').classList.add('episode');
    document.getElementById('episode7').classList.add('episode');
    document.getElementById('label7').classList.add('episode');
    document.getElementById('episode8').classList.add('episode');
    document.getElementById('label8').classList.add('episode');
    document.getElementById('episode9').classList.add('episode');
    document.getElementById('label9').classList.add('episode');
    document.getElementById('episode10').classList.add('episode');
    document.getElementById('label10').classList.add('episode');
  } else if (answer.value == 5) {
    document.getElementById('episode1').classList.add('episode');
    document.getElementById('label1').classList.add('episode');
    document.getElementById('episode2').classList.add('episode');
    document.getElementById('label2').classList.add('episode');
    document.getElementById('episode3').classList.add('episode');
    document.getElementById('label3').classList.add('episode');
    document.getElementById('episode4').classList.add('episode');
    document.getElementById('label4').classList.add('episode');
    document.getElementById('episode5').classList.remove('episode');
    document.getElementById('label5').classList.remove('episode');
    document.getElementById('episode6').classList.add('episode');
    document.getElementById('label6').classList.add('episode');
    document.getElementById('episode7').classList.add('episode');
    document.getElementById('label7').classList.add('episode');
    document.getElementById('episode8').classList.add('episode');
    document.getElementById('label8').classList.add('episode');
    document.getElementById('episode9').classList.add('episode');
    document.getElementById('label9').classList.add('episode');
    document.getElementById('episode10').classList.add('episode');
    document.getElementById('label10').classList.add('episode');
  } else if (answer.value == 6) {
    document.getElementById('episode1').classList.add('episode');
    document.getElementById('label1').classList.add('episode');
    document.getElementById('episode2').classList.add('episode');
    document.getElementById('label2').classList.add('episode');
    document.getElementById('episode3').classList.add('episode');
    document.getElementById('label3').classList.add('episode');
    document.getElementById('episode4').classList.add('episode');
    document.getElementById('label4').classList.add('episode');
    document.getElementById('episode5').classList.add('episode');
    document.getElementById('label5').classList.add('episode');
    document.getElementById('episode6').classList.remove('episode');
    document.getElementById('label6').classList.remove('episode');
    document.getElementById('episode7').classList.add('episode');
    document.getElementById('label7').classList.add('episode');
    document.getElementById('episode8').classList.add('episode');
    document.getElementById('label8').classList.add('episode');
    document.getElementById('episode9').classList.add('episode');
    document.getElementById('label9').classList.add('episode');
    document.getElementById('episode10').classList.add('episode');
    document.getElementById('label10').classList.add('episode');
  } else if (answer.value == 7) {
    document.getElementById('episode1').classList.add('episode');
    document.getElementById('label1').classList.add('episode');
    document.getElementById('episode2').classList.add('episode');
    document.getElementById('label2').classList.add('episode');
    document.getElementById('episode3').classList.add('episode');
    document.getElementById('label3').classList.add('episode');
    document.getElementById('episode4').classList.add('episode');
    document.getElementById('label4').classList.add('episode');
    document.getElementById('episode5').classList.add('episode');
    document.getElementById('label5').classList.add('episode');
    document.getElementById('episode6').classList.add('episode');
    document.getElementById('label6').classList.add('episode');
    document.getElementById('episode7').classList.remove('episode');
    document.getElementById('label7').classList.remove('episode');
    document.getElementById('episode8').classList.add('episode');
    document.getElementById('label8').classList.add('episode');
    document.getElementById('episode9').classList.add('episode');
    document.getElementById('label9').classList.add('episode');
    document.getElementById('episode10').classList.add('episode');
    document.getElementById('label10').classList.add('episode');
  } else if (answer.value == 8) {
    document.getElementById('episode1').classList.add('episode');
    document.getElementById('label1').classList.add('episode');
    document.getElementById('episode2').classList.add('episode');
    document.getElementById('label2').classList.add('episode');
    document.getElementById('episode3').classList.add('episode');
    document.getElementById('label3').classList.add('episode');
    document.getElementById('episode4').classList.add('episode');
    document.getElementById('label4').classList.add('episode');
    document.getElementById('episode5').classList.add('episode');
    document.getElementById('label5').classList.add('episode');
    document.getElementById('episode6').classList.add('episode');
    document.getElementById('label6').classList.add('episode');
    document.getElementById('episode7').classList.add('episode');
    document.getElementById('label7').classList.add('episode');
    document.getElementById('episode8').classList.remove('episode');
    document.getElementById('label8').classList.remove('episode');
    document.getElementById('episode9').classList.add('episode');
    document.getElementById('label9').classList.add('episode');
    document.getElementById('episode10').classList.add('episode');
    document.getElementById('label10').classList.add('episode');
  } else if (answer.value == 9) {
    document.getElementById('episode1').classList.add('episode');
    document.getElementById('label1').classList.add('episode');
    document.getElementById('episode2').classList.add('episode');
    document.getElementById('label2').classList.add('episode');
    document.getElementById('episode3').classList.add('episode');
    document.getElementById('label3').classList.add('episode');
    document.getElementById('episode4').classList.add('episode');
    document.getElementById('label4').classList.add('episode');
    document.getElementById('episode5').classList.add('episode');
    document.getElementById('label5').classList.add('episode');
    document.getElementById('episode6').classList.add('episode');
    document.getElementById('label6').classList.add('episode');
    document.getElementById('episode7').classList.add('episode');
    document.getElementById('label7').classList.add('episode');
    document.getElementById('episode8').classList.add('episode');
    document.getElementById('label8').classList.add('episode');
    document.getElementById('episode9').classList.remove('episode');
    document.getElementById('label9').classList.remove('episode');
    document.getElementById('episode10').classList.add('episode');
    document.getElementById('label10').classList.add('episode');
  } else if (answer.value == 10) {
    document.getElementById('episode1').classList.add('episode');
    document.getElementById('label1').classList.add('episode');
    document.getElementById('episode2').classList.add('episode');
    document.getElementById('label2').classList.add('episode');
    document.getElementById('episode3').classList.add('episode');
    document.getElementById('label3').classList.add('episode');
    document.getElementById('episode4').classList.add('episode');
    document.getElementById('label4').classList.add('episode');
    document.getElementById('episode5').classList.add('episode');
    document.getElementById('label5').classList.add('episode');
    document.getElementById('episode6').classList.add('episode');
    document.getElementById('label6').classList.add('episode');
    document.getElementById('episode7').classList.add('episode');
    document.getElementById('label7').classList.add('episode');
    document.getElementById('episode8').classList.add('episode');
    document.getElementById('label8').classList.add('episode');
    document.getElementById('episode9').classList.add('episode');
    document.getElementById('label9').classList.add('episode');
    document.getElementById('episode10').classList.remove('episode');
    document.getElementById('label10').classList.remove('episode');
  }
}

function checkHappy()
{
     var checkbox = document.getElementById("finishselect");
     alert(checkbox.checked);
     if (checkbox.checked == false) {
        alert("Please confirm you select everything!");
    } 
    else {
	var form = document.getElementById("form");
        form.submit();
    }
}

function update_page(response) {
  	document.getElementById('answerblock').innerHTML = response
}


function addDiv()
{
	var form = document.getElementById("form");
	const formData = new FormData(form);
	const searchParams = new URLSearchParams(formData);
	const queryString = searchParams.toString();
        alert(queryString);
	xmlHttpRqst = new XMLHttpRequest( )
	xmlHttpRqst.onload = function(e) {update_page(xmlHttpRqst.response);} 
	xmlHttpRqst.open( "GET", "/pos?" + queryString);
	try {
		xmlHttpRqst.send( null );
	}
	catch(err)
	{
		alert(err);
	}
}

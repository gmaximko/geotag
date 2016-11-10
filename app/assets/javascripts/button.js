$(document).ready(function () 
{
var ID;
var logic_for_ajax = true;
var time_start;
var latitude;
var longitude;
$(".finish_button").hide();
$(".start_button").click(function () 
{
  $(".start_button").hide();
  $(".finish_button").show();
  if (logic_for_ajax != false) ymaps.ready(init); 
  ID = setInterval(function() 
  { 
    ymaps.ready(init); 
  }, 5000)
  function init() 
  {
	var geolocation = ymaps.geolocation,
	coordinates = [geolocation.latitude, geolocation.longitude]
	if (logic_for_ajax != false)
	{ 
      latitude = geolocation.latitude;
	  longitude = geolocation.longitude;
	  $.ajax(
      {
		type: 'POST',
		url: 'coordinates',
	    data: 
		{
		  coordinate: 
		  {
		    latitude: latitude,
		    longitude: longitude
		  }
		},
	    dataType: 'json'
	  });

	}
    if ((latitude != geolocation.latitude)&&(longitude != geolocation.longitude))
	{ 
	  latitude = geolocation.latitude;
	  longitude = geolocation.longitude;
	  $.ajax(
      {
		type: 'POST',
		url: 'coordinates',
	    data: 
		{
		  coordinate: 
		  {
		    latitude: latitude,
		    longitude: longitude
		  }
		},
	    dataType: 'json'
	  });
	} 
	logic_for_ajax = false;
  }
});

$(".finish_button").click(function () 
{
  $(".finish_button").hide();
  $(".start_button").show();
  clearInterval(ID);
  location.reload();
  logic_for_ajax = true;
});
});



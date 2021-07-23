// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener( 'load', (event) => {
  let flightStatus = document.getElementById( "flightStatus" );
  let flightScreen = document.getElementById( "shuttleBackground" );
  let shuttleHeight = document.getElementById( "spaceShuttleHeight" );
  let rocketImage = document.querySelector( "img#rocket" );
  //rocketImage.style.top = "0px";

  let takeOffButton = document.getElementById( "takeoff" );
  takeOffButton.addEventListener( 'click', function(event) {
    let answer = confirm( "Confirm that the shuttle is ready for takeoff." );
    if ( answer )
    {
      flightStatus.innerHTML = "Shuttle in flight.";
      flightScreen.style.backgroundColor = "blue";
      shuttleHeight.innerHTML = "10,000 miles";
    }

    event.stopPropagation();
  });

  let landingButton = document.getElementById( "landing" );
  landingButton.addEventListener( 'click', function(event) {
    alert( "The shuttle is landing.  Landing gear engaged" );
    flightStatus.innerHTML = "The shuttle has landed.";
    flightScreen.style.backgroundColor = "green";
    shuttleHeight.innerHTML = "0";

    event.stopPropagation();
  });

  let missionAbortButton = document.getElementById( "missionAbort" );
  missionAbortButton.addEventListener( 'click', function(event) {
    let answer = confirm( "Confirm that you want to abort the mission." );
    if ( answer )
    {
      flightStatus.innerHTML = "Mission aborted.";
      flightScreen.style.backgroundColor = "green";
      shuttleHeight.innerHTML = "0";
    }

    event.stopPropagation();
  });

  let buttons = document.querySelectorAll( "button" )
  let up, down, left, right;
  buttons.forEach( (button) => {
    if ( button.innerHTML === "Up" )
    {
      up = button;
    }
    else if ( button.innerHTML === "Down" )
    {
      down = button;
    }
    else if ( button.innerHTML === "Left" )
    {
      left = button;
    }
    if ( button.innerHTML === "Right" )
    {
      right = button;
    }
  });


  up.addEventListener( 'click', function(event) {
    let height = shuttleHeight.innerHTML;
    if ( height.includes(" miles") )
    {
      height = height.substring( 0, height.indexOf(" miles") );
    }

    height = height.replace(",","");
    height = Number(height) + 10000; 
    rocketImage.top = rocketImage.top + 10;

    shuttleHeight.innerHTML = height.toLocaleString( "en-US", {minimumFractionDigits: 0} );
  });

  down.addEventListener( 'click', function(event) {
    let height = shuttleHeight.innerHTML;
    if ( height !== "0" )
    {
      if ( height.includes(" miles") )
      {
        height = height.substring( 0, height.indexOf(" miles") );
      }

      height = height.replace(",","");
      height = Number(height) - 10000; 
      rocketImage.top = rocketImage.top - 10;

      shuttleHeight.innerHTML = height.toLocaleString( "en-US", {minimumFractionDigits: 0} );
    }
  });

  left.addEventListener( 'click', function(event) {
    if ( rocketImage.left === "undefined" )
    {
      rocketImage.left = 10;
    }
    else
    {
      rocketImage.left = rocketImage.left - 10;
    }
  });
  
  right.addEventListener( 'click', function(event) {
    if ( rocketImage.left === "undefined" )
    {
      rocketImage.left = 0;
    }
    else
    {
      rocketImage.left = rocketImage.left + 10;
    }
  });
  
});

// Crystal Collector Game 

    var targetNumber = Math.floor(Math.random() * 101) + 19;
    var counter = 0;
    var wins=0;
    var losses=0;
  
    $("#number-to-guess").text(targetNumber); 
  //--------------------------------------------------------
  
      var numberOptions = [];
  
      for ( var j = 0 ; j <= 3 ; j++) {
          numberOptions.push(Math.floor(Math.random() * 13) + 1);
          console.log(numberOptions[j]);
      }
  
      for (var i = 0; i < numberOptions.length; i++) {
          if ( i === 1 ) {
            $('#c1').append('<button class="crystal" id="crystal1"><img class="right" src="./assets/images/bluestone.jpg"></img></button>');
          } else if ( i === 2 ) {
            $('#c2').append('<button class="crystal" id="crystal2"><img class="right" src="./assets/images/greenstone.jpg"></img></button>');
          } else if ( i === 3 ) {
            $('#c3').append('<button class="crystal" id="crystal3"><img src="./assets/images/purplestone.jpg"></img></button>');
          } else {
            $('#c4').append('<button class="crystal" id="crystal4"><img src="./assets/images/redstone.jpg"></img></button>');
          }
      }
  
      $("#crystal1").on("click", function() {
        counter += numberOptions[0];
        $("#your-score").text(counter);
        console.log("Counter after clicking crystal1 :" + counter);
            if (counter === targetNumber) {
                wins++;
                $("#wins").text(wins);
                resetGame();
            } else if (counter > targetNumber ) {
                losses++;
                $("#losses").text(losses);
                resetGame();
            }
      });
      $("#crystal2").on("click", function() {
        counter += numberOptions[1];
        $("#your-score").text(counter);
        console.log("Counter after clicking crystal2 :" + counter);
            if (counter === targetNumber) {
                wins++;
                $("#wins").text(wins);
                resetGame();
            } else if (counter > targetNumber ) {
                losses++;
                $("#losses").text(losses);
                resetGame();
            }
      });
      $("#crystal3").on("click", function() {
        counter += numberOptions[2];
        $("#your-score").text(counter);
        console.log("Counter after clicking crystal3 :" + counter);
            if (counter === targetNumber) {
                wins++;
                $("#wins").text(wins);
                resetGame();
            } else if (counter > targetNumber ) {
                losses++;
                $("#losses").text(losses);
                resetGame();
            }
      });
      $("#crystal4").on("click", function() {
        counter += numberOptions[3];
        $("#your-score").text(counter);
        console.log("Counter after clicking crystal4 :" + counter);
            if (counter === targetNumber) {
                wins++;
                $("#wins").text(wins);
                resetGame();
            } else if (counter > targetNumber ) {
                losses++;
                $("#losses").text(losses);
                resetGame();
            }
      });

      function resetGame() {
          //Counter & User Guess Reset
          $("#your-score").html(" ");
          counter = 0 ;
          console.log(counter);

          //Generate New Target Number
          targetNumber = Math.floor(Math.random() * 101) + 19;
          $("#number-to-guess").text(targetNumber);

          //Generate New Array Of Numbers
          numberOptions = [] ;
          for ( j = 0 ; j <= 3 ; j++) {
            numberOptions.push(Math.floor(Math.random() * 13) + 1);
            console.log(numberOptions[j]);
          }
      }

$(document).ready(function(){
			$equal = false;
			$screen = $("#screen");
			$dotpressed = false;
			$operation = "";
			$value = false;
			$firstValue = 0;
			$secondValue = 0;
			$point = 0;
			$clearScreen = false;
			$screenisClear = true; 
			$("button").on("click", function(){
				if($(this).attr("id")=="equal")
					{
						if($operation == "")
							retrun;
						
						if($equal){
							$equal = false;
							$screen.val("0");
							clear();
							$screenisClear = true;
							return;
						}
						
						
						$point = 0;	
						$value = false;
						$equal = true;
						$dotpressed = false;
						$result = operate();
						$screen.val($result);
						$operation = "";
						if($result == "division by zero"){
							$firstValue = 0;
							$secondValue = 0;
							$clearScreen = true;

						}
						else{
							$firstValue = $result;
							$secondValue = 0;
							$clearScreen = false;
						}
						$operation = "";
						
					}
				if($(this).attr("id")=="addition")
					{
						if($operation == ""){
							$screen.val($screen.val() + "+");
							$operation = "+";
							$value = true;
							$point = 0;
							$equal = false;
							$dotpressed = false;
							$screenisClear = false;
						}
						
					}
				if($(this).attr("id")=="subtraction")
					{
						if($operation == ""){
							$screen.val($screen.val() + "-");
							$operation = "-";
							$value = true;
							$point = 0;
							$equal = false;
							$dotpressed = false;
							$screenisClear = false;
						}
					}
				if($(this).attr("id")=="multiplication")
					{
						if($operation == ""){
							$screen.val($screen.val() + "x");
							$operation = "x";
							$value = true;
							$point = 0;
							$equal = false;
							$dotpressed = false;
							$screenisClear = false;
						}
					}
				if($(this).attr("id")=="division")
					{
						if($operation == ""){
							$screen.val($screen.val() + "/");
							$operation = "/";
							$value = true;
							$point = 0;
							$equal = false;
							$dotpressed = false;
							$screenisClear = false;
						}
					}
				if($(this).attr("id")=="b0")
					{
						if($screenisClear)
							return;
						if(!$equal){
							setScreen("0");
							setValues(0);
						}
					}
				if($(this).attr("id")=="b1")
					{
						if(!$equal){
							setScreen("1");
							setValues(1);
						}
					}
				if($(this).attr("id")=="b2")
					{
						if(!$equal){
							setScreen("2");
							setValues(2);
						}
						
					}
				if($(this).attr("id")=="b3")
					{
						if(!$equal){
							setScreen("3");
							setValues(3);
						}
					}
				if($(this).attr("id")=="b4")
					{
						if(!$equal){
							setScreen("4");
							setValues(4);
						}
					}
				if($(this).attr("id")=="b5")
					{
						if(!$equal){
							setScreen("5");
							setValues(5);
						}
					}
				if($(this).attr("id")=="b6")
					{
						if(!$equal){
							setScreen("6");
							setValues(6);
						}
					}
				if($(this).attr("id")=="b7")
					{
						if(!$equal){
							setScreen("7");
							setValues(7);
						}
					}
				if($(this).attr("id")=="b8")
					{
						if(!$equal){
							setScreen("8");
							setValues(8);
						}					
					}
				if($(this).attr("id")=="b9")
					{
						if(!$equal){
							setScreen("9");
							setValues(9);
						}
						
					}
				if($(this).attr("id")=="CE")
					{
						clear();
						$value = false;
						$equal = false;
						$screen.val("0");
						$screenisClear = true;
						
					}
				if($(this).attr("id")=="point")
					{
						
							
						if($dotpressed){
							return;
						}
							
						if($screenisClear)
							setScreen("0.");
						else
							setScreen(".");
						
						$dotpressed = true;
								
						
					}
			});
			function clear(){
				$point = false;
				$firstValue = 0;
				$secondValue = 0;
			}
			function operate(){
				$clearScreen = true;
				switch ($operation){
						case("+"):
							return (parseFloat($firstValue) + parseFloat($secondValue));
						case("-"):
							return (parseFloat($firstValue) - parseFloat($secondValue));
						case("x"):
							return (parseFloat($firstValue) * parseFloat($secondValue));
						case("/"):
							if($secondValue == 0)
								return ("division by zero");
							else
								return (parseFloat($firstValue) / parseFloat($secondValue));
				}
					
			}
			function setScreen($input){
				if($screenisClear){
					$screen.val("");
					$screenisClear = false;
				}
				
					
				
				if($clearScreen)
					$screen.val($input);
			
				else
					$screen.val($screen.val() + $input);
			}
			function setValues($input){
				
				
				$clearScreen = false;
				if($dotpressed){
					$point++;
				}
					
				if(!$value){
					if(!$dotpressed)
						$firstValue = $firstValue * 10 + $input;
					else
						$firstValue = parseFloat($firstValue) + parseFloat($input / Math.pow(10 , $point)) ;
				}
				else{
					if(!$dotpressed)
						$secondValue = $secondValue * 10 + $input;
					else
						$secondValue = parseFloat($secondValue) + parseFloat($input / Math.pow(10 , $point )) ;
				}
				
					
			}
		  
});
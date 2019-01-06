function convert_to_word(num, ignore_ten_plus_check) {

	var ones = [];
	var tens = [];
	var ten_plus = [];
	ones["1"] = "one";
	ones["2"] = "two";
	ones["3"] = "three";
	ones["4"] = "four";
	ones["5"] = "five";
	ones["6"] = "six";
	ones["7"] = "seven";
	ones["8"] = "eight";
	ones["9"] = "nine";

	ten_plus["10"] = "ten";
	ten_plus["11"] = "eleven";
	ten_plus["12"] = "twelve";
	ten_plus["13"] = "thirteen";
	ten_plus["14"] = "fourteen";
	ten_plus["15"] = "fifteen";
	ten_plus["16"] = "sixteen";
	ten_plus["17"] = "seventeen";
	ten_plus["18"] = "eighteen";
	ten_plus["19"] = "nineteen";

	tens["1"] = "ten";
	tens["2"] = "twenty";
	tens["3"] = "thirty";
	tens["4"] = "fourty";
	tens["5"] = "fifty";
	tens["6"] = "sixty";
	tens["7"] = "seventy";
	tens["8"] = "eighty";
	tens["9"] = "ninety";	

	var len = num.length;
    
	if(ignore_ten_plus_check != true && len >= 2) {
    	var ten_pos = num.slice(len - 2, len - 1);
		if(ten_pos == "1") {
			return ten_plus[num.slice(len - 2, len)];
		} else if(ten_pos != 0) {
			var one_ = ones[num.slice(len - 1, len)];
            	var ten_ = tens[num.slice(len - 2, len - 1)]
                return  (ten_ != undefined ? ten_ : "") + " " + (one_ != undefined ? one_ : "");
        }
	}
	
    return ones[num.slice(len - 1, len)];
    
}

function get_rupees_in_words(str, recursive_call_count) {
  if(recursive_call_count > 1) {
    	return "conversion is not feasible";
    }
	var len = str.length;
	var ten_plus = convert_to_word(str, false);
        var words = ten_plus != undefined ?  ten_plus : "";
        if ((len == 2 || len == 1)  && ten_plus != undefined) {
            if (recursive_call_count == 0) {
                words = words + " rupees";
            }
            return words;
        }
        if (recursive_call_count == 0) {
        	if(ten_plus != undefined) {
            	words = " and " + words + " rupees";
            } else {
            	words = words + " rupees";
            }
        }
    
    var hundred = convert_to_word(str.slice(0, len-2), true);
  words = hundred != undefined ? hundred + " hundred " + words : words;
    if(len == 3) {
    	return words;
    }
    
    var thousand = convert_to_word(str.slice(0, len-3), false);
	words = thousand != undefined ? thousand  + " thousand " + words : words;
    if(len <= 5) {
    	return words;
    }
    
    var lakh = convert_to_word(str.slice(0, len-5), false);
    words =  lakh != undefined ? lakh + " lakh " + words : words;
    if(len <= 7) {
    	return words;
    }
    
    recursive_call_count = recursive_call_count + 1;
    return get_rupees_in_words(str.slice(0, len-7), recursive_call_count) + " crore " + words;
}

function printLandscape() {
  var css = '@page { size: landscape; }',
    head = document.head || document.getElementsByTagName('head')[0],
    style = document.createElement('style');

  style.type = 'text/css';
  style.media = 'print';

  if (style.styleSheet){
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }

  head.appendChild(style);

  window.print();

}
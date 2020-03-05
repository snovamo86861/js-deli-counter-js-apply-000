
  
var katzDeli = [];

function currentLine(line){
  if(!line.length) {
    return "The line is currently empty.";
  }
  var lineNamesandNumbers = [];
  
  for(var i=0; i<line.length; i++) {
    lineNamesandNumbers.push(i+1 + ". "+ line[i]);
  }
  console.log("The line is currently: " + lineNamesandNumbers)
  return "The line is currently: " + lineNamesandNumbers.join(', ');
}

function nowServing(lineArr){
  if (lineArr.length === 0){
    return "There is nobody waiting to be served!"
  }
  var first = lineArr[0]
  lineArr.shift()
  return "Currently serving " + first + "."
}


function takeANumber(line, name){
  line.push(name);
  
  console.log("Welcome, " + name + ". You are number " + line.length + " in line.");
  
  return "Welcome, " + name + ". You are number " + line.length + " in line."
}
//set customer account 
// everything the fuction gets call increase the custmer count by 1 i++
// return string  "Welcome your order number is ['.'] length

var customer = 0;
function takeANumber2(){
  console.log(customer ++);
return "Welcome your order number is ['.'] " + customer

}

console.log(takeANumber2())
console.log(takeANumber2())
console.log(takeANumber2())




takeANumber(katzDeli, "Ada")
takeANumber(katzDeli, "Grace")
takeANumber(katzDeli, "Kent")
currentLine(katzDeli);
nowServing(katzDeli);
takeANumber(katzDeli, "Matz"); 
currentLine(katzDeli); 
nowServing(katzDeli);
currentLine(katzDeli)
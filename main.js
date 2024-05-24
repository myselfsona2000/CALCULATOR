let outputScreen = document.getElementById("output-screen");
//display function
function  display(num){
    outputScreen.value += num;
}
//calculate function
function calculate(){
    try{
        outputScreen.value = eval(outputScreen.value);

    }
    catch(error){
        alert("Invalid value")
    }
}
//clear function
function clear(){
    outputScreen.value = outputScreen.value.clear(0);
}
//delete/del function
function del(){
    outputScreen.value = outputScreen.value.slice(0,-1);
}
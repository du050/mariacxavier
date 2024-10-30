function clearScreen()
{
    document.getElementById("result").value = "";
}

function deleteLast()
{
    let current = document.getElementById("result").value;
    document.getElementById("result").value = current.slice(0,-1);
}

function inputValue(input) 
{
    document.getElementById("result").value += input;

}

function calculateResult()
{
   try 
   {
    let result = eval(document.getElementById("result").value);
    document.getElementById("result").value = result 
   }
   catch(error)
   {
    alert("Invalid expression");
   }
}
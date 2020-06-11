


//always declare function with capital letter
//Will only get elements when you call the function CalculateTotal

function CalculateTotal() {
  var totalAmount = document.getElementById("total")
  var totalPeople = document.getElementById("people")
  var Percent = document.getElementById("tip_Percent")
  var Custom = document.getElementById("tip_Custom")
  var Result = document.getElementById("Per_Person")

  //if percent is empty then use custom, else use percent
  //!= means not equal to
  if(Percent.value != "" && Custom.value != "") {
    Swal.fire('Please only select one tip method')
    Percent.value = ""
    Custom.value = ""
  } 
  else {
    if(Percent.value == "") {
      var total = (Number(totalAmount.value) + Number(Custom.value))/Number(totalPeople.value)
      Result.innerHTML = total
    }
    else {
      var total = (Number(totalAmount.value) + (Number(totalAmount.value) * (Number(Percent.value)/100)))/ Number(totalPeople.value)
      Result.innerHTML = total
    }
  }
  //innerHtml, set to the total --> change 0 to result
}

function ClearFields() {
  var totalAmount = document.getElementById("total")
  var totalPeople = document.getElementById("people")
  var Percent = document.getElementById("tip_Percent")
  var Custom = document.getElementById("tip_Custom")
  var Result = document.getElementById("Per_Person")

  totalAmount.value = ""
  totalPeople.value = ""
  Percent.value = ""
  Custom.value = ""
  Result.innerHTML  = "0"

}




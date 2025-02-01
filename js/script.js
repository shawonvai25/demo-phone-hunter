
const loadAllPhones= async(status) =>{
  console.log("wow 3 seconds gone")
  document.getElementById("spinner").style.display = "none";

  // fetch(`https://openapi.programming-hero.com/api/phones?search=iphone`)
  // .then(res => res.json())
  // .then(data => console.log(data))

  const response = await fetch(`https://openapi.programming-hero.com/api/phones?search=iphone`);
  
  const data = await response.json();

  if(status){
    displayAllPhone(data.data)
  }
  else{
    displayAllPhone(data.data.slice(0,6))
  }

  


}




const displayAllPhone = (phones) => {
  console.log(phones)

}

const handleShowAll = () => {
  loadAllPhones(true)
}





const handleSearch = () =>{
   
  document.getElementById("spinner").style.display = "block";

   setTimeout(function (){
     loadAllPhones()
   },3000)


}


loadAllPhones();






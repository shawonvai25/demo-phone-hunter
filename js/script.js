



const loadAllPhones= async(status,searchText) =>{
  console.log(searchText);
  document.getElementById("spinner").style.display='none';

  // fetch(`https://openapi.programming-hero.com/api/phones?search=iphone`)
  // .then(res => res.json())
  // .then(data => console.log(data))

  const response = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText?searchText:"iphone"}`);
  
  const data = await response.json();

  if(searchText.length == 0)

  if(status){
    displayAllPhone(data.data)

  }
  else{
    displayAllPhone(data.data.slice(0,6))
  }
  


}



const handleSearch = () =>{   
  document.getElementById("spinner").style.display="block";
  console.log(document.getElementById("spinner").innerText)
  const searchText = document.getElementById("searchBox").value;
  
   setTimeout(function (){
     loadAllPhones(false,searchText)
   },3000)


}



const displayAllPhone = (phones) => {
  
  document.getElementById("phones-container").innerHTML = "";

  const phoneContainer = document.getElementById("phones-container");
   phones.forEach(phone => {
   const {brand, phone_name, slug, image} = phone;
   const div = document.createElement("div");
   div.innerHTML = `
   <div class="card bg-base-100 m-2 w-96 shadow-xl">
  <figure class="px-10 pt-10">
    <img
      src=${image}
      alt="Shoes"
      class="rounded-xl" />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title">${brand}</h2>
    <p>${slug}</p>
    <div class="card-actions">
      <button onclick="phoneDetails('${slug}')" class="btn btn-primary">Show Details</button>
    </div>
  </div>
</div>
   `;

   phoneContainer.append(div);
   });
 
}







const phoneDetails = async (slugs) => {
 const response = await  fetch(`https://openapi.programming-hero.com/api/phone/${slugs}`);
 const data = await response.json();
 console.log(data.data)

 const {brand, image, slug} = data.data;

 const modalContainer = document.getElementById("modal-container");
 modalContainer.innerHTML = `
 <dialog id="my_modal_1" class="modal">
          <div class="modal-box">
            <h3 class="text-lg font-bold">${brand}</h3>
            <p class="py-4">Press ESC key or click the button below to close</p>
            <div class="modal-action">
              <form method="dialog">
                <!-- if there is a button in form, it will close the modal -->
                <button class="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
 `

 my_modal_1.showModal();
}

const handleShowAll = () => {
  const searchText = document.getElementById("searchBox").value;
  loadAllPhones(true,searchText)
}






loadAllPhones(false,"iphone");






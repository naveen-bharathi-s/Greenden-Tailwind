let sidenav = document.getElementById("sidenav")
let menuicon = document.getElementById("menuicon")
let closenav = document.getElementById("close-nav")

menuicon.addEventListener("click", function(){
    sidenav.style.right=0
})

closenav.addEventListener("click", function(){
    sidenav.style.right = "-50%"
})


// search field
   let productContainer = document.getElementById("product-container")
   let search = document.getElementById("search")
   let productList = productContainer.querySelectorAll("div")

    // console.log(productList)

    search.addEventListener("keyup", function(){
        let enteredValue = event.target.value.toUpperCase()
        // console.log(enterValue)

        for(count=0; count<productList.length; count++){

            let productname = productList[count].querySelector("h1").textContent

            if(productname.toUpperCase().indexOf(enteredValue)<0){
                productList[count].style.display="none"
            }else{
                productList[count].style.display="block"
            }
        }
        
    }) 

const press = ()=>{
    var randomX = Math.floor(Math.random()*6)+1
    var image = document.querySelector("#imageId")
    var headingEle = document.getElementById("declaration") 
    switch(randomX){
        case 1 : image.setAttribute("src","images/image.1.png")
                 headingEle.innerHTML = (" small number" )  
                 break
        case 2 : image.setAttribute("src","images/image.2.png")
                 headingEle.innerHTML = "One more time"   
                 break          
        case 3 : image.setAttribute("src","images/image.3.png")
                 headingEle.innerHTML = "average"   
                 break
        case 4 : image.setAttribute("src","images/image.4.png")
                 headingEle.innerHTML = "good"   
                 break                 
        case 5 : image.setAttribute("src","images/image.5.png")
                 headingEle.innerHTML = "Too close!!!"   
                 break
        case 6 : image.setAttribute("src","images/image.6.png")
                 headingEle.innerHTML = "Mauj Kardi Bete!!!"   
                 break
        default: headingEle.innerHTML = "Something wrong happened"            
    }
}

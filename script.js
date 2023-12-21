function openPopup() {
    let popup = document.getElementById("popup");
    popup.style.display = "block";
}

function closePopup() {
    let popup = document.getElementById("popup");
    popup.style.display = "none";
}

/*   window.onload = () => { 
    replaceImage()
    window.addEventListener('resize', replaceImage);
  } */



function windowSize(){
    if ( screen.width < 600) {     
        console.log("1")
        const secondImage= document.getElementById("bank-img-2");
        let img = document.createElement("img");
        img.src= "photos/swiss-banking.jpg";
        img.id= "replaced-img"
        img.style.marginBottom = "40px"
        const newElement= document.getElementById("img-place");
        newElement.append(img);
        document.getElementById("replaced-img").style.maxWidth = "100%";
        secondImage.style.display = "none";
    }
    else {
        console.log("2")
    }
}


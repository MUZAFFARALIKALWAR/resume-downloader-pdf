 
  function addNewfeild(){
    
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control")
    newNode.classList.add("wefeild")
    newNode.classList.add("col")
    newNode.style.marginTop = "10px";
    newNode.style.marginBottom = "5px";
    newNode.style.padding = "10px";
    newNode.style.borderRadius = "7px";
    newNode.style.fontSize = "16px";
    newNode.setAttribute("rows",5)  
    newNode.setAttribute("placeholder","Enter Here")
    
    let we = document.getElementById("we")
    let weaddbtn = document.getElementById("wrkadbtn")
  
    we.insertBefore(newNode,weaddbtn)
  }
  
  function addNewskl(){
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control")
    newNode.classList.add("sklfeild")
    newNode.classList.add("col")
    newNode.style.marginTop = "10px";
    newNode.style.marginBottom = "5px";
    newNode.style.padding = "10px";
    newNode.style.borderRadius = "7px";
    newNode.style.fontSize = "16px";
    newNode.setAttribute("rows",5) 
    newNode.setAttribute("placeholder","Enter Here")
    
    let skl = document.getElementById("skl")
    let skladbtn = document.getElementById("skladbtn")
  
    skl.insertBefore(newNode,skladbtn);
  }
  
  function addNewedu(){
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control")
    newNode.classList.add("edufeild")
    newNode.classList.add("col")
    newNode.style.marginTop = "10px";
    newNode.style.marginBottom = "5px";
    newNode.style.padding = "10px";
    newNode.style.borderRadius = "7px";
    newNode.style.fontSize = "16px";
    newNode.setAttribute("rows",5) 
    newNode.setAttribute("placeholder","Enter Here")
    
    let edu = document.getElementById("edu")
    let eduaddbtn = document.getElementById("eduaddbtn")
  
    edu.insertBefore(newNode,eduaddbtn);
  }
  
  function addNewpro(){
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control")
    newNode.classList.add("profeild")
    newNode.classList.add("col")
    newNode.style.marginTop = "10px";
    newNode.style.marginBottom = "5px";
    newNode.style.padding = "10px";
    newNode.style.borderRadius = "7px";
    newNode.style.fontSize = "16px";
    newNode.setAttribute("rows",5) 
    newNode.setAttribute("placeholder","Enter Here")
    
    let pro = document.getElementById("pro")
    let proaddbtn = document.getElementById("proaddbtn")
  
    pro.insertBefore(newNode,proaddbtn);
  }
  
  function addNewlng(){
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control")
    newNode.classList.add("lngfeild")
    newNode.classList.add("col")
    newNode.style.marginTop = "10px";
    newNode.style.marginBottom = "5px";
    newNode.style.padding = "10px";
    newNode.style.borderRadius = "7px";
    newNode.style.fontSize = "16px";
    newNode.setAttribute("rows",5) 
    newNode.setAttribute("placeholder","Enter Here")
    
    let lng = document.getElementById("lng")
    let lngaddbtn = document.getElementById("lngaddbtn")
  
    lng.insertBefore(newNode,lngaddbtn);
  }
//LAB 1-1: SIMPLE ROUTING WITH THE LOCATION OBJECT

var outBox = document.getElementById("output");
var pageTitle = document.getElementById("pageTitle");
//#### CONTENT FOR HOME PAGE ==== - BACKGROUND IS white
var contentHome = "<h3>Welcome to our website!</h3>";
contentHome += "<p>We have many wonderful products that you might be interested in.</p>";
//==== END OF CONTENT FOR HOME PAGE ####

//#### CONTENT FOR PRODUCTS PAGE ====  - BACKGROUND IS red
var contentProducts = "<h3>Our Top 5 Products</h3>";
contentProducts += "<ol><li>Computers</li><li>Hard Drives</li><li>USB Drives</li><li>Backup Drives</li><li>Printers</li></ol>";
//==== END OF CONTENT FOR PRODUCTS PAGE #### 

//#### CONTENT FOR ABOUT US PAGE ==== - BACKGROUND IS green
var contentAbout = "<h3>About Computer Corp</h3>";
contentAbout += "<p>We have been around a long time, so we know what we're doing.</p>";
contentAbout += "<p><h4>Customer Feedback</h4><q>You're the only computer company I trust</q>&mdash;Ernst Blofeld</p>";
//==== END OF CONTENT FOR ABOUT US PAGE ####

if(location.search == "?home"){
    outBox.innerHTML = contentHome;
    outBox.style.background = "Red";
    outBox.style.padding = "20px";
    pageTitle.innerText = "Home";
}else if(location.search == "?products"){
    outBox.innerHTML = contentProducts;
    outBox.style.background = "Orange";
    outBox.style.padding = "20px";
    pageTitle.innerText = "Products";
}else if(location.search == "?about"){
    outBox.innerHTML = contentAbout;
    outBox.style.background = "Green";
    outBox.style.padding = "20px";
    pageTitle.innerText = "About";
}
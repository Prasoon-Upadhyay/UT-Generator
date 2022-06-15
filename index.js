// document.querySelector(".mayank").innerHTML += "<p class = 'pras'>Prasoon</p>";
// console.log(document.querySelector(".pras").innerHTML);
var leftWingList = ["Neymar Jr.","Sadio Mane","Raheem Sterling","Lorenze Insigne","Eden Hazard","Heung Min-Son","Jack Grealish"];
var rightWingList = ["Lionel Messi","Mohamed Salah","Angel Di Maria","Jaden Sancho","Leroy Sane"];
var strikerList = ["Cristiano Ronaldo","Robert Lewandowski","Harry Kane","Romelu Lukaku","Kylian Mbappe","Karim Benzema","Luis Suarez"];
var centreMidList = ["Kevin de Bruyne","Toni Kroos","Paul Pogba","Marco Verrati","Frenkie de Jong","Leon Goretzka","Thiago","Marcos Llorente","Luka Modric"];
var centralDefList =["NGolo Kante", "Joshua Kimmich","Casemiro"];
var centralAtkList = ["Bruno Fernandes","Thomas Muller","Bernardo Silva"];
var centreBackList = ["Thiago Silva","Virgil Van Djik","Sergio Ramos","Marquinhos","Ruben Dias","Giorgio Chiellini","Raphael Varane","Kalidou Koulibaly","Aymeric Laporte","Mats Hummels"];
var leftBackList = ["Andrew Robertson","Christian Gunter","Jordi Alba","Theo Hernandez","Guerreiro"];
var rightBackList = ["Trent Alexander-Arnold","Joao Cancelo","Carvajal","Kyle Walker","Achraf Hakimi","Kieran Trippier"];
var goalKeeperList = ["Manuel Neuer","David De Gea","Jan Oblak","Ter Stegen","Donnarumma","Ederson","Thibaut Courtois","Hugo Lloris"];

var overallNinety = ["Lionel Messi","Cristiano Ronaldo","Kylian Mbappe","Neymar Jr.","Kevin de Bruyne","NGolo Kante","Virgil Van Djik","Robert Lewandowski"]

function goalKeeperAlloter(name)
{
    var randomNum = Math.floor(Math.random() * goalKeeperList.length);
    document.querySelector(".cb-"+name).innerHTML += "<p>" + "GK- " + goalKeeperList[randomNum] + "</p>";
    document.querySelector("img").setAttribute("src","images/" + goalKeeperList[randomNum] + ".jpg");
    document.querySelector("h4").innerText = goalKeeperList[randomNum] ;
    if(overallNinety.includes(goalKeeperList[randomNum]))
    {
        var elementNinety  = document.querySelectorAll(".cb-"+name+" p");
        elementNinety[elementNinety.length-1].classList.add("overall90");
    }
    else
    {
        var elementNinety  = document.querySelectorAll(".cb-"+name+" p");
        elementNinety[elementNinety.length-1].classList.add("goalkeeper");
    }
    goalKeeperList.splice(randomNum,1);
}

function leftBackAlloter(name)
{
    var randomNum = Math.floor(Math.random() * leftBackList.length);
    document.querySelector(".cb-"+name).innerHTML += "<p>" + "LB- " + leftBackList[randomNum] + "</p>";
    document.querySelector("img").setAttribute("src","images/" + leftBackList[randomNum] + ".jpg");
    document.querySelector("h4").innerText = leftBackList[randomNum] ;
    if(overallNinety.includes(leftBackList[randomNum]))
    {
        var elementNinety  = document.querySelectorAll(".cb-"+name+" p");
        elementNinety[elementNinety.length-1].classList.add("overall90");
    }
    else
    {
        var elementNinety  = document.querySelectorAll(".cb-"+name+" p");
        elementNinety[elementNinety.length-1].classList.add("defender");
    }
    leftBackList.splice(randomNum,1);
}

function centreBackAlloter(name,num)
{
    var randomNum = Math.floor(Math.random() * centreBackList.length);
    document.querySelector(".cb-"+ name).innerHTML += "<p>CB- " + centreBackList[randomNum] + "</p>";
    document.querySelector("img").setAttribute("src","images/" + centreBackList[randomNum] + ".jpg");
    document.querySelector("h4").innerText = centreBackList[randomNum] ;
    if(overallNinety.includes(centreBackList[randomNum]))
    {
        var elementNinety  = document.querySelectorAll(".cb-"+name+" p");
        elementNinety[num].classList.add("overall90");
    }
    else
    {
        var elementNinety  = document.querySelectorAll(".cb-"+name+" p");
        elementNinety[num].classList.add("defender");
    }

    centreBackList.splice(randomNum,1);
    

}

function rightBackAlloter(name)
{
    var randomNum = Math.floor(Math.random() * rightBackList.length);
    document.querySelector(".cb-"+ name).innerHTML += "<p>" + "RB- " + rightBackList[randomNum] + "</p>";
    document.querySelector("img").setAttribute("src","images/" + rightBackList[randomNum] + ".jpg");
    document.querySelector("h4").innerText = rightBackList[randomNum] ;
    if(overallNinety.includes(rightBackList[randomNum]))
    {
        var elementNinety  = document.querySelectorAll(".cb-"+name+" p");
        elementNinety[elementNinety.length-1].classList.add("overall90");
    }
    else
    {
        var elementNinety  = document.querySelectorAll(".cb-"+name+" p");
        elementNinety[elementNinety.length-1].classList.add("defender");
    }
    rightBackList.splice(randomNum,1);
}

function centreDefAlloter(name)
{
    var randomNum = Math.floor(Math.random() * centralDefList.length);
    document.querySelector(".cb-"+ name).innerHTML += "<p>" + "CDM- " + centralDefList[randomNum] + "</p>";
    document.querySelector("img").setAttribute("src","images/" + centralDefList[randomNum] + ".jpg");
    document.querySelector("h4").innerText = centralDefList[randomNum] ;
    if(overallNinety.includes(centralDefList[randomNum]))
    {
        var elementNinety  = document.querySelectorAll(".cb-"+name+" p");
        elementNinety[elementNinety.length-1].classList.add("overall90");
    }
    else
    {
        var elementNinety  = document.querySelectorAll(".cb-"+name+" p");
        elementNinety[elementNinety.length-1].classList.add("midfield");

    }
    centralDefList.splice(randomNum,1);
}

function centralAtkAlloter(name)
{
    var randomNum = Math.floor(Math.random() * centralAtkList.length);
    document.querySelector(".cb-"+ name).innerHTML += "<p>" + "CAM- " + centralAtkList[randomNum] + "</p>";
    document.querySelector("img").setAttribute("src","images/" + centralAtkList[randomNum] + ".jpg");
    document.querySelector("h4").innerText = centralAtkList[randomNum] ;
    if(overallNinety.includes(centralAtkList[randomNum]))
    {
        var elementNinety  = document.querySelectorAll(".cb-"+name+" p");
        elementNinety[elementNinety.length-1].classList.add("overall90");
    }    
    else
    {
        var elementNinety  = document.querySelectorAll(".cb-"+name+" p");
        elementNinety[elementNinety.length-1].classList.add("midfield");

    }
    centralAtkList.splice(randomNum,1);
}

function centreMidAlloter(name)
{
    var randomNum = Math.floor(Math.random() * centreMidList.length);
    document.querySelector(".cb-"+ name).innerHTML += "<p>" + "CM- " + centreMidList[randomNum] + "</p>";
    document.querySelector("img").setAttribute("src","images/" + centreMidList[randomNum] + ".jpg");
    document.querySelector("h4").innerText = centreMidList[randomNum] ;
    if(overallNinety.includes(centreMidList[randomNum]))
    {
        var elementNinety  = document.querySelectorAll(".cb-"+name+" p");
        elementNinety[elementNinety.length-1].classList.add("overall90");    
    }
    else
    {
        var elementNinety  = document.querySelectorAll(".cb-"+name+" p");
        elementNinety[elementNinety.length-1].classList.add("midfield");

    }
    centreMidList.splice(randomNum,1);   
}

function leftWingAlloter(name)
{
    var randomNum = Math.floor(Math.random() * leftWingList.length);
    document.querySelector(".cb-"+ name).innerHTML += "<p>" + "LW- " + leftWingList[randomNum] + "</p>";
    document.querySelector("img").setAttribute("src","images/" + leftWingList[randomNum] + ".jpg");
    document.querySelector("h4").innerText = leftWingList[randomNum] ;
    if(overallNinety.includes(leftWingList[randomNum]))
    {
        var elementNinety  = document.querySelectorAll(".cb-"+name+" p");
        elementNinety[elementNinety.length-1].classList.add("overall90");
    }
    else
    {
        var elementNinety  = document.querySelectorAll(".cb-"+name+" p");
        elementNinety[elementNinety.length-1].classList.add("wing");

    }
    leftWingList.splice(randomNum,1);
}

function rightWingAlloter(name)
{
    var randomNum = Math.floor(Math.random() * rightWingList.length);
    document.querySelector(".cb-"+ name).innerHTML += "<p>" + "RW- " + rightWingList[randomNum] + "</p>";
    document.querySelector("img").setAttribute("src","images/" + rightWingList[randomNum] + ".jpg");
    document.querySelector("h4").innerText = rightWingList[randomNum] ;
    if(overallNinety.includes(rightWingList[randomNum]))
    {
        var elementNinety  = document.querySelectorAll(".cb-"+name+" p");
        elementNinety[elementNinety.length-1].classList.add("overall90");
    }
    else
    {
        var elementNinety  = document.querySelectorAll(".cb-"+name+" p");
        elementNinety[elementNinety.length-1].classList.add("wing");

    }
    rightWingList.splice(randomNum,1);

}

function strikerAlloter(name)
{
    var randomNum = Math.floor(Math.random() * strikerList.length);
    document.querySelector(".cb-"+ name).innerHTML += "<p>" + "ST- " + strikerList[randomNum] + "</p>";
    document.querySelector("img").setAttribute("src","images/" + strikerList[randomNum] + ".jpg");
    document.querySelector("h4").innerText = strikerList[randomNum] ;
    if(overallNinety.includes(strikerList[randomNum]))
    {
        var elementNinety  = document.querySelectorAll(".cb-"+name+" p");
        elementNinety[elementNinety.length-1].classList.add("overall90");
    }
    else
    {
        var elementNinety  = document.querySelectorAll(".cb-"+name+" p");
        elementNinety[elementNinety.length-1].classList.add("wing");
    }
    strikerList.splice(randomNum,1);
}

function playerAlloter()
{
    document.querySelector("button").disabled = true;
    leftBackAlloter("mayank");
    setTimeout(leftBackAlloter,5000,"aadit");
    setTimeout(leftBackAlloter,8000,"ak");

    setTimeout(centreBackAlloter,11000,"mayank",1);
    setTimeout(centreBackAlloter,14000,"aadit",1);
    setTimeout(centreBackAlloter,17000,"ak",1);

    setTimeout(centreBackAlloter,20000,"mayank",2);
    setTimeout(centreBackAlloter,23000,"aadit",2);
    setTimeout(centreBackAlloter,26000,"ak",2);

    setTimeout(rightBackAlloter,29000,"mayank");
    setTimeout(rightBackAlloter,32000,"aadit");
    setTimeout(rightBackAlloter,35000,"ak");


    setTimeout(centreDefAlloter,38000,"mayank");
    setTimeout(centralAtkAlloter,44000,"aadit");
    setTimeout(centreDefAlloter,41000,"ak");
    
    setTimeout(centreMidAlloter,47000,"mayank");
    setTimeout(centreMidAlloter,50000,"aadit");
    setTimeout(centreMidAlloter,53000,"ak");

    setTimeout(centreMidAlloter,56000,"mayank");
    setTimeout(centreMidAlloter,59000,"aadit");
    setTimeout(centreMidAlloter,62000,"ak");
    
    setTimeout(leftWingAlloter,65000,"mayank");
    setTimeout(leftWingAlloter,68000,"aadit");
    setTimeout(leftWingAlloter,71000,"ak");

    setTimeout(strikerAlloter,74000,"mayank");
    setTimeout(strikerAlloter,77000,"aadit");
    setTimeout(strikerAlloter,80000,"ak");

    setTimeout(rightWingAlloter,83000,"mayank");
    setTimeout(rightWingAlloter,86000,"aadit");
    setTimeout(rightWingAlloter,89000,"ak");
     
    setTimeout(goalKeeperAlloter,92000,"mayank");
    setTimeout(goalKeeperAlloter,95000,"aadit");
    setTimeout(goalKeeperAlloter,98000,"ak");

}


document.querySelector(".choose-btn").addEventListener("click",playerAlloter);

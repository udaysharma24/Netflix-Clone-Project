let button1=document.getElementById("faq1");
button1.addEventListener("click",()=>{
    if(!button1.querySelector("p"))
    {
        let p1=document.createElement('p');
        document.getElementById("faq1").appendChild(p1);
        p1.textContent="Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.\nYou can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!";
    }
    else if(button1.querySelector("p"))
        button1.removeChild(button1.querySelector("p"));
})
let button2=document.getElementById("faq2");
button2.addEventListener("click",()=>{
    if(!button2.querySelector("p"))
    {
        let p2=document.createElement('p');
        p2.textContent="Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts.";
        document.getElementById("faq2").appendChild(p2);
    }
    else if(button2.querySelector("p"))
        button2.removeChild(button2.querySelector("p"));
})
let button3=document.getElementById("faq3");
button3.addEventListener("click",()=>{
    if(!button3.querySelector("p"))
    {
        let p3=document.createElement('p');
        p3.textContent="Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.\nYou can also download your favourite shows with the iOS or Android app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.";
        document.getElementById("faq3").appendChild(p3);
    }
    else if(button3.querySelector("p"))
        button3.removeChild(button3.querySelector("p"));
})
let button4=document.getElementById("faq4");
button4.addEventListener("click",()=>{
    if(!button4.querySelector("p"))
    {
        let p4=document.createElement('p');
        p4.textContent="Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.";
        document.getElementById("faq4").appendChild(p4);
    }
    else if(button4.querySelector("p"))
        button4.removeChild(button4.querySelector("p"));
})
let button5=document.getElementById("faq5");
button5.addEventListener("click",()=>{
    if(!button5.querySelector("p"))
    {
        let p5=document.createElement('p');
        p5.textContent="Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.";
        document.getElementById("faq5").appendChild(p5);
    }
    else if(button5.querySelector("p"))
        button5.removeChild(button5.querySelector("p"));
})
let button6=document.getElementById("faq6");
button6.addEventListener("click",()=>{
    if(!button6.querySelector("p"))
    {
        let p6=document.createElement('p');
        p6.textContent="The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.\nKids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.";
        document.getElementById("faq6").appendChild(p6);
    }
    else if(button6.querySelector("p"))
        button6.removeChild(button6.querySelector("p"));
})

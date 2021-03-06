//namespace object
const joe = {};

    joe.init=()=>{
        joe.burgerMenu=document.querySelector('.burger-menu-button'); 
        joe.slideOutMenu=document.querySelector('.slide-out-menu');
        joe.links = document.querySelectorAll('nav li a');
        joe.clicked=true;
        joe.curtainFunction();
        joe.dominoMF();
        joe.showModal();
        joe.scrollTrigger();
       
    }

    joe.curtainFunction=()=>{
    
        // Function to remove "curtains" and display h2 'front end developer'
        setTimeout(()=>{
            const line1 = document.querySelector('.line1');
            const line2 = document.querySelector('.line2');
            const slideInHeading=document.querySelector('header h2');
            line1.style.visibility="hidden";
            line2.style.visibility="hidden";
            slideInHeading.style.left="0";
            joe.getBurger();
       },1200);
     }
    
    
    joe.getBurger=()=>{
            joe.burgerMenu.style.opacity="1";
        }

    joe.displayMenu=()=>{
       
        if(window.innerWidth>=767){

            joe.slideOutMenu.style.transitionDelay= '.3s';
            joe.slideOutMenu.style.height= '12vh';
            joe.slideOutMenu.style.top= '1px';
            joe.slideOutMenu.style.right= '0px';
        }

        // Full screen slide out
        else if (window.innerWidth<767){
            joe.slideOutMenu.style.transitionDelay= '.3s';
            joe.slideOutMenu.style.height= '100vh';
            joe.slideOutMenu.style.top= '1px';
            joe.slideOutMenu.style.right= '0px';
        }
        joe.clicked=false;
        joe.anchorChange();
        joe.anchorClick();
      

    }

    joe.anchorClick = ()=>{
        joe.links.forEach(item =>{
            item.addEventListener('click', ()=>{
                joe.closeMenu();
            })
        })
    }

    joe.closeMenu = () =>{
        const top = document.querySelector('.o');
        const middle = document.querySelector('.b');
        const bottom = document.querySelector('.d');
        middle.style.transform="revert";
        top.style.transform="revert";
        bottom.style.transform="revert";
        joe.slideOutMenu.style.height= '0';
        joe.slideOutMenu.style.top= '-50px';
        joe.clicked=true;

    }

    // Slide out menu

    joe.dominoMF=()=>{
        // Decalre a variable to keep track of menu open/close status
       

        // Add an event listner to the burger menu class
        joe.burgerMenu.addEventListener('click', ()=>{

        // Select the individual burger menu divs and the slide out menu
            const top = document.querySelector('.o');
            const middle = document.querySelector('.b');
            const bottom = document.querySelector('.d');
        
                
                // If true - open slide out menu
                if(joe.clicked===true){
        
                // Domino effect on hamburger menu
                    top.style.transform="rotate(-75deg) translateX(-5px) translateY(5px)";
                    middle.style.transitionDelay=".1s";
                    middle.style.transform="rotate(-80deg) translateX(-5px) translateY(5px)";
                    bottom.style.transitionDelay=".2s";
                    bottom.style.transform="rotate(-90deg) translateX(-5px) translateY(5px)";

                   
                    joe.displayMenu();
                }

                // If false, menu slides out
                else{
                  
                    joe.closeMenu();
                  
                }
            })
        }

    joe.scrollTrigger = ()=>{
        // Variable to represent the height of the screen
        // const scrollOffset = 100;
        // Select all elements with class of js-scroll - these elements will transition in when scroll event is triggered
        const scrollElement = document.querySelectorAll(".js-scroll");
          // Add event throttling so the scroll event aren't bouncy
        // Add event listner onto window, which will call the event handler function 
        let scrolling = false;
        window.addEventListener('scroll', () => {
            // handleScrollAnimation();
            scrolling = true;
        });


        setInterval(() => {
            if (scrolling) {
                scrolling = false;
                handleScrollAnimation();
            }
        },300);
        
        // Function that checks if the element is in view
        const elementInView = (el) => {
            
            // Find the height between the element and the top of the screen
            const elementTop = el.getBoundingClientRect().top;
            
            // Return true if the element is less than the height between the element and the screen
            // return (elementTop < window.innerHeight);
            return ((elementTop - window.innerHeight)<=80);
        };

        const displayScrollElement = (item) => {
            // Attach a class to each element as it comes in view - this class will transition the elements into view
            item.classList.add('scrolled');
        }
        
        // // Function to handle each event by attaching a new class:scrolled which will transition the elements in
        const hideScrollElement = (item) => {
            item.classList.remove('scrolled');
        }

        // Function to handle each event:
        // if the element returns true (its height is less than 100 vh ) call the displayscroll function to add class to transition 
        const handleScrollAnimation = () => {
            scrollElement.forEach((element)=>{
                if (elementInView(element)) {
                    displayScrollElement(element);
                } 
                else {
                    hideScrollElement(element);
                 }
            })
        }  
    }
      

        joe.showModal=()=>{
            // Select all buttons in the portfolio section
            const alertButtons=document.querySelectorAll('.learn-more');

            // Run a forEach on the button node listner and attach an event listner to each button
            alertButtons.forEach((button)=>{
                button.addEventListener("click", (e)=>{
                    
                    // Array containing objects; properties are for each respective portfolio piece
                    const myWorks = [
                        {
                            imageUrl: './assets/final-oh-wow-alert.png',
                            html:`<p class="alert-text">A paired programming project using the Owen Wilson Wow API and the MovieDB API, user's can choose a movie from a dropdown list and see and hear a classic Owen Wilson "WOW" along with the movie's description and rating. Add and remove movies to your watch list and then get another wow!</p><br>`+
                            `<div class="link-container"><a class = "git-hub-link" href="https://github.com/wowAppProject2"><i class="devicon-github-original colored"></i></a> `+
                            '<a class="live-link" href="https://calm-eclair-5dc4c7.netlify.app/">LIVE</i></a><div>' 

                        },
                        {
                            imageUrl: './assets/bar-one-alert.png',
                            html:`<p class="alert-text">Bar-One is a fully responsive and multi-page website. Using designer provided PDFs, great attention to detail was pivitol in bringing the chic qualities of the Bar-One brand to life on the web.</p><br>`+
                            `<div class="link-container"><a class = "git-hub-link" href="https://github.com/genc1499/joe-gencarelli-project1"><i class="devicon-github-original colored"></i></a> `+
                            '<a class="live-link" href="https://subtle-cucurucho-8e92a2.netlify.app/index.html">LIVE</i></a><div>' 
                        },
                        {
                            imageUrl: './assets/your-extra-modal.png',
                            html:`<p class="alert-text">Using React and Firebase, Your Extra is a simple news app built using the Currents API. Click each category of news and get real-time top stories. Add and remove articles to build a reading list to enjoy later!</p><br>`+
                            `<div class="link-container"><a class = "git-hub-link" href="https://github.com/genc1499/joe-gencarelli-project3"><i class="devicon-github-original colored"></i></a> `+
                            '<a class="live-link" href="https://zingy-beignet-661bf4.netlify.app/">LIVE</i></a><div>' 

                        },
                        {
                            imageUrl: './assets/sun-run-modal.png',
                            html:`<p class="alert-text">A group collaboration, built with React using the Sunrise-Sunset API, Sun Run is a runner's companion; start your run by sunrise or finish by sunset. Get your location with GPS or search by city, enter the date and length of your run and you're off!</p><br>`+
                            `<div class="link-container"><a class = "git-hub-link" href="https://github.com/JunoSunRun/project-4-sun-run"><i class="devicon-github-original colored"></i></a> `+
                            '<a class="live-link" href="https://sun-run.netlify.app/">LIVE</i></a><div>' 

                        }
                    ];

                    // Use the id of the parent element of each button to display an alert with the corresponding properties from the objects in the array
                    if(e.target.parentElement.id==="wow"){
            
                        Swal.fire({
                            imageUrl: myWorks[0].imageUrl,
                            imageWidth:'550',
                            showCloseButton: true,
                            showCancelButton: false,
                            showConfirmButton: false,
                            html:myWorks[0].html
                        }); 
                    }

                    else if(e.target.parentElement.id==="bar-one"){
                        Swal.fire({
                            imageUrl: myWorks[1].imageUrl,
                            imageWidth:'550',
                            showCloseButton: true,
                            showCancelButton: false,
                            showConfirmButton: false,
                            html:myWorks[1].html
                        }); 
                    }

                    else if(e.target.parentElement.id==="your-extra"){
                        Swal.fire({
                            imageUrl: myWorks[2].imageUrl,
                            imageWidth:'550',
                            showCloseButton: true,
                            showCancelButton: false,
                            showConfirmButton: false,
                            html:myWorks[2].html
                        }); 
                    }

                    else if(e.target.parentElement.id==="sun-run"){
                        Swal.fire({
                            imageUrl: myWorks[3].imageUrl,
                            imageWidth:'550',
                            showCloseButton: true,
                            showCancelButton: false,
                            showConfirmButton: false,
                            html:myWorks[3].html
                        }); 
                    }

                })
            })
        }

        // Change anchor tag text content and also remove with mouse event listeners

        joe.anchorChange=()=>{
            joe.links.forEach(item =>{
                item.addEventListener('mouseover', function(){
                    if(this.id==="my-skills")
                    {
        
                        item.textContent="[ {} </> ]";
                        item.addEventListener('mouseleave', function(){
                            item.textContent="Skills";
                        })
                    }
                    if(this.id==="about-me")
                    {
                        item.textContent="Joe?";
                        item.addEventListener('mouseleave', function(){
                            item.textContent="About";
                        })
                    }
                    if(this.id==="my-pros")
                    {
                        item.textContent="[ {} </> ] in action";
                        item.addEventListener('mouseleave', function(){
                            item.textContent="Projects";
                        })
                    }
                    if(this.id==="say-hi")
                    {
                        item.textContent="Say Hi!";
                        item.addEventListener('mouseleave', function(){
                            item.textContent="Contact";
                        })
                    }
                })
            })
        }

    joe.init();
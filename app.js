


// Function to remove "curtains" and display h2 'front end developer'
        setTimeout(()=>{
            const line1 = document.querySelector('.line1');
            const line2 = document.querySelector('.line2');
            const slideInHeading=document.querySelector('header h2');
            line1.style.visibility="hidden";
            line2.style.visibility="hidden";
            slideInHeading.style.left="0";

        },1300);

         // Slide out menu

        // Select the burger menu class
        const burgerMenu=document.querySelector('.burger-menu-button')

        // Decalre a variable to keep track of menu open/close status
        let clicked=true;

        // Add an event listner to the burger menu class
        burgerMenu.addEventListener('click', ()=>{

            // Select the individual burger menu divs and the slide out menu
            const top = document.querySelector('.o');
            const middle = document.querySelector('.b');
            const bottom = document.querySelector('.d');
            const slideOutMenu=document.querySelector('.slide-out-menu')
            const burgerMenu=document.querySelector('.burger-menu-button');
            // If true - open slide out menu
            if(clicked===true){
    
                // Domino effect on hamburger menu
                top.style.transform="rotate(-75deg) translateX(-5px) translateY(5px)";
                middle.style.transitionDelay=".1s";
                middle.style.transform="rotate(-80deg) translateX(-5px) translateY(5px)";
                bottom.style.transitionDelay=".2s";
                bottom.style.transform="rotate(-90deg) translateX(-5px) translateY(5px)";


                // Bring the slide out menu on screen
                slideOutMenu.style.transitionDelay= '.3s';
                slideOutMenu.style.height= '100vh';
                slideOutMenu.style.top= '1px';
                slideOutMenu.style.right= '0px';

                // Re-assign clicked to false
                clicked=false;

                // Close menu after any link is clicked
                const navItems =document.querySelectorAll(".nav-links")
                
                navItems.forEach((item)=>{
                    item.addEventListener('click', (e)=>{
                        if(e.target.className==="nav-links")
                        {
                            middle.style.transform="revert";
                            top.style.transform="revert";
                            bottom.style.transform="revert";
            
                            //Bring slide out menu off screen
                            slideOutMenu.style.height= '0';
                            slideOutMenu.style.top= '-50px';
                            // Re-assign clicked to true    

                        }
                    })
                })
            
            }

            // If false, menu slides out
            else{
                // Revert back to burger menu button
                middle.style.transform="revert";
                top.style.transform="revert";
                bottom.style.transform="revert";

                //Bring slide out menu off screen
                slideOutMenu.style.height= '0';
                slideOutMenu.style.top= '-50px';
                // Re-assign clicked to true    
                clicked=true;
            }
        })
      
        // Variable to represent the height of the screen
        // const scrollOffset = 100;
        // Select all elements with class of js-scroll - these elements will transition in when scroll event is triggered
        const scrollElement = document.querySelectorAll(".js-scroll");
        
        // Function that checks if the element is in view
        const elementInView = (el) => {
            
            // Find the height between the element and the top of the screen
            const elementTop = el.getBoundingClientRect().top;
            
            // Return true if the element is less than the height between the element and the screen
            // return (elementTop < window.innerHeight);
            return ((elementTop - window.innerHeight)<=50);
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
        // Add event listner onto window, which will call the event handler function 
        window.addEventListener('scroll', () => {
            handleScrollAnimation();
        })

        // Select all buttons in the portfolio section
        const alertButtons=document.querySelectorAll('.learn-more');

        // Run a forEach on the button node listner and attach an event listner to each button
        alertButtons.forEach((button)=>{
            button.addEventListener("click", (e)=>{
                
                // Array containing objects; properties are for each respective portfolio piece
                const myWorks = [
                    {
                        imageUrl: './assets/final-oh-wow-alert.png',
                        html:`<p class="alert-text">A collaboration with <a href="#"> Nick Kuemmling.</a>, using the Owen Wilson Wow API and the MovieDB API, user's can choose a movie from a dropdown list and see and hear a classic Owen Wilson "WOW" along with the movie's description and rating. Add and remove movies to your watch list and then get another wow!</p><br>`+
                        `<div class="link-container"><a class = "git-hub-link" href="https://github.com/wowAppProject2"><i class="devicon-github-original colored"></i></a> `+
                        '<a class="live-link" href="https://calm-eclair-5dc4c7.netlify.app/">LIVE</i></a><div>' 

                    },
                    {
                        imageUrl: './assets/bar-one-alert.png',
                        html:`<p class="alert-text">Bar-One is a fully responsive and multi-page website. Using designer provided PDFs, great attention to detail was pivitol in bringing the chic qualities of the Bar-One brand to life on the web.</p><br>`+
                        `<div class="link-container"><a class = "git-hub-link" href="https://github.com/genc1499/joe-gencarelli-project1"><i class="devicon-github-original colored"></i></a> `+
                        '<a class="live-link" href="https://subtle-cucurucho-8e92a2.netlify.app/index.html">LIVE</i></a><div>' 
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


                else{
                    Swal.fire({
                        imageUrl: myWorks[0].imageUrl,
                        imageWidth:'400',
                        showCloseButton: true,
                        showCancelButton: false,
                        showConfirmButton: false,
                        html:myWorks[0].html
                    }); 
                }
     
            })
        })

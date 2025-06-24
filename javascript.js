 const box1= document.querySelector('.box1');
    const btns=document.querySelectorAll('.btn');
    const imgList=["1","2","3","4"]
    let index=0
    btns.forEach((button) => {
         button.addEventListener('click',()=>{
        if(button.classList.contains('btn-left')){
            index--;
            if(index<0){
                index=imgList.length-1;


            }
            box1.style.background=`url("img/${imgList[index]}.jpg")center/cover fixed no-repeat`
            box1.style.transition="background 0.5s";
            box1.style.backgroundSize="cover";  
            
            
        }
        else
        {
            index++;
            if(index===imgList.length){
                index=0;


            }
            box1.style.background=`url("img/${imgList[index]}.jpg")center/cover fixed no-repeat`
            box1.style.transition="background 0.5s";
            box1.style.backgroundSize="cover";  
        }
    })
        
    });
    
    // Smooth Scrolling and Navigation Highlight
    const nav = document.querySelector('.nav');
    const navLinks = document.querySelectorAll('.na li a');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - nav.offsetHeight,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    

const inputsumbit = document.getElementById('inputsumbit');
    inputsumbit.addEventListener('click', (event) => {             
        event.preventDefault(); // Prevent the default form submission
        const inputname = document.getElementById('inputname').value;       
        const inputemail = document.getElementById('inputemail').value;
        const inputphone = document.getElementById('inputphone').value;
        const inputservice = document.getElementById('inputservice').value;
        const inputproject = document.getElementById('inputproject').value;
        // Validate the input fields
        // Check if all fields are filled   
        if (inputname && inputemail && inputphone && inputservice && inputproject) 
        {
            if (!/^[a-zA-Z\s]+$/.test(inputname)) {
                alert('Please enter a valid name (letters and spaces only).');
                return;
            }
            if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(inputemail)) {
                alert('Please enter a valid email address.');
                return;
            }
            if (!/^\d{10}$/.test(inputphone)) {
                alert('Please enter a valid phone number (10 digits).');
                return;
            }
            if (inputservice === '') {
                alert('Please select a service.');
                return;
            }
            if (inputproject.trim() === '') {
                alert('Please provide project details.');
                return;
            }

            alert(`Thank you, ${inputname}! Your message has been sent successfully.`);
            // You can add code here to handle the form data, such as sending it to a server
        
            console.log(inputname, inputemail, inputphone, inputservice, inputproject);
         // Here you can add code to send the data to a server or process it further
        } 
        else 
        {
            alert('Please fill in all required fields.');
        }
    });
    //validation for input fields
  /*  const inputFields = document.querySelectorAll('.inputbox input, .inputbox select, .inputbox textarea');
    inputFields.forEach(field => {
        field.addEventListener('input', () => {
            if (field.value.trim() === '') {
                field.style.borderColor = 'red';
            } else {
                field.style.borderColor = '';
            }
        });
    }); 
    
    
    
    
    const inputname = inputname.value;
    if(inputname == Range(a-z,A-z)){
        console.log("name")
    }


*/
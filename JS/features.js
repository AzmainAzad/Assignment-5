// Starting of Functions for showing the donation balance 
document.getElementById('btn-add-money')
   .addEventListener('click', function(){
           event.preventDefault();

           const addMoney = getInputFieldValueById('input-add-money');

         
           if(addMoney > 0 && addMoney < 5500){
                const balance = getTextFieldValueById('account-balance');

                const newBalance = balance + addMoney;

                document.getElementById('account-balance').innerText = newBalance + ' ' + 'BDT';

                document.getElementById('cong-message').classList.remove("hidden");

                const date = Date();

                const div = document.createElement('div');

                div.classList.add('bg-white-300');

                div.style.border ="thin solid gray";

                div.style.borderRadius = "10px"

                div.style.padding ="30px"

                div.innerHTML = `
                   <p class="font-bold mb-3">Added: ${addMoney} Taka is donated for Flood Relief at Noakhali, Bangladesh</p>
                   <p class ="text-[#111111b3]"> ${date} <p>
                `
                document.getElementById('transaction-container').appendChild(div);
            }
           
           else{
                alert('Failed to add money');
           }       
            
   });


   document.getElementById('feni-btn-add-money')
   .addEventListener('click', function(){
           event.preventDefault();

           const addMoney = getInputFieldValueById('feni-input-add-money');

           
           if(addMoney > 0 && addMoney < 5500){
                const balance = getTextFieldValueById('feni-account-balance');

                const newBalance = balance + addMoney;
    
                document.getElementById('feni-account-balance').innerText = newBalance + ' ' + 'BDT';

                document.getElementById('cong-message').classList.remove("hidden");

                const date = Date();

                const div = document.createElement('div');

                div.classList.add('bg-white-300');

                div.style.border ="thin solid gray";

                div.style.borderRadius = "10px"

                div.style.padding ="30px"

                div.innerHTML = `
                   <p class="font-bold mb-3">Added: ${addMoney} Taka is donated for famine-2024 at Feni, Bangladesh</p>
                   <p class ="text-[#111111b3]"> ${date} <p>
                `
                document.getElementById('transaction-container').appendChild(div);
           }

           else{
            alert('Failed to add the money');
           }
   });   


   document.getElementById('quota-btn-add-money')
   .addEventListener('click', function(){
           event.preventDefault();

           const addMoney = getInputFieldValueById('quota-input-add-money');

           
           if(addMoney > 0 && addMoney < 5500){
                const balance = getTextFieldValueById('quota-account-balance');

                const newBalance = balance + addMoney;
    
                document.getElementById('quota-account-balance').innerText = newBalance + ' ' + 'BDT';

                document.getElementById('cong-message').classList.remove("hidden");

                const date = Date();

                const div = document.createElement('div');

                div.classList.add('bg-white-300');

                div.style.border ="thin solid gray";

                div.style.borderRadius = "10px"

                div.style.padding ="30px"

                div.innerHTML = `
                   <p class="font-bold mb-3">Added: ${addMoney} Taka is donated for Aid for aid in Quota Movement, Bangladesh</p>
                   <p class ="text-[#111111b3]"> ${date} <p>
                `
                document.getElementById('transaction-container').appendChild(div);
           }

           else{
            alert('Failed to add the money');
           }   
   }); 

// Ending of Functions for showing the donation balance 




// Starting of Functions for showing the main balance
   document.getElementById('btn-add-money')
   .addEventListener('click', function(){
           event.preventDefault();

           const addMoney = getInputFieldValueById('input-add-money');

           if(isNaN(addMoney)){
               return;
           }

           if(addMoney < 0){
                return;
           }

           const balance = getTextFieldValueById('main-balance');

           if(addMoney > balance){
                document.getElementById('cong-message').classList.add("hidden");
                return;
           }

           const newBalance = balance - addMoney;

           document.getElementById('main-balance').innerText = newBalance + ' ' + 'BDT';
   });


   document.getElementById('feni-btn-add-money')
   .addEventListener('click', function(){
           event.preventDefault();

           const addMoney = getInputFieldValueById('feni-input-add-money');

           if(isNaN(addMoney)){
                return;
            }
 
            if(addMoney < 0){
                 return;
            }

           const balance = getTextFieldValueById('main-balance');

           if(addMoney > balance){
                document.getElementById('cong-message').classList.add("hidden");
                return;
           }

           const newBalance = balance - addMoney;

           document.getElementById('main-balance').innerText = newBalance + ' ' + 'BDT';
   });


   document.getElementById('quota-btn-add-money')
   .addEventListener('click', function(){
           event.preventDefault();

           const addMoney = getInputFieldValueById('quota-input-add-money');

           if(isNaN(addMoney)){
                return;
            }
 
            if(addMoney < 0){
                 return;
            }

           const balance = getTextFieldValueById('main-balance');

           if(addMoney > balance){
                document.getElementById('cong-message').classList.add("hidden");
                return;
           }

           const newBalance = balance - addMoney;

           document.getElementById('main-balance').innerText = newBalance + ' ' + 'BDT';
   });
// Ending of Functions for showing the main balance




// Function for showing Congrats message
   document.getElementById('close-button')
   .addEventListener('click', function(){
           event.preventDefault();

           document.getElementById('cong-message').classList.add("hidden");
   });

   


// Function for going into blog page 
   document.getElementById('blog-button')
   .addEventListener('click',function(){
         event.preventDefault();
         
         window.location.href = '/pages/blog.html';
   });




// Starting of Function for changing the history button color
document.getElementById('history-btn')
.addEventListener('click', function(){
     event.preventDefault();

     document.getElementById('history-btn').classList.remove("btn-outline");

     document.getElementById('history-btn').classList.add("btn-color");

     document.getElementById('donation-btn').classList.remove('btn-color');

     document.getElementById('donation-btn').classList.add("btn-outline");

});




// Starting of Function for changing the history button color
document.getElementById('donation-btn')
.addEventListener('click', function(){
     event.preventDefault();

     document.getElementById('donation-btn').classList.remove("btn-outline");

     document.getElementById('donation-btn').classList.add("btn-color");

     document.getElementById('history-btn').classList.remove('btn-color');

     document.getElementById('history-btn').classList.add("btn-outline");

});




// Starting of Function for showing the Transaction History
   document.getElementById('history-btn')
   .addEventListener('click', function(){
        event.preventDefault();

        document.getElementById('donation-section').classList.add("hidden");

        document.getElementById('history-section').classList.remove("hidden");
   });




// Starting of Function for showing the Transaction History
   document.getElementById('donation-btn')
   .addEventListener('click', function(){
       event.preventDefault();

       document.getElementById('history-section').classList.add("hidden");

       document.getElementById('donation-section').classList.remove("hidden");

});   

   

  

   
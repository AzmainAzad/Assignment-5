// Starting of Functions for showing the donation balance 
document.getElementById('btn-add-money')
   .addEventListener('click', function(){
           event.preventDefault();

           const addMoney = getInputFieldValueById('input-add-money');

           if(isNaN(addMoney)){
                alert('Failed to add money');
           }
         
           if(addMoney > 0){
                const balance = getTextFieldValueById('account-balance');

                const newBalance = balance + addMoney;

                document.getElementById('account-balance').innerText = newBalance + ' ' + 'BDT';

                document.getElementById('cong-message').classList.remove("hidden");
            }
           
           else{
                alert('Failed to add money');
           }
            
   });

   document.getElementById('feni-btn-add-money')
   .addEventListener('click', function(){
           event.preventDefault();

           const addMoney = getInputFieldValueById('feni-input-add-money');

           if(isNaN(addMoney)){
                alert('Failed to add money');
           }
           
           if(addMoney > 0){
                const balance = getTextFieldValueById('feni-account-balance');

                const newBalance = balance + addMoney;
    
                document.getElementById('feni-account-balance').innerText = newBalance + ' ' + 'BDT';

                document.getElementById('cong-message').classList.remove("hidden");
           }

           else{
            alert('Failed to add the money');
           }
   });   

   document.getElementById('quota-btn-add-money')
   .addEventListener('click', function(){
           event.preventDefault();

           const addMoney = getInputFieldValueById('quota-input-add-money');

           if(isNaN(addMoney)){
                alert('Failed to add money');
           }
           
           if(addMoney > 0){
                const balance = getTextFieldValueById('quota-account-balance');

                const newBalance = balance + addMoney;
    
                document.getElementById('quota-account-balance').innerText = newBalance + ' ' + 'BDT';

                document.getElementById('cong-message').classList.remove("hidden");
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

  

   
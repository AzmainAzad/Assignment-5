document.getElementById('btn-add-money')
   .addEventListener('click', function(){
           event.preventDefault();

           const addMoney = getInputFieldValueById('input-add-money');
           
           if(isNaN(addMoney)){
                alert('Failed to add Money');
                return;
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

   document.getElementById('btn-add-money')
   .addEventListener('click', function(){
           event.preventDefault();

           const addMoney = getInputFieldValueById('input-add-money');

           const balance = getTextFieldValueById('main-balance');

           const newBalance = balance - addMoney;

           document.getElementById('main-balance').innerText = newBalance + ' ' + 'BDT';
   });

   document.getElementById('feni-btn-add-money')
   .addEventListener('click', function(){
           event.preventDefault();

           const addMoney = getInputFieldValueById('feni-input-add-money');

           const balance = getTextFieldValueById('main-balance');

           const newBalance = balance - addMoney;

           document.getElementById('main-balance').innerText = newBalance + ' ' + 'BDT';
   });

   document.getElementById('quota-btn-add-money')
   .addEventListener('click', function(){
           event.preventDefault();

           const addMoney = getInputFieldValueById('quota-input-add-money');

           const balance = getTextFieldValueById('main-balance');

           const newBalance = balance - addMoney;

           document.getElementById('main-balance').innerText = newBalance + ' ' + 'BDT';
   });


   document.getElementById('close-button')
   .addEventListener('click', function(){
           event.preventDefault();

         document.getElementById('cong-message').classList.add("hidden");
   });


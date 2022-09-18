document.addEventListener('DOMContentLoaded', () => {
   let formData = {};
   const form = document.querySelector('form');
   const ls = localStorage;

   // input data into LocalStorage
   form.addEventListener('input', (element) => {   
      if (element.target.type === 'checkbox') {
         formData[element.target.name] = JSON.stringify(element.target.checked);
      }else{
         formData[element.target.name] = element.target.value;
      }
      ls.setItem('formData', JSON.stringify(formData));
   })
   
   // output data from LocalStorage
   if(ls.formData){
      formData = JSON.parse(ls.getItem('formData'));
      for (const key in formData) {
         if(form.elements[key].type === 'checkbox' && formData[key] === 'true'){
            form.elements[key].checked = 'on';
         }
         form.elements[key].value = formData[key];
      }      
   }
  
});
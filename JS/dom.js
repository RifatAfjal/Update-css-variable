
 const inputs = document.querySelectorAll('input');

 function updates(){
     const suffix = this.dataset.sizing || '';
     document.documentElement.style.setProperty(`--${this.name}`,this.value + suffix)
 }

 inputs.forEach(input => input.addEventListener('change',updates));
 inputs.forEach(input => input.addEventListener('mousemove', updates))
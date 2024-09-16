const observer = new IntersectionObserver((entries)=> {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        } 
        else{
            entry.target.classList.remove('show');
        }
    });
});

const hiddenelements = document.querySelectorAll('.hidden');
hiddenelements.forEach((el) => observer.observe(el));




const observer2 = new IntersectionObserver((entries)=> {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show1');
        } 
        else{
            entry.target.classList.remove('show1');
        }
    });
});

const hiddenelements2 = document.querySelectorAll('.hidden1');
hiddenelements2.forEach((el) => observer2.observe(el));


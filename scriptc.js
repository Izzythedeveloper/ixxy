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



function toggleDropdown() {
    const dropdownContent = document.getElementById("myDropdown");
    dropdownContent.classList.toggle("show");
}




const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    const drop = dropdown.querySelector('.drop');
    
    // When hovering over the dropdown
    dropdown.addEventListener('mouseover', () => {
        drop.style.display = 'block';
        setTimeout(() => {
            drop.style.opacity = '1';
            drop.style.transform = 'translateY(0)';
        }, 30); // Small delay to allow display change
    });

    // Keep it visible when hovering over the drop itself
    drop.addEventListener('mouseenter', () => {
        clearTimeout(drop.hideTimeout); // Clear any existing hide timeout
    });

    // Hide when leaving the dropdown and the drop
    dropdown.addEventListener('mouseleave', () => {
        drop.style.opacity = '0';
        drop.style.transform = 'translateY(-20px)';
        drop.hideTimeout = setTimeout(() => {
            drop.style.display = 'none';
        }, 100); // Match this with your transition duration
    });

    // Ensure the dropdown remains open while hovering over the drop itself
    drop.addEventListener('mouseleave', () => {
        drop.style.opacity = '0';
        drop.style.transform = 'translateY(-20px)';
        drop.hideTimeout = setTimeout(() => {
            drop.style.display = 'none';
        }, 1300); // Match this with your transition duration
    });
});
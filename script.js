function toggleMobileMenu() {
    const navContainer = document.querySelector('.nav-container');
    navContainer.classList.toggle('active');
}

document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', () => {
        const navContainer = document.querySelector('.nav-container');
        if (navContainer.classList.contains('active')) {
            navContainer.classList.remove('active');
        }
    });
});

window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = 'none';
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const stepCards = document.querySelectorAll('.step-card');
    const dots = document.querySelectorAll('.dot');
    
    dots.forEach(dot => {
        dot.addEventListener('click', function() {
            const stepIndex = parseInt(this.getAttribute('data-step'));
            showStep(stepIndex);
        });
    });
    
    function showStep(stepIndex) {
        stepCards.forEach(card => {
            card.classList.remove('active');
        });
        
        dots.forEach(dot => {
            dot.classList.remove('active');
        });
        
        const currentCard = document.querySelector(`.step-card[data-step="${stepIndex}"]`);
        if (currentCard) {
            currentCard.classList.add('active');
        }
        
        const currentDots = document.querySelectorAll(`.dot[data-step="${stepIndex}"]`);
        currentDots.forEach(dot => {
            dot.classList.add('active');
        });
    }
    
    showStep(0);
});



function toggleFaq(element) {
    const faqItem = element.parentElement;
    const isActive = faqItem.classList.contains('active');
    
    const allItems = document.querySelectorAll('.faq-item');
    allItems.forEach(item => {
        item.classList.remove('active');
        item.querySelector('.icon').textContent = '+';
    });
    
    if (!isActive) {
        faqItem.classList.add('active');
        faqItem.querySelector('.icon').textContent = '−';
    }
}

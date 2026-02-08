// =====================================================
// AutoHub Kenya - JavaScript Functionality
// Cookie Management, Search/Filter, Form Validation
// =====================================================

// ===== Car Database =====
const carDatabase = [
    // Sedans
    {
        id: 1,
        name: "Toyota Camry 2024",
        category: "sedan",
        price: 4500000,
        year: 2024,
        icon: "🚗",
        features: "2.5L | Auto | 30,000 km",
        location: "Nairobi"
    },
    {
        id: 2,
        name: "Honda Accord 2023",
        category: "sedan",
        price: 4200000,
        year: 2023,
        icon: "🚗",
        features: "2.0L Turbo | Auto | 45,000 km",
        location: "Mombasa"
    },
    {
        id: 3,
        name: "Nissan Altima 2022",
        category: "sedan",
        price: 3500000,
        year: 2022,
        icon: "🚗",
        features: "2.5L | CVT | 60,000 km",
        location: "Kisumu"
    },
    {
        id: 4,
        name: "Mazda 6 2023",
        category: "sedan",
        price: 3800000,
        year: 2023,
        icon: "🚗",
        features: "2.5L | Auto | 35,000 km",
        location: "Nairobi"
    },
    
    // SUVs
    {
        id: 5,
        name: "Toyota Land Cruiser Prado 2024",
        category: "suv",
        price: 8500000,
        year: 2024,
        icon: "🚙",
        features: "2.8L Diesel | 4WD | 20,000 km",
        location: "Nairobi"
    },
    {
        id: 6,
        name: "Nissan X-Trail 2023",
        category: "suv",
        price: 4800000,
        year: 2023,
        icon: "🚙",
        features: "2.5L | AWD | 40,000 km",
        location: "Nakuru"
    },
    {
        id: 7,
        name: "Mazda CX-5 2024",
        category: "suv",
        price: 5200000,
        year: 2024,
        icon: "🚙",
        features: "2.5L | AWD | 15,000 km",
        location: "Nairobi"
    },
    {
        id: 8,
        name: "Honda CR-V 2022",
        category: "suv",
        price: 4600000,
        year: 2022,
        icon: "🚙",
        features: "1.5L Turbo | AWD | 55,000 km",
        location: "Mombasa"
    },
    {
        id: 9,
        name: "Subaru Forester 2023",
        category: "suv",
        price: 5000000,
        year: 2023,
        icon: "🚙",
        features: "2.5L | AWD | 38,000 km",
        location: "Eldoret"
    },
    
    // Luxury Cars
    {
        id: 10,
        name: "Mercedes-Benz E-Class 2024",
        category: "luxury",
        price: 12500000,
        year: 2024,
        icon: "🏎️",
        features: "3.0L V6 | Auto | 10,000 km",
        location: "Nairobi"
    },
    {
        id: 11,
        name: "BMW 5 Series 2023",
        category: "luxury",
        price: 11000000,
        year: 2023,
        icon: "🏎️",
        features: "2.0L Turbo | Auto | 25,000 km",
        location: "Nairobi"
    },
    {
        id: 12,
        name: "Audi A6 2024",
        category: "luxury",
        price: 10800000,
        year: 2024,
        icon: "🏎️",
        features: "3.0L V6 | Auto | 8,000 km",
        location: "Mombasa"
    },
    {
        id: 13,
        name: "Lexus ES 350 2023",
        category: "luxury",
        price: 9500000,
        year: 2023,
        icon: "🏎️",
        features: "3.5L V6 | Auto | 30,000 km",
        location: "Nairobi"
    },
    
    // Trucks
    {
        id: 14,
        name: "Toyota Hilux Double Cab 2024",
        category: "truck",
        price: 6500000,
        year: 2024,
        icon: "🚚",
        features: "2.8L Diesel | 4WD | 18,000 km",
        location: "Nairobi"
    },
    {
        id: 15,
        name: "Ford Ranger 2023",
        category: "truck",
        price: 5800000,
        year: 2023,
        icon: "🚚",
        features: "3.2L Diesel | 4WD | 42,000 km",
        location: "Nakuru"
    },
    {
        id: 16,
        name: "Isuzu D-Max 2024",
        category: "truck",
        price: 5500000,
        year: 2024,
        icon: "🚚",
        features: "3.0L Diesel | 4WD | 12,000 km",
        location: "Eldoret"
    },
    {
        id: 17,
        name: "Mitsubishi L200 2022",
        category: "truck",
        price: 4800000,
        year: 2022,
        icon: "🚚",
        features: "2.4L Diesel | 4WD | 65,000 km",
        location: "Kisumu"
    },
    
    // Hatchbacks
    {
        id: 18,
        name: "Volkswagen Golf 2024",
        category: "hatchback",
        price: 3200000,
        year: 2024,
        icon: "🚗",
        features: "1.4L Turbo | Auto | 22,000 km",
        location: "Nairobi"
    },
    {
        id: 19,
        name: "Mazda 3 Hatchback 2023",
        category: "hatchback",
        price: 3500000,
        year: 2023,
        icon: "🚗",
        features: "2.0L | Auto | 35,000 km",
        location: "Mombasa"
    },
    {
        id: 20,
        name: "Honda Fit 2022",
        category: "hatchback",
        price: 1800000,
        year: 2022,
        icon: "🚗",
        features: "1.3L | Auto | 58,000 km",
        location: "Nairobi"
    },
    
    // Coupes
    {
        id: 21,
        name: "BMW M4 Coupe 2024",
        category: "coupe",
        price: 15000000,
        year: 2024,
        icon: "🏎️",
        features: "3.0L Twin Turbo | Auto | 5,000 km",
        location: "Nairobi"
    },
    {
        id: 22,
        name: "Mercedes-AMG C63 2023",
        category: "coupe",
        price: 14500000,
        year: 2023,
        icon: "🏎️",
        features: "4.0L V8 Biturbo | Auto | 12,000 km",
        location: "Nairobi"
    },
    {
        id: 23,
        name: "Audi A5 Coupe 2024",
        category: "coupe",
        price: 8900000,
        year: 2024,
        icon: "🏎️",
        features: "2.0L Turbo | Auto | 8,000 km",
        location: "Mombasa"
    },
    {
        id: 24,
        name: "Nissan 370Z 2021",
        category: "coupe",
        price: 6500000,
        year: 2021,
        icon: "🏎️",
        features: "3.7L V6 | Manual | 45,000 km",
        location: "Nairobi"
    }
];

// ===== Cookie Management =====
// Set cookie with expiration
function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
    console.log("Cookie set: " + name + " = " + value);
}

// Get cookie value
function getCookie(name) {
    const cookieName = name + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArray = decodedCookie.split(';');
    
    for (let i = 0; i < cookieArray.length; i++) {
        let cookie = cookieArray[i].trim();
        if (cookie.indexOf(cookieName) === 0) {
            return cookie.substring(cookieName.length, cookie.length);
        }
    }
    return "";
}

// Accept cookies and hide banner
function acceptCookies() {
    setCookie('cookieConsent', 'accepted', 365);
    setCookie('userVisit', Date.now(), 365);
    
    const banner = document.getElementById('cookieConsent');
    if (banner) {
        banner.style.animation = 'slideDown 0.5s ease';
        setTimeout(() => {
            banner.style.display = 'none';
        }, 500);
    }
}

// Check cookie consent on page load
function checkCookieConsent() {
    const consent = getCookie('cookieConsent');
    const banner = document.getElementById('cookieConsent');
    
    if (consent === 'accepted' && banner) {
        banner.style.display = 'none';
    }
    
    // Set user ID cookie if not exists (for session tracking)
    if (!getCookie('userId')) {
        const userId = 'user_' + Math.random().toString(36).substr(2, 9);
        setCookie('userId', userId, 365);
    }
    
    console.log("User ID: " + getCookie('userId'));
    console.log("Last visit: " + getCookie('userVisit'));
}

// ===== Mobile Navigation =====
function initMobileNav() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }
}

// ===== Product Display Functions =====
function formatPrice(price) {
    return 'KES ' + price.toLocaleString();
}

function createProductCard(car, isFeatured = false) {
    const badge = isFeatured ? '<span class="product-badge">Featured</span>' : '';
    
    return `
        <div class="product-card" data-category="${car.category}" data-price="${car.price}" data-year="${car.year}" data-name="${car.name.toLowerCase()}">
            <div class="product-image">
                ${car.icon}
                ${badge}
            </div>
            <div class="product-info">
                <span class="product-category">${car.category}</span>
                <h3 class="product-name">${car.name}</h3>
                <div class="product-details">
                    <span>📍 ${car.location}</span>
                    <span>${car.features}</span>
                </div>
                <div class="product-price">${formatPrice(car.price)}</div>
                <div class="product-footer">
                    <span style="font-size: 0.85rem; color: #6B7280;">Year: ${car.year}</span>
                    <button class="contact-btn" onclick="contactSeller('${car.name}')">Contact Seller</button>
                </div>
            </div>
        </div>
    `;
}

function displayFeaturedProducts() {
    const container = document.getElementById('featuredProducts');
    if (!container) return;
    
    // Display first 6 cars as featured
    const featured = carDatabase.slice(0, 6);
    container.innerHTML = featured.map(car => createProductCard(car, true)).join('');
}

function displayAllProducts() {
    const container = document.getElementById('allProducts');
    if (!container) return;
    
    container.innerHTML = carDatabase.map(car => createProductCard(car, false)).join('');
    updateResultsCount(carDatabase.length);
}

function updateResultsCount(count) {
    const resultsCount = document.getElementById('resultsCount');
    if (resultsCount) {
        resultsCount.textContent = `Showing ${count} vehicle${count !== 1 ? 's' : ''}`;
    }
}

// ===== Search Functionality =====
function searchCars() {
    const searchInput = document.getElementById('searchInput');
    const searchTerm = searchInput ? searchInput.value.toLowerCase().trim() : '';
    
    const allCards = document.querySelectorAll('.product-card');
    let visibleCount = 0;
    
    allCards.forEach(card => {
        const carName = card.getAttribute('data-name');
        
        if (searchTerm === '' || carName.includes(searchTerm)) {
            card.style.display = 'block';
            visibleCount++;
        } else {
            card.style.display = 'none';
        }
    });
    
    updateResultsCount(visibleCount);
    toggleNoResults(visibleCount);
}

// ===== Filter Functionality =====
function filterCars() {
    const categoryFilter = document.getElementById('categoryFilter');
    const priceFilter = document.getElementById('priceFilter');
    const yearFilter = document.getElementById('yearFilter');
    
    const selectedCategory = categoryFilter ? categoryFilter.value : 'all';
    const selectedPrice = priceFilter ? priceFilter.value : 'all';
    const selectedYear = yearFilter ? yearFilter.value : 'all';
    
    const allCards = document.querySelectorAll('.product-card');
    let visibleCount = 0;
    
    allCards.forEach(card => {
        const category = card.getAttribute('data-category');
        const price = parseInt(card.getAttribute('data-price'));
        const year = parseInt(card.getAttribute('data-year'));
        
        let showCard = true;
        
        // Category filter
        if (selectedCategory !== 'all' && category !== selectedCategory) {
            showCard = false;
        }
        
        // Price filter
        if (selectedPrice !== 'all') {
            const [minPrice, maxPrice] = selectedPrice.split('-').map(Number);
            if (price < minPrice || price > maxPrice) {
                showCard = false;
            }
        }
        
        // Year filter
        if (selectedYear !== 'all') {
            if (selectedYear === 'older') {
                if (year >= 2020) {
                    showCard = false;
                }
            } else {
                if (year !== parseInt(selectedYear)) {
                    showCard = false;
                }
            }
        }
        
        card.style.display = showCard ? 'block' : 'none';
        if (showCard) visibleCount++;
    });
    
    updateResultsCount(visibleCount);
    toggleNoResults(visibleCount);
}

function resetFilters() {
    const searchInput = document.getElementById('searchInput');
    const categoryFilter = document.getElementById('categoryFilter');
    const priceFilter = document.getElementById('priceFilter');
    const yearFilter = document.getElementById('yearFilter');
    
    if (searchInput) searchInput.value = '';
    if (categoryFilter) categoryFilter.value = 'all';
    if (priceFilter) priceFilter.value = 'all';
    if (yearFilter) yearFilter.value = 'all';
    
    const allCards = document.querySelectorAll('.product-card');
    allCards.forEach(card => {
        card.style.display = 'block';
    });
    
    updateResultsCount(allCards.length);
    toggleNoResults(allCards.length);
}

function toggleNoResults(count) {
    const noResults = document.getElementById('noResults');
    const productGrid = document.getElementById('allProducts');
    
    if (noResults && productGrid) {
        if (count === 0) {
            noResults.style.display = 'block';
            productGrid.style.display = 'none';
        } else {
            noResults.style.display = 'none';
            productGrid.style.display = 'grid';
        }
    }
}

// ===== Category Card Click Handler =====
function initCategoryCards() {
    const categoryCards = document.querySelectorAll('.category-card');
    
    categoryCards.forEach(card => {
        card.addEventListener('click', () => {
            const category = card.getAttribute('data-category');
            // Store in sessionStorage and redirect to listings
            sessionStorage.setItem('selectedCategory', category);
            window.location.href = 'listings.html';
        });
    });
}

// ===== Apply Category Filter from Homepage =====
function applyStoredCategory() {
    const selectedCategory = sessionStorage.getItem('selectedCategory');
    if (selectedCategory) {
        const categoryFilter = document.getElementById('categoryFilter');
        if (categoryFilter) {
            categoryFilter.value = selectedCategory;
            filterCars();
            sessionStorage.removeItem('selectedCategory');
        }
    }
}

// ===== Contact Seller =====
function contactSeller(carName) {
    alert(`Thank you for your interest in ${carName}!\n\nIn a production environment, this would:\n- Connect you with the verified seller\n- Show contact information\n- Allow you to send a message\n- Schedule a viewing\n\nYour inquiry has been logged per Data Protection Act (2019) compliance.`);
    
    // Log user action (in real app, would send to backend)
    console.log(`User ${getCookie('userId')} inquired about: ${carName}`);
}

// ===== Form Validation Functions =====
function validateFullName(name) {
    const trimmed = name.trim();
    if (trimmed.length < 2) {
        return "Name must be at least 2 characters long";
    }
    if (!/^[a-zA-Z\s]+$/.test(trimmed)) {
        return "Name should contain only letters and spaces";
    }
    return "";
}

function validateEmail(email) {
    const trimmed = email.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailRegex.test(trimmed)) {
        return "Please enter a valid email address";
    }
    return "";
}

function validatePhone(phone) {
    const trimmed = phone.trim();
    // Kenyan phone format: 07XXXXXXXX or 01XXXXXXXX
    const phoneRegex = /^0[17]\d{8}$/;
    
    if (!phoneRegex.test(trimmed)) {
        return "Please enter a valid Kenyan phone number (07XXXXXXXX or 01XXXXXXXX)";
    }
    return "";
}

function validatePassword(password) {
    if (password.length < 8) {
        return "Password must be at least 8 characters long";
    }
    if (!/[A-Z]/.test(password)) {
        return "Password must contain at least one uppercase letter";
    }
    if (!/[a-z]/.test(password)) {
        return "Password must contain at least one lowercase letter";
    }
    if (!/[0-9]/.test(password)) {
        return "Password must contain at least one number";
    }
    return "";
}

function validateConfirmPassword(password, confirmPassword) {
    if (password !== confirmPassword) {
        return "Passwords do not match";
    }
    return "";
}

function showError(fieldId, message) {
    const errorElement = document.getElementById(fieldId + 'Error');
    const inputElement = document.getElementById(fieldId);
    
    if (errorElement) {
        errorElement.textContent = message;
    }
    if (inputElement && message) {
        inputElement.style.borderColor = '#EF4444';
    } else if (inputElement) {
        inputElement.style.borderColor = '#10B981';
    }
}

function clearError(fieldId) {
    showError(fieldId, '');
}

// ===== Real-time Validation =====
function initRealTimeValidation() {
    const form = document.getElementById('registerForm');
    if (!form) return;
    
    // Full Name
    const fullName = document.getElementById('fullName');
    if (fullName) {
        fullName.addEventListener('blur', () => {
            const error = validateFullName(fullName.value);
            showError('fullName', error);
        });
        fullName.addEventListener('input', () => {
            if (fullName.value.length > 0) {
                clearError('fullName');
            }
        });
    }
    
    // Email
    const email = document.getElementById('email');
    if (email) {
        email.addEventListener('blur', () => {
            const error = validateEmail(email.value);
            showError('email', error);
        });
    }
    
    // Phone
    const phone = document.getElementById('phone');
    if (phone) {
        phone.addEventListener('blur', () => {
            const error = validatePhone(phone.value);
            showError('phone', error);
        });
    }
    
    // Password
    const password = document.getElementById('password');
    if (password) {
        password.addEventListener('blur', () => {
            const error = validatePassword(password.value);
            showError('password', error);
        });
    }
    
    // Confirm Password
    const confirmPassword = document.getElementById('confirmPassword');
    if (confirmPassword && password) {
        confirmPassword.addEventListener('blur', () => {
            const error = validateConfirmPassword(password.value, confirmPassword.value);
            showError('confirmPassword', error);
        });
    }
}

// ===== Form Submission Handler =====
function handleRegistration(event) {
    event.preventDefault();
    
    // Get form values
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const accountType = document.getElementById('accountType').value;
    const termsAccept = document.getElementById('termsAccept').checked;
    const dataConsent = document.getElementById('dataConsent').checked;
    const marketingConsent = document.getElementById('marketingConsent').checked;
    
    let isValid = true;
    
    // Validate all fields
    const nameError = validateFullName(fullName);
    if (nameError) {
        showError('fullName', nameError);
        isValid = false;
    }
    
    const emailError = validateEmail(email);
    if (emailError) {
        showError('email', emailError);
        isValid = false;
    }
    
    const phoneError = validatePhone(phone);
    if (phoneError) {
        showError('phone', phoneError);
        isValid = false;
    }
    
    const passwordError = validatePassword(password);
    if (passwordError) {
        showError('password', passwordError);
        isValid = false;
    }
    
    const confirmPasswordError = validateConfirmPassword(password, confirmPassword);
    if (confirmPasswordError) {
        showError('confirmPassword', confirmPasswordError);
        isValid = false;
    }
    
    if (!accountType) {
        showError('accountType', 'Please select an account type');
        isValid = false;
    }
    
    if (!termsAccept) {
        showError('terms', 'You must accept the Terms & Conditions');
        isValid = false;
    }
    
    if (!dataConsent) {
        showError('dataConsent', 'You must consent to data processing (required by law)');
        isValid = false;
    }
    
    // If validation passes
    if (isValid) {
        // Store user data in cookie (in production, would send to backend)
        const userData = {
            name: fullName,
            email: email,
            phone: phone,
            accountType: accountType,
            marketingConsent: marketingConsent,
            registrationDate: new Date().toISOString()
        };
        
        setCookie('userData', JSON.stringify(userData), 365);
        
        // Hide form and show success message
        const form = document.getElementById('registerForm');
        const successMessage = document.getElementById('successMessage');
        
        if (form && successMessage) {
            form.style.display = 'none';
            successMessage.style.display = 'block';
            
            // Redirect after 3 seconds
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 3000);
        }
        
        console.log('Registration successful:', userData);
    } else {
        // Scroll to first error
        const firstError = document.querySelector('.error-message:not(:empty)');
        if (firstError) {
            firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }
}

// ===== Page Initialization =====
document.addEventListener('DOMContentLoaded', function() {
    // Check cookie consent
    checkCookieConsent();
    
    // Initialize mobile navigation
    initMobileNav();
    
    // Display products on appropriate pages
    displayFeaturedProducts();
    displayAllProducts();
    
    // Initialize category cards
    initCategoryCards();
    
    // Apply stored category filter
    applyStoredCategory();
    
    // Initialize real-time validation
    initRealTimeValidation();
    
    // Add enter key support for search
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                searchCars();
            }
        });
    }
    
    console.log('AutoHub Kenya initialized');
    console.log('Total vehicles in database:', carDatabase.length);
});

// ===== Smooth Scrolling for Anchor Links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href.length > 1) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

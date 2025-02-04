<script>
        // Carrossel
        let currentSlide = 0;
        const carouselInner = document.querySelector('.carousel-inner');
        const indicatorsContainer = document.getElementById('carouselIndicators');
        const totalSlides = document.querySelectorAll('.carousel-item').length;

        // Criar indicadores
        for(let i = 0; i < totalSlides; i++) {
            const indicator = document.createElement('div');
            indicator.classList.add('carousel-indicator');
            indicator.addEventListener('click', () => goToSlide(i));
            indicatorsContainer.appendChild(indicator);
        }

        function updateCarousel() {
            carouselInner.style.transform = `translateX(-${currentSlide * 100}%)`;
            document.querySelectorAll('.carousel-indicator').forEach((indicator, index) => {
                indicator.classList.toggle('active', index === currentSlide);
            });
        }

        function moveSlide(direction) {
            currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
            updateCarousel();
            resetAutoplay();
        }

        function goToSlide(index) {
            currentSlide = index;
            updateCarousel();
            resetAutoplay();
        }

        // Autoplay
        let autoplayInterval = setInterval(() => moveSlide(1), 5000);

        function resetAutoplay() {
            clearInterval(autoplayInterval);
            autoplayInterval = setInterval(() => moveSlide(1), 5000);
        }

        // Pausar autoplay ao interagir
        document.querySelector('.carousel').addEventListener('mouseenter', () => {
            clearInterval(autoplayInterval);
        });

        document.querySelector('.carousel').addEventListener('mouseleave', () => {
            autoplayInterval = setInterval(() => moveSlide(1), 5000);
        });

        // Inicializar
        updateCarousel();

        // Produtos
        const products = [
            {
                id: 1,
                name: "Hoodie Essentials",
                price: 799.90,
                image: "https://via.placeholder.com/400x500/EEE?text=HOODIE",
                rating: 4
            },
            {
                id: 2,
                name: "T-Shirt Oversized",
                price: 349.90,
                image: "https://via.placeholder.com/400x500/EEE?text=T-SHIRT",
                rating: 5
            },
            {
                id: 3,
                name: "Sweatpants Jogger",
                price: 599.90,
                image: "https://via.placeholder.com/400x500/EEE?text=SWEATPANTS",
                rating: 4
            }
        ];

        function initProducts() {
            const grid = document.querySelector('.products-grid');
            grid.innerHTML = products.map(product => `
                <div class="product-card">
                    <img src="${product.image}" class="product-image" alt="${product.name}">
                    <h3>${product.name}</h3>
                    <div class="price">R$ ${product.price.toFixed(2).replace('.', ',')}</div>
                    <button class="cart-btn" onclick="addToCart(${product.id})">ADICIONAR AO CARRINHO</button>
                </div>
            `).join('');
        }

        initProducts();

        // Carrinho
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        
        function addToCart(productId) {
            const product = products.find(p => p.id === productId);
            cart.push({...product, quantity: 1});
            updateCart();
            showAlert(`${product.name} adicionado ao carrinho`);
        }

        function updateCart() {
            localStorage.setItem('cart', JSON.stringify(cart));
            document.getElementById('cart-count').textContent = cart.length;
        }

        function showAlert(message) {
            const alert = document.createElement('div');
            alert.textContent = message;
            alert.style.position = 'fixed';
            alert.style.bottom = '20px';
            alert.style.right = '20px';
            alert.style.background = 'var(--preto)';
            alert.style.color = 'var(--branco)';
            alert.style.padding = '1rem 2rem';
            alert.style.borderRadius = '4px';
            document.body.appendChild(alert);
            
            setTimeout(() => {
                alert.remove();
            }, 3000);
        }
    </script>

<main>
        <div class="carousel">
            <div class="carousel-inner" style="transform: translateX(-200%);">
                <div class="carousel-item">
                    <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80" alt="Coleção 1">
                    <div class="carousel-caption">
                        <h2>NOVA COLEÇÃO</h2>
                        <p>Descubra as peças essenciais para 2024</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="https://images.unsplash.com/photo-1543087903-1ac2ec7aa8c5?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80" alt="Coleção 2">
                    <div class="carousel-caption">
                        <h2>ESTILO URBANO</h2>
                        <p>Conforto e sofisticação em cada detalhe</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80" alt="Coleção 3">
                    <div class="carousel-caption">
                        <h2>EDIÇÃO LIMITADA</h2>
                        <p>Peças exclusivas em estoque limitado</p>
                    </div>
                </div>
            </div>
            
            <button class="carousel-control carousel-prev" onclick="moveSlide(-1)">‹</button>
            <button class="carousel-control carousel-next" onclick="moveSlide(1)">›</button>
            
            <div class="carousel-indicators" id="carouselIndicators"><div class="carousel-indicator"></div><div class="carousel-indicator"></div><div class="carousel-indicator active"></div></div>
        </div>

        <div class="products-grid">
                <div class="product-card">
                    <img src="https://via.placeholder.com/400x500/EEE?text=HOODIE" class="product-image" alt="Hoodie Essentials">
                    <h3>Hoodie Essentials</h3>
                    <div class="price">R$ 799,90</div>
                    <button class="cart-btn" onclick="addToCart(1)">ADICIONAR AO CARRINHO</button>
                </div>
            
                <div class="product-card">
                    <img src="https://via.placeholder.com/400x500/EEE?text=T-SHIRT" class="product-image" alt="T-Shirt Oversized">
                    <h3>T-Shirt Oversized</h3>
                    <div class="price">R$ 349,90</div>
                    <button class="cart-btn" onclick="addToCart(2)">ADICIONAR AO CARRINHO</button>
                </div>
            
                <div class="product-card">
                    <img src="https://via.placeholder.com/400x500/EEE?text=SWEATPANTS" class="product-image" alt="Sweatpants Jogger">
                    <h3>Sweatpants Jogger</h3>
                    <div class="price">R$ 599,90</div>
                    <button class="cart-btn" onclick="addToCart(3)">ADICIONAR AO CARRINHO</button>
                </div>
            </div>
    </main>

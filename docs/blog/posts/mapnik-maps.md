---
title: Mapnik Maps
date: 2021-04-18
slug: mapnik-maps
description: >
  Mapnik Maps
categories:
  - Maps
---
# Mapnik Maps

Creating maps in my (very few) spare time.

Trees and bikeways for Barcelona and Firenze. 
Which is the greener?? 

<style>
    .photo-grid-2025 {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 1.5rem;
        max-width: 1200px;
        margin: 0 auto;
        padding: 2rem;
    }
    
    .photo-item {
        position: relative;
        border-radius: 12px;
        overflow: hidden;
        aspect-ratio: 1;
        box-shadow: 0 8px 32px rgba(0,0,0,0.1);
        transition: all 0.3s ease;
        background: #f8f8f8;
        cursor: pointer;
    }
    
    .photo-item:hover {
        transform: translateY(-5px);
        box-shadow: 0 12px 40px rgba(0,0,0,0.15);
    }
    
    .photo-item img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.5s ease;
    }
    
    .photo-item:hover img {
        transform: scale(1.03);
    }
    
    .photo-caption {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        padding: 1.5rem;
        background: linear-gradient(transparent, rgba(0,0,0,0.7));
        color: white;
        opacity: 0;
        transition: opacity 0.3s ease;
    }
    
    .photo-item:hover .photo-caption {
        opacity: 1;
    }
    
    /* Overlay styles */
    .overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.9);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.3s ease;
    }
    
    .overlay.active {
        opacity: 1;
        visibility: visible;
    }
    
    .overlay-img {
        max-width: 90%;
        max-height: 90%;
        object-fit: contain;
        transform: scale(0.9);
        transition: transform 0.3s ease;
    }
    
    .overlay.active .overlay-img {
        transform: scale(1);
    }
    
    .close-btn {
        position: absolute;
        top: 30px;
        right: 30px;
        color: white;
        font-size: 2rem;
        cursor: pointer;
        background: none;
        border: none;
        transition: transform 0.3s ease;
    }
    
    .close-btn:hover {
        transform: rotate(90deg);
    }
    
    @media (min-width: 768px) {
        .photo-grid-2025 {
            grid-template-columns: repeat(4, 1fr);
        }
    }
</style>
<div class="photo-grid-2025">
    <div class="photo-item" onclick="openOverlay('../../images/mapnik_maps_post/bcn_alberi2.jpg', 'Trees in BCN')">
        <img src="../../images/mapnik_maps_post/bcn_alberi2.jpg" alt="Trees in BCN">
        <div class="photo-caption">Trees in BCN</div>
    </div>
    <div class="photo-item" onclick="openOverlay('../../images/mapnik_maps_post/bcn_bici.jpeg', 'Bike Roads in BCN')">
        <img src="../../images/mapnik_maps_post/bcn_bici.jpeg" alt="Bike Roads in BCN">
        <div class="photo-caption">Bike Roads in BCN</div>
    </div>
    <div class="photo-item" onclick="openOverlay('../../images/mapnik_maps_post/firenze_alberi_2.jpeg', 'Trees in Florence')">
        <img src="../../images/mapnik_maps_post/firenze_alberi_2.jpeg" alt="Trees in Florence">
        <div class="photo-caption">Trees in Florence</div>
    </div>
    <div class="photo-item" onclick="openOverlay('../../images/mapnik_maps_post/firenze_bici.jpeg', 'Bike Roads in Florence')">
        <img src="../../images/mapnik_maps_post/firenze_bici.jpeg" alt="Bike Roads in Florence">
        <div class="photo-caption">Bike Roads in Florence</div>
    </div>
</div>
<!-- Image overlay -->
<div class="overlay" id="imageOverlay">
    <button class="close-btn" onclick="closeOverlay()">×</button>
    <img class="overlay-img" id="expandedImg">
    <div class="photo-caption" id="expandedCaption"></div>
</div>

<script>
    function openOverlay(imgSrc, caption) {
        const overlay = document.getElementById('imageOverlay');
        const expandedImg = document.getElementById('expandedImg');
        const expandedCaption = document.getElementById('expandedCaption');
        
        document.getElementById('expandedImg').src = imgSrc;
        document.getElementById('expandedCaption').textContent = caption;
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    }
    
    function closeOverlay() {
        const overlay = document.getElementById('imageOverlay');
        overlay.classList.remove('active');
        document.body.style.overflow = 'auto'; // Re-enable scrolling
    }
    
    // Close overlay when clicking outside image
    document.getElementById('imageOverlay').addEventListener('click', function(e) {
        if (e.target === this) {
            closeOverlay();
        }
    });
    
    // Close overlay with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeOverlay();
        }
    });
</script>
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
    
    @media (min-width: 768px) {
        .photo-grid-2025 {
            grid-template-columns: repeat(4, 1fr);
        }
    }
</style>

<div class="photo-grid-2025">
    <div class="photo-item">
        <img src="../images/bcn_alberi2.jpg" alt="Trees in BCN">
        <div class="photo-caption">Trees in BCN</div>
    </div>
    <div class="photo-item">
        <img src="../images/bcn_bici.jpeg" alt="Bike Roads in BCN">
        <div class="photo-caption">Bike Roads in BCN</div>
    </div>
    <div class="photo-item">
        <img src="../images/firenze_alberi_2.jpeg" alt="Trees in Florence">
        <div class="photo-caption">Trees in Florence</div>
    </div>
    <div class="photo-item">
        <img src="../images/firenze_bici.jpeg" alt="Bike Roads in Florence">
        <div class="photo-caption">Bike Roads in Florence</div>
    </div>
</div>
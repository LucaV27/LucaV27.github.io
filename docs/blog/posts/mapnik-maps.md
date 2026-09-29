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

Trees and bikeways for Barcelona and Florence (Firenze). 
Which is the greener?? 

<div class="photo-grid-2025">
    <div class="photo-item" onclick="openOverlay('/images/mapnik_maps_post/bcn_alberi2.jpg', 'Trees in Barcelona')">
        <img src="/images/mapnik_maps_post/bcn_alberi2.jpg" alt="Trees in Barcelona">
        <div class="photo-caption">Trees in Barcelona</div>
    </div>
    <div class="photo-item" onclick="openOverlay('/images/mapnik_maps_post/bcn_bici.jpeg', 'Bike Roads in Barcelona')">
        <img src="/images/mapnik_maps_post/bcn_bici.jpeg" alt="Bike Roads in Barcelona">
        <div class="photo-caption">Bike Roads in Barcelona</div>
    </div>
    <div class="photo-item" onclick="openOverlay('/images/mapnik_maps_post/firenze_alberi_2.jpeg', 'Trees in Florence')">
        <img src="/images/mapnik_maps_post/firenze_alberi_2.jpeg" alt="Trees in Florence">
        <div class="photo-caption">Trees in Florence</div>
    </div>
    <div class="photo-item" onclick="openOverlay('/images/mapnik_maps_post/firenze_bici.jpeg', 'Bike Roads in Florence')">
        <img src="/images/mapnik_maps_post/firenze_bici.jpeg" alt="Bike Roads in Florence">
        <div class="photo-caption">Bike Roads in Florence</div>
    </div>
</div>
<!-- Image overlay -->
<div class="overlay" id="imageOverlay">
    <button class="close-btn" onclick="closeOverlay()">×</button>
    <img class="overlay-img" id="expandedImg">
    <div class="photo-caption" id="expandedCaption"></div>
</div>

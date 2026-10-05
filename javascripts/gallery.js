// Photo gallery overlay, used by blog posts with a .photo-grid-2025 grid.
// Loaded on every page via extra_javascript, so it does nothing when no overlay is present.

function openOverlay(imgSrc, caption) {
    const overlay = document.getElementById('imageOverlay');
    if (!overlay) return;

    document.getElementById('expandedImg').src = imgSrc;
    document.getElementById('expandedCaption').textContent = caption || '';
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent scrolling
}

function closeOverlay() {
    const overlay = document.getElementById('imageOverlay');
    if (!overlay) return;

    overlay.classList.remove('active');
    document.body.style.overflow = ''; // Re-enable scrolling
}

// Close overlay when clicking outside image
document.addEventListener('click', function(e) {
    if (e.target.id === 'imageOverlay') {
        closeOverlay();
    }
});

// Close overlay with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeOverlay();
    }
});

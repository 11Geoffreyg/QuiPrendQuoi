if(navigator.share){
    document.querySelectorAll('[data-share-url]').forEach(($shareE1) => {
        const $button = document.createElement('button');
        $button.innerHTML = 'Partager';
        $shareE1.parentNode.append($button);
        $button.addEventListener(
            'click',
            share.bind(this, $shareE1));
    });
}
function share($shareE1){
    navigator.share({
        title: $shareE1.getAttribute('data-share-title'),
        text: $shareE1.getAttribute('data-share-text'),
        url: $shareE1.getAttribute('data-share-url'),
    });
}
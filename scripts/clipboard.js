if(navigator.clipboard){
    document.querySelectorAll('[data-clipboard]').forEach(($clipboardE1) => {
        const $button = document.createElement('button');
        $button.innerHTML = 'Copier';
        $clipboardE1.parentNode.append($button);
        $button.addEventListener(
            'click',
            copyToClipboard.bind(this, $clipboardE1, $button)
        );
    });
}else{
    console.log("Pas de support")
}
function copyToClipboard($clipboardE1, $button){
    navigator.clipboard
        .writeText($clipboardE1.getAttribute('data-clipboard'))
        .then(() => {
            $button.innerHTML = "Copié !";
            setTimeout(() => ($button.innerHTML = 'Copier'), 2000);
        })
        .catch((err) => console.warn(err));
}
function affiche(li, div){
    $('li').attr('class', '')
    $(li).attr('class', 'active')
    $('.element').attr('style', 'display:none;')
    $('#'+div).attr('style', 'display:block;')
}
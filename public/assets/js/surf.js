/* -----------------------------------------------
/* MIT license: http://opensource.org/licenses/MIT
/* How to use? : Check the documentation. Button ID attributes are used for the script below.
/* v2.0.0
/* ----------------------------------------------- */
$ = e => document.getElementById(e) || [];
//Alloy Default

$('alloyframe').onclick = function() {
    var frame = document.getElementById("frame");
    var your_string=$('iurl').value;
    if (your_string.indexOf('https://') > -1)
{
   var url = $('iurl').value;
} else{
   var url = "https://"+$('iurl').value;
}
    var det = document.domain;
    var domain = det.replace('www.', '').split(/[/?#]/)[0];
    const origin = btoa(url)
    frame.src = "https://www." + domain + "/prefix/" + origin;
    frame.style['visibility'] = "visible";
    return false;
};

//Alloy Frame

$('alloydefault').onclick = function() {
    var frame = document.getElementById("frame");
    var your_string=$('iurl').value;
    if (your_string.indexOf('https://') > -1)
{
   var url = $('iurl').value;
} else{
   var url = "https://"+$('iurl').value;
}
    var det = document.domain;
    var domain = det.replace('www.', '').split(/[/?#]/)[0];
    const origin = btoa(url)
    window.location.href = "https://www." + domain + "/prefix/" + origin;
    return false;
};


window.onload = function() {
    $('iurl').focus();
}

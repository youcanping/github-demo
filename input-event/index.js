window.onload = function (ev) {
    var inputNode = document.getElementById("input");
    var inputNode_2 = document.getElementById("input_2");
    inputNode.addEventListener('input', function (e) {
        document.getElementById("show_input").innerHTML = e.target.value;
    });
    inputNode_2.addEventListener('compositionstart', function (e) {
        e.target.composing = true;
    });
    inputNode_2.addEventListener('compositionend', function (e) {
       if(!e.target.composing){return false}
       e.target.composing = false;
        trigger(e.target, 'input');
    });
    inputNode_2.addEventListener('input', function (e) {
        if(e.target.composing){
            return false;
        }
        document.getElementById("show_input_2").innerHTML = e.target.value;
    });
    function trigger(el, type) {
        var e = document.createEvent('HTMLEvents');
        e.initEvent(type, true, true);
        el.dispatchEvent(e);
    }
};
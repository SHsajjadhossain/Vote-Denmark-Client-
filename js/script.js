// ============================================
//      textarea-part js script start
// ============================================

$(document).ready(function() {
    var placeholder_text = 'Why do you want to help us? \nHopw old are you?\nTell us about yourself';
    $('textarea').attr('placeholder', placeholder_text);
    $('textarea').focus(function() {
        $('textarea').attr('placeholder', '');
    });


    $('textarea').blur(function() {
        $('textarea').attr('placeholder', placeholder_text);
    });
})

// ============================================
//      textarea-part js script end
// ============================================
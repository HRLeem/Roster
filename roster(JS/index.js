$(function () {
    /* test 
    $('input#shift').mouseover( function() {
        $('#test').css('color', 'red');
    })

    $('#shift_fuck').mouseover( function() {
        $('#test').css('color', 'blue');
    })
    */

    $('#btn').on('click', function () {
        var a = '0';
        var b = '0';
        var c = '0';
        for (var i = 0; i < 15; i++) {

            if ($('input.shift').eq(i).val() == '휴무') {
                if (i % 3 == 0) {
                    a++
                } else if (i % 3 == 1) {
                    b++
                } else if (i % 3 == 2) {
                    c++
                }
            }
        }
        /*
        for (var i = 0; i <3; i++) {

            if ( $('input#shift').eq(i).val() == '휴무' ) {
                j++;
            }
        }
        */
        $('input#total_1').attr('value', a);
        $('input#total_2').attr('value', b);
        $('input#total_3').attr('value', c);
    });

    $('input.shift').on('mousemove', function () {
        // 칼라 바꾸기
        if ($(this).val() == '휴무') {
            $(this).css('background-color', '#dbdbdb');
        }
        if ($(this).val() == '비번') {
            $(this).css('background-color', 'mediumorchid');
        }
        if ($(this).val() == '야간') {
            $(this).css('background-color', 'mediumpurple');
        }
        // 개수 세기
        var a = '0';
        var b = '0';
        var c = '0';
        for (var i = 0; i < 15; i++) {

            if ($('input.shift').eq(i).val() == '휴무') {
                if (i % 3 == 0) {
                    a++
                } else if (i % 3 == 1) {
                    b++
                } else if (i % 3 == 2) {
                    c++
                }
            }
        }
        /*
        for (var i = 0; i <3; i++) {

            if ( $('input#shift').eq(i).val() == '휴무' ) {
                j++;
            }
        }
        */
        $('input#total_1').attr('value', a);
        $('input#total_2').attr('value', b);
        $('input#total_3').attr('value', c);
    });

    $('#test').on('mouseleave', function () {
        $('#test').css('color', 'blue');
    }
    )
});
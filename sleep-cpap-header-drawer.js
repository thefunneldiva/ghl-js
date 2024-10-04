$(document).ready(function () {

    // 0, 1, 2, 3, 5

    $('#section-Q9Sa17sgYw').hide();
    $('#section-u_FAAm2Dbz').hide();
    $('#section-j8-nrrVMrj').hide();
    $('#section-FBZNtuToWj').hide();
    $('#section-fQtCMIxFlq').hide();

    $('.nav-menu li a').eq(0).hover(function () {
        $('#section-Q9Sa17sgYw').slideDown(); // this
        $('#section-u_FAAm2Dbz').slideUp()
        $('#section-j8-nrrVMrj').slideUp()
        $('#section-FBZNtuToWj').slideUp()
        $('#section-fQtCMIxFlq').slideUp()

        $('.nav-menu li a').eq(0).css('color', 'black'); // this
        $('.nav-menu li a').eq(1).css('color', 'rgba(18, 18, 18, .75)')
        $('.nav-menu li a').eq(2).css('color', 'rgba(18, 18, 18, .75)')
        $('.nav-menu li a').eq(3).css('color', 'rgba(18, 18, 18, .75)')
        $('.nav-menu li a').eq(4).css('color', 'rgba(18, 18, 18, .75)')
        $('.nav-menu li a').eq(5).css('color', 'rgba(18, 18, 18, .75)')
        $('#section-KFueEy4Ys1').css('background-color', '#f4f4f4')
    })

    $('.nav-menu li a').eq(1).hover(function () {
        $('#section-Q9Sa17sgYw').slideUp()
        $('#section-u_FAAm2Dbz').slideDown(); // this
        $('#section-j8-nrrVMrj').slideUp()
        $('#section-FBZNtuToWj').slideUp()
        $('#section-fQtCMIxFlq').slideUp()

        $('.nav-menu li a').eq(0).css('color', 'rgba(18, 18, 18, .75)')
        $('.nav-menu li a').eq(1).css('color', 'black');
        $('.nav-menu li a').eq(2).css('color', 'rgba(18, 18, 18, .75)')
        $('.nav-menu li a').eq(3).css('color', 'rgba(18, 18, 18, .75)')
        $('.nav-menu li a').eq(4).css('color', 'rgba(18, 18, 18, .75)')
        $('.nav-menu li a').eq(5).css('color', 'rgba(18, 18, 18, .75)')
        $('#section-KFueEy4Ys1').css('background-color', '#f4f4f4')
    })

    $('.nav-menu li a').eq(2).hover(function () {
        $('#section-Q9Sa17sgYw').slideUp()
        $('#section-u_FAAm2Dbz').slideUp()
        $('#section-j8-nrrVMrj').slideDown(); // this
        $('#section-FBZNtuToWj').slideUp()
        $('#section-fQtCMIxFlq').slideUp()

        $('.nav-menu li a').eq(0).css('color', 'rgba(18, 18, 18, .75)')
        $('.nav-menu li a').eq(1).css('color', 'rgba(18, 18, 18, .75)')
        $('.nav-menu li a').eq(2).css('color', 'black');
        $('.nav-menu li a').eq(3).css('color', 'rgba(18, 18, 18, .75)')
        $('.nav-menu li a').eq(4).css('color', 'rgba(18, 18, 18, .75)')
        $('.nav-menu li a').eq(5).css('color', 'rgba(18, 18, 18, .75)')
        $('#section-KFueEy4Ys1').css('background-color', '#f4f4f4')
    })

    $('.nav-menu li a').eq(3).hover(function () {
        $('#section-Q9Sa17sgYw').slideUp()
        $('#section-u_FAAm2Dbz').slideUp()
        $('#section-j8-nrrVMrj').slideUp()
        $('#section-FBZNtuToWj').slideDown(); // this
        $('#section-fQtCMIxFlq').slideUp()
        
        $('.nav-menu li a').eq(0).css('color', 'rgba(18, 18, 18, .75)')
        $('.nav-menu li a').eq(1).css('color', 'rgba(18, 18, 18, .75)')
        $('.nav-menu li a').eq(2).css('color', 'rgba(18, 18, 18, .75)')
        $('.nav-menu li a').eq(3).css('color', 'black');
        $('.nav-menu li a').eq(5).css('color', 'rgba(18, 18, 18, .75)')
        $('#section-KFueEy4Ys1').css('background-color', '#f4f4f4')
    })

    $('.nav-menu li a').eq(5).hover(function () {
        $('#section-Q9Sa17sgYw').slideUp()
        $('#section-u_FAAm2Dbz').slideUp()
        $('#section-j8-nrrVMrj').slideUp()
        $('#section-FBZNtuToWj').slideUp()
        $('#section-fQtCMIxFlq').slideDown(); // this

        $('.nav-menu li a').eq(0).css('color', 'rgba(18, 18, 18, .75)')
        $('.nav-menu li a').eq(1).css('color', 'rgba(18, 18, 18, .75)')
        $('.nav-menu li a').eq(2).css('color', 'rgba(18, 18, 18, .75)')
        $('.nav-menu li a').eq(3).css('color', 'rgba(18, 18, 18, .75)')
        $('.nav-menu li a').eq(4).css('color', 'rgba(18, 18, 18, .75)')
        $('.nav-menu li a').eq(5).css('color', 'black');
        $('#section-KFueEy4Ys1').css('background-color', '#f4f4f4')
    })

    $('#section-X3s5C4IPtT').hover(function () {
        $('#section-Q9Sa17sgYw').slideUp();
        $('#section-u_FAAm2Dbz').slideUp();
        $('#section-j8-nrrVMrj').slideUp();
        $('#section-FBZNtuToWj').slideUp();
        $('#section-fQtCMIxFlq').slideUp();

        $('.nav-menu li a').eq(0).css('color', 'black')
        $('.nav-menu li a').eq(1).css('color', 'black')
        $('.nav-menu li a').eq(2).css('color', 'black')
        $('.nav-menu li a').eq(3).css('color', 'black')
        $('.nav-menu li a').eq(5).css('color', 'black')
        $('#section-KFueEy4Ys1').css('background-color', 'white')
    })
})
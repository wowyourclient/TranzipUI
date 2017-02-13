(function(){

    // Menu settings
    $("#menuToggle, .menu-close").on('click', function(){
        $('#menuToggle, .menu-close').toggleClass('open');
        if ($( window ).width() < 992) {
            $('#scrollDownPanel, #reSearchPanel, #resultsPanel, .resultsNav, #scrollDownPanel, .mobileOpenUpPanel,' +
                ' .mobileOpenDownPanel').toggleClass('lower');
        }
        $('body').toggleClass('body-push-toleft');
        $('#theMenu').toggleClass('menu-open');
        $('#search').toggleClass('hidden-sm');
    });


    // Modal Settings
    $('#search').bind('keypress', function(e) {
        if(e.keyCode==13){
            e.preventDefault();
            $('#myModal').modal('toggle');
        }
    });
    $('.searchButton').bind('click', function(e) {
        e.preventDefault();
        $('#myModal').modal('toggle');
    });

    $('#scrollDownImg').bind('click', function(e) {
        e.preventDefault();
        $("#mobileTogglePanel").toggleClass("mobileOpenDownPanel mobileOpenUpPanel");
        $("#mobileControls").fadeToggle();
        $("#toggles").fadeToggle();
        if ($('.resultsDesktopNav').is(":visible")) {
            $(".resultsDesktopNav").fadeToggle(function () {
                $(".mobileNav").fadeToggle("fast")
            });
        } else {
            $(".mobileNav").fadeToggle(function () {
                $(".resultsDesktopNav").fadeToggle("fast")
            });
        }
    });

    $('.antiMobileAlert').delay(4000).hide(1000);

    $('#busDropdown').click(function(e){
        e.preventDefault();
        $('.busMenuDiv').toggle();
    });

    $('.adminEditSave').click(function(e){
        e.preventDefault();
        alert("Would you like to confirm your changes?");
    });

    $('#deleteBusButton').click(function(){
        $("#busDeleteState").toggle();
    });
    $('#addBusButton').click(function(){
        $('#addBusForm').toggle();
    });

    $('.deleteBusOption').hover(function(){
        $( "i", this).toggleClass("fa-bus fa-times-circle");
    }).click(function(e){
        e.preventDefault();
        $('#deleteModal').modal('toggle');
    });

})(jQuery);


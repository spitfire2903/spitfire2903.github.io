$(function() {

    function openThanks(){
        $('#contactModal').modal('show');
    }
    
    function reposition() {
        var modal = $(this),
            dialog = modal.find('.modal-dialog');
        modal.css('display', 'block');
        
        // Dividing by two centers the modal exactly, but dividing by three 
        // or four works better for larger screens.
        dialog.css("margin-top", Math.max(0, ($(window).height() - dialog.height()) / 2));
    }
    // Reposition when a modal is shown
    $('.modal').on('show.bs.modal', reposition);
    // Reposition when the window is resized
    $(window).on('resize', function() {
        $('.modal:visible').each(reposition);
    });

    $("input,textarea").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function($form, event, errors) {
            // additional error messages or events
        },
        submitSuccess: function ($form, event) { 
            /* ... */ 
            event.preventDefault();
              
            $.ajax({
                url: "//formspree.io/contato@ricardonm.com.br", 
                method: "POST",
                data: $form.serialize(),
                dataType: "json",
                success: function(){
                    openThanks();
                }
            });
        },
        filter: function() {
            return $(this).is(":visible");
        },
    });

    $("a[data-toggle=\"tab\"]").click(function(e) {
        e.preventDefault();
        $(this).tab("show");
    });

    /*
    $("form#contactForm").submit(function(e){
        e.preventDefault();

        $.ajax({
            url: "//formspree.io/contato@ricardonm.com.br", 
            method: "POST",
            data: $("form#contactForm").serialize(),
            dataType: "json",
            success: function(){
                $('#contactModal').modal('show');
            }
        });
    });
*/
});

/*When clicking on Full hide fail/success boxes */
$('#name').focus(function() {
    $('#success').html('');
});

/*
$.ajax({
    url: "//formspree.io/you@email.com", 
    method: "POST",
    data: {message: "hello!"},
    dataType: "json"
});
*/
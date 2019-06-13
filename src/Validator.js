export default {
    run(errors) {
        for ( let error in errors ) {
            let field = $(document).find(`[name=${error}]`);

            field.addClass('is-invalid')
                 .parent()
                 .append(`<div class="invalid-feedback">${errors[error][0]}</div>`);
        }
    },

    clear() {
        $(document).find(`.is-invalid`).each(function() {
            $(this).removeClass('is-invalid');
        });

        $(document).find('.invalid-feedback').each(function(){
            $(this).remove();
        });
    }
}
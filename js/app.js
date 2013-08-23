$(function() {

    var url = 'http://api.rottentomatoes.com/api/public/v1.0/lists/movies/box_office.json';
    $.ajax({
        url: url,
        data: {
            apiKey: 'hcrurhsttexasrgfm2y6yahm'
        },
        dataType: 'jsonp',
        success: showBoxOffice
    });
    function showBoxOffice(response) {
        var movie, template, $template, markup;
        for (var i = 0; i < response.movies.length; i++) {
                movie = response.movies[i];
                template = $('#tpl-box-office-item');
                $template = Handlebars.compile(template.html());
                markup = $template(movie);
                $('table tbody').append(markup);
        }
    }
});
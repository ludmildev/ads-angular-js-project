
app.directive('onErrorSrc', function() {
    return {
        link: function(scope, element, attrs) {
            if (attrs.ngSrc == '') {
                attrs.$set('src', attrs.onErrorSrc);
            }
        }
    }
});
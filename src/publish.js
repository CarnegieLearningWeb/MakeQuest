var MinicoursePublisher = (function($) {
  var exports = {};

  exports.generateHTML = function generateHTML(options, cb) {
    var baseLevel = options.baseLevel;
    var js = options.js;
    var formInfo = options.formInfo;
    var baseURL = $('<a></a>').attr('href', options.baseURL)[0].href;
    var indexURL = baseURL + 'index.html';

    $.ajax({
      url: indexURL,
      success: function(html) {
        var replace = function(text, replacement) {
          if (html.indexOf(text) == -1)
            throw new Error("Could not find text: " + text);
          html = html.replace(text, replacement);
        };

        try {
          replace(
            '<!-- PUBLISHER: INSERT BASE HREF TAG HERE -->',
            '<base href="' + baseURL + '">'
          );

          replace(
            '// PUBLISHER: INSERT LEVEL CODE HERE',
            js
          );

          replace(
            '<!-- PUBLISHER: INSERT HTML HERE -->',
            formInfo
          );

          replace(
            'data-is-unpublished-game',
            'data-published-game-base-level="' + baseLevel + '"'
          );
        } catch (e) {
          return cb(e);
        }

        cb(null, html);
      },
      error: function() {
        cb(new Error("Unable to retrieve " + indexURL));
      }
    });
  };

  return exports;
})(jQuery);

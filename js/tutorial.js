---
---
(function ($) {
  var $pairs = [
    { text: ' UIView', link: 'https://developer.apple.com/library/ios/documentation/Uikit/reference/UIView_Class/index.html' },
    { text: ' WhirlyGlobeViewController', link: 'reference/ios_2_3/Classes/WhirlyGlobeViewController.html' },
    { text: ' WhirlyGlobeViewControllerDelegate', link: 'reference/ios_2_3/Protocols/WhirlyGlobeViewControllerDelegate.html' },
    { text: ' MaplyScreenMarker', link: 'reference/ios_2_3/Classes/MaplyScreenMarker.html' },
    { text: ' MaplyScreenLabel', link: 'reference/ios_2_3/Classes/MaplyScreenLabel.html' },
    { text: ' MaplyAnnotation', link: 'reference/ios_2_3/Classes/MaplyAnnotation.html' }
  ];
  $.each($pairs, function (i) {
    $(".tutorial-main p:contains('" + $pairs[i].text + "')").each(function() {
      var $this = $(this);
      $this.html(function() {
        return $this.html().replace($pairs[i].text, '<a target="_blank" href="{{ site.baseurl }}/' + $pairs[i].link + '">' + $pairs[i].text + '</a>');
      })
    })
  })
})(jQuery);

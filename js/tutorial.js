---
---
(function ($) {
  var $pairs = [
    { text: ' UIViewController', link: 'https://developer.apple.com/library/ios/documentation/Uikit/reference/UIViewController_Class/index.html' },
    { text: ' UIView', link: 'https://developer.apple.com/library/ios/documentation/Uikit/reference/UIView_Class/index.html' },
    { text: ' WhirlyGlobeViewController', link: 'reference/ios_2_3/Classes/WhirlyGlobeViewController.html' },
    { text: ' MaplyViewController', link: 'reference/ios_2_3/Classes/MaplyViewController.html' },
    { text: ' WhirlyGlobeViewControllerDelegate', link: 'reference/ios_2_3/Protocols/WhirlyGlobeViewControllerDelegate.html' },
    { text: ' MaplyViewControllerDelegate', link: 'reference/ios_2_3/Protocols/MaplyViewControllerDelegate.html' },
    { text: ' MaplyScreenMarker', link: 'reference/ios_2_3/Classes/MaplyScreenMarker.html' },
    { text: ' MaplyScreenLabel', link: 'reference/ios_2_3/Classes/MaplyScreenLabel.html' },
    { text: ' MaplyAnnotation', link: 'reference/ios_2_3/Classes/MaplyAnnotation.html' },
    { text: ' MaplyBaseViewController', link: 'reference/ios_2_3/Classes/MaplyBaseViewController.html' },
    { text: ' MaplyComponentObject', link: 'reference/ios_2_3/Classes/MaplyComponentObject.html' },
    { text: ' MaplyMBTileSource', link: 'reference/ios_2_3/Classes/MaplyMBTileSource.html' },
    { text: ' MaplyRemoteTileSource', link: 'reference/ios_2_3/Classes/MaplyRemoteTileSource.html' },
    { text: ' MaplyQuadImageTilesLayer', link: 'reference/ios_2_3/Classes/MaplyQuadImageTilesLayer.html' },
    { text: ' addScreenLabels', link: 'reference/ios_2_3/Classes/MaplyBaseViewController.html#//api/name/addScreenLabels:desc:' },
    { text: ' MaplyVectorObject', link: 'reference/ios_2_3/Classes/MaplyVectorObject.html' }
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

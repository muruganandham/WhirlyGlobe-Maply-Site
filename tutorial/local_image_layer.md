---
title: Local Image Layer
layout: tutorial
---

Despite your swelling pride, the blank screen is only so satisfying. Let's add a visible layer.  We're going to use the Geography Class example from Mapbox and we'll pull it locally, from device storage.

[picture]

You'll need to have done the [globe](your_first_globe.html) or [map](your_first_map.html) tutorials, either is fine.  Open your HelloEarth project and get ready.

[picture]

### Geography Class MBTiles

Getting data to display is always the interesting part.  Sometimes it's free, sometimes it's not.  You often have to process it.  But for now, there's some in the distribution you can use.

If you set up WhirlyGlobe-Maply as a submodule, look in libs/WhirlyGlobeMap/resources/.  If you used the binary distribution look in BinaryDirectory/resources.  For Cocoapods [do something].  We want to the file geography-class_medres.mbtiles.

Add geography­class_medres.mbtiles to your project by dragging it into HelloEarth in your Project Navigator view. You can create a Resources folder there if you like, but it's not necessary. The same goes for 'Copy items into the destination group's folder' – if you want your project to have its own copy of the file, check that box. What is necessary is to check the 'Add to targets' box for HelloEarth, to ensure that the data is packaged with your app when it is built.

[pictures]

### Adding a Layer

That will get the MBTiles file into bundle.  Now we have to display it.  There are a few steps.

- Create the MaplyMBTileSource to read it.
- Spin up a MaplyQuadImageTilesLayer to display it.
- Start in a useful position on the globe

Now, let's add this as a layer to theViewC. Open MainViewController.m and add the following lines to the end of the viewDidLoad method.

{% highlight objc %}
// this logic makes it work for either globe or map
WhirlyGlobeViewController *globeViewC = nil;
MaplyViewController *mapViewC = nil;
if ([theViewC isKindOfClass:[WhirlyGlobeViewController class]])
    globeViewC = (WhirlyGlobeViewController *)theViewC;
else
    mapViewC = (MaplyViewController *)theViewC;

// we want a black background for a globe, a white background for a map.
theViewC.clearColor = (globeViewC != nil) ? [UIColor blackColor] : [UIColor whiteColor];

// and thirty fps if we can get it ­ change this to 3 if you find your app is struggling
theViewC.frameInterval = 2;

// set up the data source
MaplyMBTileSource *tileSource = [[MaplyMBTileSource alloc]
initWithMBTiles:@"geography­class_medres"];

// set up the layer
MaplyQuadImageTilesLayer *layer = [[MaplyQuadImageTilesLayer alloc] initWithCoordSystem:tileSource.coordSys tileSource:tileSource];
layer.handleEdges = (globeViewC != nil);
layer.coverPoles = (globeViewC != nil);
layer.requireElev = false;
layer.waitLoad = false;
layer.drawPriority = 0;
layer.singleLevelLoading = false;
[theViewC addLayer:layer];

// start up over San Francisco
if (globeViewC != nil)
{
  globeViewC.height = 0.8;
  [globeViewC animateToPosition:MaplyCoordinateMakeWithDegrees(­122.4192,37.7793) time:1.0];
} else {
  mapViewC.height = 1.0;
  [mapViewC animateToPosition:MaplyCoordinateMakeWithDegrees(­122.4192,37.7793) time:1.0];
}
{% endhighlight %}

Now, when you run HelloEarth, you should see a colorful set of countries looking back at you.

[picture]

### Deeper Dive

You might notice there were two interesting objects there.  First was the <a href= "{{ site.baseurl }}/reference/ios_2_3/Classes/MaplyMBTileSource.html" target="_blank">MaplyMBTileSource</a> and the second a <a href= "{{ site.baseurl }}/reference/ios_2_3/Classes/MaplyQuadImageTilesLayer.html" target="_blank">MaplyQuadImageTilesLayer</a>.

The MaplyMBTileSource is responsible for reading the MBTiles file, which is just a big sqlite file with a bunch of images in it.  The MaplyQuadImageTilesLayer is much more complicated.  It responds to changes in viewer position and load the most appropriate image tiles.

<a href= "{{ site.baseurl }}/reference/ios_2_3/Classes/MaplyQuadImageTilesLayer.html" target="_blank">MaplyQuadImageTilesLayers</a> are pretty flexible.  Let's look at some of the properties.

- _handleEdges_ will add some extra geometry to ensure there's no gap when mismatching levels of detail abut. You'll never need this for a flat map, but for a globe or a 3D map, you might.

- _coverPoles_ will create 'caps' for the north and south poles. If you're using a globe, and your projection doesn't go all the way to the poles (this is common), you'll want to turn this on.

- _drawPriority_ sets the priority of geometry created.  You can use this to overlay image layers, with one caveat: it must be set immediately after the layer is created. You can't change it later.

There are plenty of other properties we haven't touched on here.  Browse through the documentation and you'll see a lot more.

This tutorial works equally well on the globe or a flat map.  Let’s move on to remote image tiles.

[Remote Image Layer](remote_image_layer.html)

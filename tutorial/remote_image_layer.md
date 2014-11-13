---
title: Remote Image Layer
layout: tutorial
---

The map only has a few levels of detail. It's pretty small and restrictive.  What we'd like to have is a much bigger map, too big to fit on the device.  That means a remote tile source.

[picture]

Let's add a remote tile source, and take a closer look at the Earth. We'll use the MapQuest Open Aerial tile set. If you end up wanting to use these tiles in an app that you distribute, check out the [requirements](http://developer.mapquest.com/web/products/open/map).

You need to have already worked your way through the [Local Image Layer](local_image_tiles.html) tutorial.  Open the HelloEarth Project to get started.

[picture]

We'll set this up to use either the local or remote tiles. Look for the following lines in your source code.

{% highlight objc %}
// Set up the layer
MaplyMBTileSource *tileSource = [[MaplyMBTileSource alloc] initWithMBTiles:@"geography­class_medres"];

MaplyQuadImageTilesLayer *layer = [[MaplyQuadImageTilesLayer alloc] initWithCoordSystem:tileSource.coordSys tileSource:tileSource];
{% endhighlight %}

Now replace that with these lines instead.

{% highlight objc %}
// add the capability to use the local tiles or remote tiles
bool useLocalTiles = false;

// we'll need this layer in a second
MaplyQuadImageTilesLayer *layer;

if (useLocalTiles)
{
  MaplyMBTileSource *tileSource = [[MaplyMBTileSource alloc] initWithMBTiles:@"geography­class_medres"];
  layer = [[MaplyQuadImageTilesLayer alloc] initWithCoordSystem:tileSource.coordSys tileSource:tileSource];
} else {
  // Because this is a remote tile set, we'll want a cache directory
  NSString *baseCacheDir = [NSSearchPathForDirectoriesInDomains(NSCachesDirectory, NSUserDomainMask, YES) objectAtIndex:0];
  NSString *aerialTilesCacheDir = [NSString stringWithFormat:@"%@/osmtiles/",baseCacheDir];
  int maxZoom = 18;

  // MapQuest Open Aerial Tiles, Courtesy Of Mapquest
  // Portions Courtesy NASA/JPL­Caltech and U.S. Depart. of Agriculture, Farm Service Agency
  MaplyRemoteTileSource *tileSource = [[MaplyRemoteTileSource alloc] initWithBaseURL:@"http://otile1.mqcdn.com/tiles/1.0.0/sat/" ext:@"png" minZoom:0 maxZoom:maxZoom];
  tileSource.cacheDir = aerialTilesCacheDir;
  layer = [[MaplyQuadImageTilesLayer alloc] initWithCoordSystem:tileSource.coordSys tileSource:tileSource];
}
{% endhighlight %}

It's pretty similar to loading a local image tile set.  Just a few changes.
- We want a cache directory for the remote tiles.  It's rude to thrash the server.
- The <a href= "{{ site.baseurl }}/reference/ios_2_3/Classes/MaplyRemoteTileSource.html" target="_blank">MaplyRemoteTileSource</a> serves as the data source.
- We initialize the <a href= "{{ site.baseurl }}/reference/ios_2_3/Classes/MaplyQuadImageTilesLayer.html" target="_blank">MaplyQuadImageTilesLayer</a> as normal.

Build and run, and play with the new HelloEarth. You can zoom in to your heart's content, provided your heart doesn't desire sub­meter resolution.

The only significant difference is the <a href= "{{ site.baseurl }}/reference/ios_2_3/Classes/MaplyRemoteTileSource.html" target="_blank">MaplyRemoteTileSource</a>.  It knows how to talk to remote servers and fetch tiles in the standard [Tile Map Service](http://wiki.openstreetmap.org/wiki/TMS), like the ones provided by [OpenStreetMap](http://www.openstreetmap.org/).

Next up, let’s add some vector data.

[Adding Vector Data](adding_vector_data.html)

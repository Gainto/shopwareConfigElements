# shopwareConfigElements

Shopware 6.5 only

Since shopware's plug-in config only supports some default Elements and some pre-defined components,  
this repository aims to extend it by a bunch of new elements.  
Feel free to add your own or to adjust the existing ones.

Make sure to pre-build the assets and commit the compiled JS as well.

## Install

### install bundle
```require jbl/shopware-config-elements:dev-main```

### activate bundle
open config/bundles.php and add to array:

```Jbl\ShopwareConfigElements\JblShopwareConfigElements::class => ['all' => true]```

### copy assets
```bin/console assets:install```

## Config Elements

### jbl-cta
```
<component name="jbl-cta">
    <name>uniqueName</name>
    <headline>This is a headline</headline>
    <text>Some Text displyed below the headline</text>
    <buttonText>Text displayed on button</buttonText>
    <buttonLink>https://www.something.com/</buttonLink>
    <buttonVariant>primary|ghost|danger|ghost-danger|contrast|context</buttonVariant>
</component>
```


### jbl-simple-text
```
<component name="jbl-simple-text">
    <name>uniqueName</name>
    <text>This element simply displays some regular text.</text>
</component>
```
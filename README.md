# shopwareConfigElements

Shopware 6.5 only

## Install

### install bundle
```require jbl/shopware-config-elements```

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
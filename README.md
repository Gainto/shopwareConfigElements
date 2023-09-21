# Extended Plug-In components for Shopware 6.5
[![Software License](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat)](LICENSE)
[![Packagist Version](https://img.shields.io/packagist/v/jbl/shopware-config-elements.svg?style=flat&include_prereleases)](https://packagist.org/packages/papyrus/symfony-serializer)
[![PHP Version](https://img.shields.io/badge/php-%5E8.0-8892BF.svg?style=flat)](http://www.php.net)

Since shopware's plug-in config only supports some default Elements and some pre-defined components,  
this repository aims to extend it by a bunch of new elements.  
Feel free to add your own or to adjust the existing ones.

Make sure to pre-build the assets and commit the compiled JS as well.

## Install

### install bundle
Install via composer:  
```bash
composer require jbl/shopware-config-elements:dev-main
```

### activate bundle
open ```config/bundles.php``` and add to the end of the array:

```php
Jbl\ShopwareConfigElements\JblShopwareConfigElements::class => ['all' => true]
```

### copy assets
execute in console  
```bash
bin/console assets:install
```

## Config Elements

### jbl-cta
```xml
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
```xml
<component name="jbl-simple-text">
    <name>uniqueName</name>
    <text>This element simply displays some regular text.</text>
</component>
```
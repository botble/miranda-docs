# Upgrade Guide

- [Upgrade to Miranda 1.2](#version_1_2)
- [Upgrade to Miranda 1.1](#version_1_1)

<a name="version_1_2"></a>
## Upgrade to 1.2

- Override folder `app`, `bootstrap`, `config`, `platform`, `public/themes`, `public/vendor` and `resources/lang` from the latest version.

- For developers:
    - Update file `composer.json` and `composer.lock` from new source code.
    - Delete folder `/vendor` then run `composer install` to upgrade vendor packages.
    - Run `php artisan optimize:clear` to clear cache.
    
- For non-developers:
    - Override folder `/vendor` from the latest version.
    - Delete all files in `storage/framework/views` and `storage/framework/cache`.
    
<a name="version_1_1"></a>
## Upgrade to version 1.1
- Override folder `app`, `bootstrap`, `config`, `database`, `platform`, `public/themes`, `public/vendor` and `resources` from the latest version.

- For developers:
    - Update file `composer.json` and `composer.lock` from new source code.
    - Delete folder `/vendor` then run `composer install` to upgrade vendor packages.
    - Run `php artisan migrate` to update database.
    - Run `php artisan optimize:clear` to clear cache.
    - Go to Admin -> Plugins and activate plugin Payment, Razorpay, PayStack.
  
    
- For non-developers:
    - Override folder `/vendor` from the latest version.
    - Go to Admin -> Plugins then deactivate plugin Hotel then re-activate it.
    - Go to Admin -> Plugins and activate plugin Payment, Razorpay, PayStack.
    - Delete all files in `storage/framework/views` and `storage/framework/cache`.
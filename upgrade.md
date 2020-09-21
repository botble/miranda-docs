# Upgrade Guide

- [Upgrade to Miranda 1.1](#version_1_1)

<a name="version_1_1"></a>
## Upgrade to version 1.1
- Override folder `app`, `config`, `database`, `platform`, `public/themes`, `public/vendor` and `resources` from the latest version.

- For developer:
    - Update file `composer.json` and `composer.lock` from new source code.
    - Delete folder `/vendor` then run `composer install` to upgrade vendor packages.
    - Run `php artisan migrate` to update database.
    - Go to Admin -> Plugins and activate plugin Payment, Razorpay, PayStack.
  
    
- For non-developer:
    - Override folder `/vendor` from the latest version.
    - Go to Admin -> Plugins then deactivate plugin Hotel then re-activate it.
    - Go to Admin -> Plugins and activate plugin Payment, Razorpay, PayStack.
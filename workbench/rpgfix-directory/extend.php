<?php

/*
 * This file is part of shriker/rpgfix-directory.
 *
 * Copyright (c) 2020 Jodie Struthers.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

namespace Shriker\RPGfixDirectory;

use Flarum\Extend;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__.'/js/dist/forum.js')
        ->css(__DIR__.'/resources/less/forum.less')
        ->route('/about', 'rpgfix-directory.page.about')
        ->route('/privacy', 'rpgfix-directory.page.privacy'),
    (new Extend\Frontend('admin'))
        ->js(__DIR__.'/js/dist/admin.js')
        ->css(__DIR__.'/resources/less/admin.less'),
    new Extend\Locales(__DIR__ . '/resources/locale')
];

# Ads — totosjourney.wiki

The Native Banner slot after Quick Answer is wired and **turned off**.

`sites/totosjourney/ads.config.ts` sets `enabled` to false. `afterQuickAnswer.id` is empty. `afterQuickAnswer.scriptSrc` is empty. `scriptSrc` on the config is empty. `invokeBase` stays empty. No key from another game is stored here.

`analytics.gaId` in `sites/totosjourney/site.config.ts` is an empty string. The base layout does not load Google Analytics.

The 404 page does not render a slot. When a zone is created for this domain, it belongs in this file and in `ads.config.ts` only.

export const servicesData = [
  // --- MAGENTO ---
  {
    slug: 'magento-development',
    category: 'Magento',
    title: 'Magento development',
    subtitle: 'Custom modules and extensions',
    icon: 'fa-code',
    intro: 'We extend Magento 2 with modules written for your business: new features, checkout changes and admin tools that leave the core untouched, so upgrades stay simple.',
    signs: [
      { title: 'Your team works around the store', desc: 'Staff export orders to spreadsheets or re-type data because Magento doesn’t follow your process.' },
      { title: 'Extensions fight each other', desc: 'Overlapping modules slow pages down or break after every update.' },
      { title: 'Your checkout doesn’t fit your customers', desc: 'B2B buyers, special delivery rules or complex product options don’t fit the standard flow.' },
      { title: 'Upgrades keep getting postponed', desc: 'Custom code was written into the core or the theme, so every update turns into a project.' },
    ],
    whatWeBuild: [
      { title: 'Custom modules', desc: 'New features as standalone modules, from pricing rules to product configurators.' },
      { title: 'Extension customisation', desc: 'Third-party extensions adapted to how you work, and conflicts between them fixed.' },
      { title: 'Checkout and cart', desc: 'Extra steps, delivery options, validation and payment flows.' },
      { title: 'Multi-store setups', desc: 'Store views per country, language and currency, run from one admin.' },
      { title: 'Admin tools', desc: 'Bulk actions, import and export jobs, and the reports your team actually uses.' },
      { title: 'Hyvä frontends', desc: 'Lighter, faster storefronts built on Hyvä, for new stores or as a Luma replacement.' }
    ],
    deepDive: {
      title: 'How we build modules that survive upgrades',
      content: 'Magento is built to be extended. Done properly, new features live in their own modules and hook into the platform through plugins, observers and service contracts, without editing core files or copying large templates. That separation is what keeps a store upgradeable.'
    },
    faqs: [
      { q: 'Will custom modules break when Magento updates?', a: 'We write modules to Magento’s coding standards and keep them out of the core, then test them against each new version before you upgrade.' },
      { q: 'Who owns the code?', a: 'Once the work is paid for, you own the full source code of every custom module we build for you.' }
    ]
  },
  {
    slug: 'hyva-development',
    category: 'Magento',
    title: 'Hyvä storefronts',
    subtitle: 'Fast themes on Hyvä or Luma',
    icon: 'fa-bolt',
    intro: 'Fast, maintainable storefronts on Hyvä or Luma, built from your design or ours, with Core Web Vitals in mind from the first template.',
    signs: [
      { title: 'Pages feel slow on phones', desc: 'Product and category pages take seconds to become usable on mobile data.' },
      { title: 'Core Web Vitals stay red', desc: 'Search Console flags poor loading or responsiveness, however much caching you add.' },
      { title: 'Frontend changes take too long', desc: 'Small design tweaks mean digging through RequireJS, Knockout and layout XML.' },
      { title: 'Your theme is a patchwork', desc: 'Years of overrides make every update risky and every bug hard to trace.' }
    ],
    whatWeBuild: [
      { title: 'New Hyvä themes', desc: 'A storefront built on Hyvä from the start, styled to your brand.' },
      { title: 'Luma to Hyvä', desc: 'An existing Luma theme moved to Hyvä, including your extensions.' },
      { title: 'Extension compatibility', desc: 'Hyvä versions of third-party extensions that only ship Luma templates.' },
      { title: 'Product and category pages', desc: 'Clear product pages, filters and listings that are quick to scan.' },
      { title: 'Cart and checkout', desc: 'Shorter steps and clearer forms between the basket and the order.' },
      { title: 'UI improvements', desc: 'Targeted fixes to navigation, search, mini-cart and forms on an existing theme.' }
    ],
    deepDive: {
      title: 'What changes when you move to Hyvä',
      content: 'Hyvä replaces Magento’s default frontend, built on RequireJS, Knockout and jQuery, with Tailwind CSS and Alpine.js. Pages ship far less JavaScript, so they load and respond faster, especially on mobile.'
    },
    faqs: [
      { q: 'Is Hyvä right for my store?', a: 'If speed and frontend upkeep matter to you, often yes. We check your extensions first, because each one needs a Hyvä-compatible version.' },
      { q: 'Can you work from our designer’s files?', a: 'Yes. We build from your designs, or our designers create them first.' }
    ]
  },
  {
    slug: 'magento-maintenance',
    category: 'Magento',
    title: 'Upgrades and maintenance',
    subtitle: 'Patches, upgrades and fixes',
    icon: 'fa-shield-alt',
    intro: 'Version upgrades, security patches, extension compatibility and bug fixing, on a schedule or whenever you need it.',
    signs: [
      { title: 'You’re more than one release behind', desc: 'Older versions stop receiving security patches, and the jump gets bigger every month you wait.' },
      { title: 'Updates feel risky', desc: 'Nobody wants to touch the store because the last update broke something.' },
      { title: 'Small issues pile up', desc: 'Bugs and change requests sit in a list with no one responsible for clearing it.' },
      { title: 'Customers find problems first', desc: 'A broken checkout or a failed cron job goes unnoticed until someone complains.' }
    ],
    whatWeBuild: [
      { title: 'Version upgrades', desc: 'Your store moved to the current Magento 2.4 release, tested on staging first.' },
      { title: 'Security patches', desc: 'Adobe security patches applied as they are released.' },
      { title: 'Extension updates', desc: 'Third-party extensions updated and tested so they keep working together.' },
      { title: 'Compatibility', desc: 'PHP, OpenSearch and other services kept on versions Magento supports.' },
      { title: 'Bug fixing', desc: 'Errors in checkout, indexing, cron jobs and the admin found and fixed.' },
      { title: 'Safe deployments', desc: 'Changes released with a way back if anything goes wrong.' }
    ],
    deepDive: {
      title: 'What a Magento upgrade really involves',
      content: 'An upgrade is more than running Composer. Each Magento release can change the PHP and OpenSearch versions it needs, retire code that extensions rely on, and alter database structures.'
    },
    faqs: [
      { q: 'How often should a Magento store be updated?', a: 'Apply security patches soon after Adobe releases them, and plan a version upgrade at least once a year.' },
      { q: 'Can you upgrade a store that’s several versions behind?', a: 'Yes. We plan the upgrade in steps and test each one on a staging copy of your store.' }
    ]
  },
  {
    slug: 'magento-integrations',
    category: 'Magento',
    title: 'Integrations and automation',
    subtitle: 'ERP, WMS, CRM and APIs',
    icon: 'fa-network-wired',
    intro: 'Magento connected to your ERP, WMS, CRM, payment and shipping providers, with stock, orders and prices kept in sync automatically.',
    signs: [
      { title: 'Orders are re-typed', desc: 'Someone copies orders from Magento into your ERP or warehouse system.' },
      { title: 'Stock is out of date', desc: 'You sell items that are out of stock, or hide items that are actually available.' },
      { title: 'Prices don’t match', desc: 'Price lists live in the ERP while the store shows something else.' },
      { title: 'Customer service can’t see orders', desc: 'Support agents switch between tools to find an order’s status.' }
    ],
    whatWeBuild: [
      { title: 'ERP and WMS', desc: 'Products, stock and orders flowing between Magento, your ERP and your warehouse.' },
      { title: 'CRM and help desk', desc: 'Customer and order data in your CRM, and order details inside Zendesk.' },
      { title: 'Payments and shipping', desc: 'Payment gateways and shipping carriers connected to checkout and fulfilment.' },
      { title: 'Custom APIs', desc: 'REST and GraphQL endpoints for apps, partners and marketplaces.' },
      { title: 'Scheduled jobs', desc: 'Imports, exports and price updates that run on their own and alert you when they fail.' },
      { title: 'AI-assisted workflows', desc: 'Automations such as AI-assisted product translations for multi-language stores.' }
    ],
    deepDive: {
      title: 'What makes an integration reliable',
      content: 'Most integrations work on day one. The difference shows months later, when an API changes, a job times out or a product arrives with missing data. A reliable integration expects those failures.'
    },
    faqs: [
      { q: 'Can you connect our ERP?', a: 'Most likely. If it has an API or a file export, we can connect it. Tell us which system you use.' },
      { q: 'What happens when a sync fails?', a: 'We log failed jobs, retry them and alert you, so orders and stock don’t drift out of sync unnoticed.' }
    ]
  },
  {
    slug: 'magento-performance',
    category: 'Magento',
    title: 'Performance and technical SEO',
    subtitle: 'Speed, caching and indexing',
    icon: 'fa-tachometer-alt',
    intro: 'Faster pages and a cleaner index: Varnish and Redis tuning, database optimisation, Core Web Vitals, structured data and indexing fixes.',
    signs: [
      { title: 'Category pages take seconds', desc: 'Especially with filters applied or on large catalogues.' },
      { title: 'The admin is slow too', desc: 'Saving products, reindexing or opening the order grid takes far too long.' },
      { title: 'Traffic peaks bring errors', desc: 'Campaigns and sales cause timeouts and 503 errors instead of orders.' },
      { title: 'Core Web Vitals are poor', desc: 'Search Console marks your key page types as poor or in need of improvement.' }
    ],
    whatWeBuild: [
      { title: 'Caching', desc: 'Varnish full-page cache and Redis set up and tuned for your catalogue.' },
      { title: 'Database', desc: 'Slow queries, oversized tables and stuck indexers found and fixed.' },
      { title: 'Core Web Vitals', desc: 'Images, scripts and fonts trimmed so pages load and respond faster.' },
      { title: 'On-site search', desc: 'OpenSearch tuned so search results stay fast and relevant.' },
      { title: 'Technical SEO', desc: 'Clean URLs, canonical tags, sitemaps and structured data.' },
      { title: 'Multi-store SEO', desc: 'Correct hreflang tags so Google shows the right store in each country.' }
    ],
    deepDive: {
      title: 'Where Magento speed is usually lost',
      content: 'Magento slowness usually comes from a handful of causes: a full-page cache that isn’t hitting, heavy frontend JavaScript, slow or oversized database tables, and third-party scripts that block the page from rendering.'
    },
    faqs: [
      { q: 'How do you measure speed?', a: 'With real-visitor data from Google’s Core Web Vitals report, plus lab tests on your home, category, product and checkout pages.' },
      { q: 'Will a faster store rank higher?', a: 'Page experience is one of many signals Google uses, so speed helps but isn’t a guarantee.' }
    ]
  },

  // --- SERVERS AND SECURITY ---
  {
    slug: 'server-management',
    category: 'Servers and security',
    title: 'Server management',
    subtitle: 'Linux, PHP-FPM, MySQL, Redis',
    icon: 'fa-server',
    intro: 'Linux administration for Magento hosting: PHP-FPM, MySQL and MariaDB, Redis, Varnish and cron, with monitoring that catches load before it becomes an outage.',
    signs: [
      { title: 'Load spikes take the store down', desc: 'CPU or memory runs out during sales, imports or bot traffic.' },
      { title: 'Cron jobs fail silently', desc: 'Indexers, emails and imports stop running and nobody notices for days.' },
      { title: 'Nobody tunes the server', desc: 'The host keeps it online, but no one configures it for Magento.' },
      { title: 'Disks fill up', desc: 'Logs, sessions and old backups grow until the store stops working.' }
    ],
    whatWeBuild: [
      { title: 'Server setup', desc: 'New servers configured for Magento from the start.' },
      { title: 'Resource monitoring', desc: 'CPU, memory and disk tracked, with alerts before limits are reached.' },
      { title: 'PHP-FPM tuning', desc: 'Worker pools sized to your traffic, so requests don’t queue at busy times.' },
      { title: 'Database administration', desc: 'MySQL and MariaDB configured, tuned and kept healthy.' },
      { title: 'Cron jobs', desc: 'Scheduled tasks that run on time and don’t pile up.' },
      { title: 'Troubleshooting', desc: 'The cause of slowdowns, crashes and overloads found and fixed.' }
    ],
    deepDive: {
      title: 'What a well-run Magento server looks like',
      content: 'Magento relies on several services that all need care: PHP-FPM, a MySQL or MariaDB database, Redis for cache and sessions, Varnish for full-page cache, OpenSearch for search, and cron for background work.'
    },
    faqs: [
      { q: 'Do you work with our current hosting?', a: 'Yes, as long as we have server access. If your current setup holds the store back, we can help you move.' },
      { q: 'When are you available if something breaks?', a: 'Stores on monthly plans are monitored around the clock, and critical issues at weekends and holidays are covered too.' }
    ]
  },
  {
    slug: 'server-security',
    category: 'Servers and security',
    title: 'Security and hardening',
    subtitle: 'Cloudflare, firewalls and access',
    icon: 'fa-shield-alt',
    intro: 'Cloudflare WAF and rate limits, firewall rules, IP restrictions, admin access control and security updates that keep bots and attackers away from your checkout.',
    signs: [
      { title: 'Security patches are missing', desc: 'Known vulnerabilities stay open long after Adobe has released the fix.' },
      { title: 'The admin is wide open', desc: 'It sits on the default path, without two-factor login or IP limits.' },
      { title: 'Bots eat your resources', desc: 'Scrapers and login-guessing bots slow the store down for real shoppers.' },
      { title: 'Too many people have access', desc: 'Former staff and old agencies still have admin or server accounts.' }
    ],
    whatWeBuild: [
      { title: 'Cloudflare WAF', desc: 'Firewall rules and managed rulesets in front of your store.' },
      { title: 'Rate limiting', desc: 'Limits that stop bots and brute-force attempts without blocking shoppers.' },
      { title: 'Firewall and IP rules', desc: 'Server firewalls and IP allow-lists for the admin, SSH and databases.' },
      { title: 'Admin protection', desc: 'Two-factor login, a private admin URL and the right role for each user.' },
      { title: 'Security updates', desc: 'Operating system, PHP and Magento security patches applied promptly.' },
      { title: 'Vulnerability fixes', desc: 'Known weaknesses found and fixed before anyone can use them.' }
    ],
    deepDive: {
      title: 'How Magento stores usually get attacked',
      content: 'Most attacks aren’t personal. Automated tools scan the internet for stores with known vulnerabilities, weak admin logins or outdated extensions, and exploit them at scale. Defence comes in layers.'
    },
    faqs: [
      { q: 'Will Cloudflare block Google or my customers?', a: 'Not when it’s set up properly. We exempt verified search engine bots and tune the rules so real shoppers get through.' },
      { q: 'Is Cloudflare enough on its own?', a: 'No. It blocks a lot of automated traffic, but patching, access control and server hardening are still needed behind it.' }
    ]
  },

  // --- BEYOND MAGENTO ---
  {
    slug: 'web-development',
    category: 'Beyond Magento',
    title: 'Custom web development',
    subtitle: 'PHP apps, APIs and websites',
    icon: 'fa-laptop-code',
    intro: 'PHP and JavaScript applications, APIs, databases and business websites, built around how your business actually works.',
    signs: [
      { title: 'Your process doesn’t fit the tool', desc: 'Your team bends its way of working to match software built for someone else.' },
      { title: 'Data lives in spreadsheets', desc: 'Important information is spread across files only one person understands.' },
      { title: 'Plugins keep piling up', desc: 'A site held together by many plugins is slow and hard to update.' },
      { title: 'Systems don’t talk to each other', desc: 'The same data is entered in several places by hand.' }
    ],
    whatWeBuild: [
      { title: 'Business websites', desc: 'Fast websites for companies and brands that your team can update.' },
      { title: 'Web applications', desc: 'Portals, booking systems and internal tools built around your process.' },
      { title: 'APIs', desc: 'REST APIs that connect your systems, apps and partners.' },
      { title: 'Databases', desc: 'Database design, migrations and reporting.' },
      { title: 'Admin areas', desc: 'Simple admin panels so your team can manage content and data.' },
      { title: 'Ongoing support', desc: 'Updates, fixes and improvements to sites we or others built.' }
    ],
    deepDive: {
      title: 'Custom build or off-the-shelf?',
      content: 'Custom software isn’t always the answer. If a reliable product already does what you need, using it is usually faster and cheaper. A custom build makes sense when your process is what sets you apart.'
    },
    faqs: [
      { q: 'Do you build on a CMS or from scratch?', a: 'Whichever fits. A CMS suits content-heavy sites; custom PHP suits tools and portals with their own logic.' },
      { q: 'Can you work on our existing website?', a: 'Yes. We review the code first, then fix, extend or rebuild where it makes sense.' }
    ]
  },
  {
    slug: 'web-design',
    category: 'Beyond Magento',
    title: 'Web design and UI/UX',
    subtitle: 'Interfaces and landing pages',
    icon: 'fa-pencil-ruler',
    intro: 'Responsive interfaces, landing pages and visual design that balances usability with your brand.',
    signs: [
      { title: 'Visitors leave quickly', desc: 'People land on key pages and leave without finding what they came for.' },
      { title: 'It doesn’t work well on phones', desc: 'Text is small, buttons are cramped and forms are hard to fill in.' },
      { title: 'It no longer looks like you', desc: 'Your products, prices or positioning have moved on and the site hasn’t.' },
      { title: 'Every change needs a developer', desc: 'Simple updates to pages or banners turn into small projects.' }
    ],
    whatWeBuild: [
      { title: 'Websites', desc: 'Page layouts for desktop and mobile, from the home page to contact forms.' },
      { title: 'eCommerce UX', desc: 'Product pages, filters, cart and checkout that are easy to use.' },
      { title: 'Landing pages', desc: 'Focused pages for campaigns and product launches.' },
      { title: 'Design systems', desc: 'Colours, type and components your developers can reuse.' },
      { title: 'Prototypes', desc: 'Clickable prototypes to test ideas before anything is built.' },
      { title: 'Redesigns', desc: 'An existing site improved without starting from scratch.' }
    ],
    deepDive: {
      title: 'How we approach a redesign',
      content: 'A good redesign starts with what isn’t working, not with colours. We look at your analytics, your most visited pages and the questions customers ask, so the new design solves real problems.'
    },
    faqs: [
      { q: 'Do you also build what you design?', a: 'Yes. The same team designs and develops, so nothing gets lost between the two.' },
      { q: 'Can you work with our brand guidelines?', a: 'Yes. We design within your existing brand, or help you define one.' }
    ]
  },
  {
    slug: 'digital-marketing',
    category: 'Beyond Magento',
    title: 'Digital marketing',
    subtitle: 'Google Ads, Meta Ads and SEO',
    icon: 'fa-bullhorn',
    intro: 'Google Ads, Facebook Ads and SEO campaigns that bring the right visitors to your store.',
    signs: [
      { title: 'Ad spend rises, sales don’t', desc: 'Campaigns cost more each month without a matching rise in orders.' },
      { title: 'You can’t tell what works', desc: 'Conversions aren’t tracked properly, so every decision is a guess.' },
      { title: 'Organic traffic has stalled', desc: 'Rankings slipped after a redesign, or have been flat for a year.' },
      { title: 'Product feeds get rejected', desc: 'Google Merchant Center or Meta flags errors and products stop showing in ads.' }
    ],
    whatWeBuild: [
      { title: 'Google Ads', desc: 'Search and Shopping campaigns focused on your best-selling products.' },
      { title: 'Facebook and Instagram ads', desc: 'Campaigns that reach new customers and bring back past visitors.' },
      { title: 'SEO', desc: 'Keyword research and on-page improvements that grow organic traffic.' },
      { title: 'Content writing', desc: 'Product descriptions and articles written for your customers and for search.' },
      { title: 'Tracking', desc: 'Google Analytics 4, conversion tracking and product feeds set up correctly.' },
      { title: 'Reporting', desc: 'Clear reports on spend, sales and what to change next.' }
    ],
    deepDive: {
      title: 'Why marketing and development work better together',
      content: 'Many marketing problems are technical underneath: broken conversion tracking, slow landing pages, product feeds with missing data, or pages Google can’t index properly. We fix the cause, then run campaigns.'
    },
    faqs: [
      { q: 'How soon will I see results?', a: 'Paid ads can bring traffic within days. SEO takes longer, often months, because search engines need time to re-crawl and re-evaluate your pages.' },
      { q: 'Do you run ads in our own accounts?', a: 'Yes. Campaigns run in your own Google and Meta accounts, so you keep full access and all the history.' }
    ]
  },
  {
    slug: 'graphic-design',
    category: 'Beyond Magento',
    title: 'Graphic design',
    subtitle: 'Logos, print and brand',
    icon: 'fa-palette',
    intro: 'Logos, brand identity, print design and visual assets that make your business look professional across every channel.',
    signs: [
      { title: 'Inconsistent branding', desc: 'Different logos, colours and fonts used across your website, social media and print.' },
      { title: 'DIY design looks DIY', desc: 'Important business documents and ads look unpolished compared to competitors.' },
      { title: 'Print files get rejected', desc: 'Printers reject files because they aren’t set up correctly for bleed, colour or resolution.' },
      { title: 'No brand guidelines', desc: 'You can’t hand a designer your assets and expect them to match your existing style.' }
    ],
    whatWeBuild: [
      { title: 'Logo design', desc: 'Unique logos designed to work in both print and digital formats.' },
      { title: 'Brand identity', desc: 'Typography, colour palettes, and usage guidelines.' },
      { title: 'Print design', desc: 'Business cards, brochures, flyers, and packaging.' },
      { title: 'Social media assets', desc: 'Templates and graphics for consistent social media presence.' },
      { title: 'Marketing materials', desc: 'Banners, pitch decks, and advertising graphics.' },
      { title: 'Brand guidelines', desc: 'A rulebook for how your brand looks and sounds everywhere.' }
    ],
    deepDive: {
      title: 'Why brand consistency matters',
      content: 'Your brand is more than just a logo. It is the visual and emotional identity that helps customers recognize and trust your business. Consistent graphic design across all touchpoints builds professionalism and credibility.'
    },
    faqs: [
      { q: 'What file formats do I get?', a: 'You receive vector source files (AI, EPS, SVG) for scalable printing, plus high-resolution PNG and JPG files for digital use.' },
      { q: 'Do I own the rights to the designs?', a: 'Yes, upon final payment, you receive full ownership and copyright of all custom designs created for your brand.' }
    ]
  }
];
import HeaderPrimary from 'flarum/components/HeaderPrimary';
import IndexPage from 'flarum/components/IndexPage';
import LinkButton from 'flarum/components/LinkButton';
import { extend } from 'flarum/extend';
import AboutPage from './components/AboutPage';
import PrivacyPage from './components/PrivacyPage';

/**
 * Extend top primary navigation
 */
extend(HeaderPrimary.prototype, 'items', function(items) {
  items.add('about', LinkButton.component({ children: 'About', href: app.route('about') }));
  items.add('browse', LinkButton.component({ children: 'Browse Games', href: app.route('about') }));
});

/**
 * Extend sidebar navigation
 */
extend(IndexPage.prototype, 'navItems', function(items) {

  items.add('about', LinkButton.component({
      icon: 'fas fa-info',
      children: 'About',
      href: app.route('about'),
  }));

});

/**
 * Initialize custom pages with their routes
 */
app.initializers.add('shriker/rpgfix-directory', () => {
  app.routes.about = {path: '/about', component: AboutPage.component()};
  app.routes.privacy = {path: '/privacy', component: PrivacyPage.component()};
});

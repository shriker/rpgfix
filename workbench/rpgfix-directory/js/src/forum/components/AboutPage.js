import Page from 'flarum/components/Page';
import IndexPage from 'flarum/components/IndexPage';
import listItems from 'flarum/helpers/listItems';

export default class AboutPage extends Page {
  init() {
    super.init();
  }

  view() {

    app.history.push('about', 'About');
    app.setTitle('About');
    $('meta[name=description]').attr('content', '');

    return (
      <div className="Pages">
        {IndexPage.prototype.hero()}
        <div className="Pages-container container">
          <div className="sideNavContainer">
            <nav className="AboutPage-nav IndexPage-nav sideNav" config={IndexPage.prototype.affixSidebar}>
              <ul>{listItems(IndexPage.prototype.sidebarItems().toArray())}</ul>
            </nav>
            <article className="Pages-content IndexPage-results sideNavOffset">

              <h1>About</h1>

              <p>RPGfix was born because of a need to sort through and categorize the multitudes of RPG sites that blink into existence every day — from the massive multi-server games to the smaller niche games.</p>

              <h2>What's Allowed?</h2>
              <p>RPGfix allows any game that implements role-playing elements to become listed in the directory. Generally if the site contains a role-playing medium of some sort (chat, forum, software client, avatars, etc.), it will be accepted.</p>

              <p>This includes, but is not limited to: Play-by-Post forum games, PBeMs, MMORPGs, PBBGs, simulations, and virtual pet sites.</p>

              <h2>Directory Rules</h2>
              <ol>
              <li>You must write <b>at least ten</b> forum posts in order to obtain permission to submit your site(s).</li>
              <li>Your site <b>must</b> be a role-playing game.</li>
                  <li>If you decide to list a site in the directory, we kindly request that you place a link back to RPGfix on your site.</li>
              </ol>

              <h2>Benefits of Using RPGfix</h2>
              <ol>
              <li>RPGfix is a niche directory that caters toward online and offline role-playing games. While it allows RPGs of all types to be listed, RPGfix’s primary audience appears to be with Play-by-Post/forum-based RPGs. As a result, Play-by-Post games that are listed tend to be received better.</li>
              <li>We have our directory on our domain root and are very SEO friendly.</li>
              <li>We use plain HTML links (no script redirects, rel="nofollow" or other schemas) to ensure you get the most out of your backlink in regards to page rank.</li>
              <li>We do not disallow directory pages with robots.txt or a meta robots directive.</li>
              <li>We do not discriminate based on site platform. JCINK, MyBB, they're all welcome!</li>
              <li>The ability to give your games tags so that potential players may find them easier.</li>
              <li>We do not bury listings 40 pages deep for a single category.</li>
              <li>All site owners have the ability to define their game's <a href="http://rpgrating.com/">Universal RPG Rating</a>.</li>
              <li>If your site dies or becomes inactive, it will be moved into RPGfix’s cemetery for Defunct sites. Old players then have a place to reminisce about their past favourite games.</li>
              </ol>

            </article>
          </div>
        </div>
      </div>
      );
  }
}

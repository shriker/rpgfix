import Page from 'flarum/components/Page';
import IndexPage from 'flarum/components/IndexPage';
import listItems from 'flarum/helpers/listItems';

export default class PrivacyPage extends Page {
  init() {
    super.init();
  }

  view() {

    app.history.push('privacy', 'Privacy Policy');
    app.setTitle('Privacy Policy');
    $('meta[name=description]').attr('content', 'Be mindful of the information you share online.');

    return (
      <div className="Pages">
        {IndexPage.prototype.hero()}
        <div className="Pages-container container">
          <div className="sideNavContainer">
            <nav className="PrivacyPage-nav IndexPage-nav sideNav" config={IndexPage.prototype.affixSidebar}>
              <ul>{listItems(IndexPage.prototype.sidebarItems().toArray())}</ul>
            </nav>
            <article className="Pages-content IndexPage-results sideNavOffset">

              <h1>Privacy Policy</h1>

              <p><b>RPGfix respects your privacy.</b> We will never sell your email addresses.  Spammers can go suck it.</p>

              <p>This Privacy Policy describes how your personal information is collected, used, and shared when you visit RPGfix.</p>

              <h2>PERSONAL INFORMATION WE COLLECT</h2>

              <p>When using services provided by RPGfix, we may require some or all of the following information:</p>
              <ul>
              <li>Username</li>
              <li>Email address</li>
              <li>Birth date</li>
              </ul>

              <p>When you visit the Site, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device.</p>
              <ul>
              <li>Internet Protocol (IP) address</li>
              <li>Geographical location</li>
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Referral source</li>
              <li>Length of visit, page views, website navigation and any other related browsing activity</li>
              </ul>

              <p>We collect Device Information using the following technologies:</p>
              <ul>
              <li><b>Cookies</b> are data files that are placed on your device or computer and often include an anonymous unique identifier. See our <a href="/help/cookies">Cookie Usage</a> page for more detailed cookie usage information on RPGfix.</li>
              <li><b>Log files</b> track actions occurring on the Site, and collect data including your IP address, browser type, Internet service provider, referring/exit pages, and date/time stamps.</li>
              <li><b>Web beacons</b>, “tags,” and “pixels” are electronic files used to record information about how you browse the Site.</li>
              </ul>

              <h2>WHAT WE DO WITH THE INFORMATION WE COLLECT</h2>

              <p>RPGfix uses the information we collect for the following reasons:</p>
              <ul>
              <li>To honour our contractual commitments to you</li>
              <li>To log you into RPGfix</li>
              <li>Providing a safe and enjoyable user experience</li>
              <li>Confirmation of email address for account validity, security alerts, and relevant user-specified communications</li>
              <li>Customer service</li>
              <li>Improving and optimizing RPGfix's design, user experience, and placement of features</li>
              <li>Legal compliance</li>
              </ul>

              <blockquote>
              <h3>DATA PROCESSING</h3>
              <p>We are processing your information in order to fulfill contracts we might have with you (for example if you make an order through the Site), or otherwise to pursue our legitimate business interests listed above. Additionally, please note that your information will be transferred outside of Europe, including to Canada and the United States.</p>
              </blockquote>

              <h2>MINORS</h2>
              <p>RPGfix is intended for users age 13 and over. We do not knowingly collect personal information from children under the age of 13. We are compliant with the <a href="http://www.coppa.org/comply.htm" rel="nofollow">Children's Online Privacy Protection Act</a> and the <a href="http://www.the-cma.org/?WCE=C=47|K=225849#11" rel="nofollow">Canadian Marketing Agency</a>. If we learn that we are engaged in that processing with such users, we will halt such processing and will take reasonable measures to promptly remove applicable information from our records.</p>

              <h2>LINKS TO OTHER SITES</h2>
              <p>RPGfix is not responsible for the content of external internet sites and privacy of any information which you provide whilst visiting such sites. You are advised to read the privacy policy of external sites before disclosing any personal information.</p>

              <h2>YOUR DATA RIGHTS AND CHOICES</h2>

              <p>When using the RPGfix forum, you may choose to limit public viewing of applicable personal information through the settings located in the Privacy section of your account.</p>

              <p>RPGfix will not sell, distribute or lease your personal information to third parties unless we have your explicit permission or are required by law to do so.</p>

              <p>You have the right to access personal information we hold about you and to ask that your personal information be corrected, updated, or deleted. If you would like to exercise this right, please contact us through the contact information below.</p>

              <h2>DATA RETENTION AND YOUR RIGHT TO BE FORGOTTEN</h2>
              <p>We generally retain personal data for so long as it may be relevant to the purposes identified herein, or until you ask us to delete this information. To dispose of personal data, we may anonymize it, delete it or take other appropriate steps. Data may persist in copies made for backup and business continuity purposes for additional time.</p>

              <h2>SECURITY</h2>
              <p>While we do our best and take reasonable steps to protect your personal information, we cannot guarantee the security of any information that you transmit to RPGfix and you are solely responsible for maintaining the secrecy of any passwords or other account information.</p>

              <h2>CHANGES TO THIS PRIVACY POLICY</h2>
              <p>We reserve the right to update or modify this Privacy Policy at any time and from time to time without prior notice. Please review this policy periodically, and especially before you provide any information.</p>

              <h2>CONTACT US</h2>
              <p>For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please contact us by <a href="/misc/contact">email</a>.

              </p>


            </article>
          </div>
        </div>
      </div>
      );
  }
}

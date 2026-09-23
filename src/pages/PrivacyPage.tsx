const SUPPORT_EMAIL = 'akyannyan8@gmail.com';
const MESSENGER = 'https://m.me/akyannyan.astrology';
const LAST_UPDATED = '24 September 2026';

export function PrivacyPage() {
  return (
    <article className="doc-page">
      <div className="container">
        <header className="doc-page__intro">
          <h1>Privacy Policy</h1>
          <p className="doc-page__meta">Last updated: {LAST_UPDATED}</p>
          <p className="doc-page__my-lead">
            ဤမူဝါဒသည် Akyannyan (အကြံဉာဏ်) မိုဘိုင်းအက်ပ်နှင့် ဆက်စပ်ဝန်ဆောင်မှုများအတွက်
            ဖြစ်ပါသည်။ အောက်တွင် အင်္ဂလိပ်ဖြင့် အသေးစိတ် ဖော်ပြထားပါသည်။
          </p>
        </header>

        <nav className="doc-toc" aria-label="On this page">
          <p>Contents</p>
          <ol>
            <li>
              <a href="#who">Who we are</a>
            </li>
            <li>
              <a href="#data">Information we collect</a>
            </li>
            <li>
              <a href="#use">How we use information</a>
            </li>
            <li>
              <a href="#auth">Sign-in with Google &amp; Facebook</a>
            </li>
            <li>
              <a href="#share">Sharing</a>
            </li>
            <li>
              <a href="#retain">Retention &amp; security</a>
            </li>
            <li>
              <a href="#rights">Your choices</a>
            </li>
            <li>
              <a href="#children">Children</a>
            </li>
            <li>
              <a href="#changes">Changes</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ol>
        </nav>

        <div className="doc-body">
          <h2 id="who">1. Who we are</h2>
          <p>
            <strong>Akyannyan</strong> (“we”, “us”) provides a mobile application for Myanmar
            astrology guidance — including birth charts, Oracle answers, tarot, compatibility,
            day selection, and related timing features. This Privacy Policy explains how we
            handle personal data when you use the Akyannyan app and related services.
          </p>

          <h2 id="data">2. Information we collect</h2>
          <p>Depending on how you use the app, we may process:</p>
          <ul>
            <li>
              <strong>Account &amp; identity</strong> — name, email address, profile photo URL,
              and provider IDs when you sign in with Google or Facebook; or membership / login
              codes issued for your account.
            </li>
            <li>
              <strong>Birth profile</strong> — birth date, time, place, and coordinates you
              provide so we can calculate charts and day signs.
            </li>
            <li>
              <strong>App content you create</strong> — readings, Oracle conversations, saved
              people, preferences (such as theme or notification settings), and similar in-app
              data.
            </li>
            <li>
              <strong>Points &amp; purchases metadata</strong> — ledger entries for credits /
              spends (for example top-up codes or feature commits). We do not store full payment
              card numbers in the app; purchases may be arranged via support channels.
            </li>
            <li>
              <strong>Device &amp; notifications</strong> — push notification tokens and basic
              device/app diagnostics needed to deliver alerts you enable (for example transit
              reminders).
            </li>
            <li>
              <strong>Technical logs</strong> — limited server logs (timestamps, error traces,
              IP-related security signals) to keep the service reliable and secure.
            </li>
          </ul>

          <h2 id="use">3. How we use information</h2>
          <p>We use personal data to:</p>
          <ul>
            <li>create and secure your account;</li>
            <li>generate astrology features and save your history;</li>
            <li>manage points, memberships, and feature access;</li>
            <li>send notifications you opt into;</li>
            <li>provide customer support;</li>
            <li>prevent abuse, debug issues, and improve reliability;</li>
            <li>comply with legal obligations where applicable.</li>
          </ul>
          <p>
            We do <strong>not</strong> sell your personal information. Astrology results are
            for personal guidance and reflection — not a substitute for professional medical,
            legal, or financial advice.
          </p>

          <h2 id="auth">4. Sign-in with Google &amp; Facebook</h2>
          <p>
            If you choose <strong>Sign in with Google</strong>, Google authenticates you and
            may share with us a verified email, name, profile image, and a unique Google user
            ID (via an ID token). We verify that token on our servers and create or link your
            Akyannyan account.
          </p>
          <p>
            If you choose <strong>Facebook</strong> sign-in, we receive an access token and
            basic public profile fields needed to identify your account, subject to Facebook’s
            permissions and policies.
          </p>
          <p>
            Your use of Google or Facebook is also governed by their respective privacy
            policies. You can revoke app access anytime in your Google or Facebook account
            settings.
          </p>

          <h2 id="share">5. Sharing</h2>
          <p>We may share data only with:</p>
          <ul>
            <li>
              <strong>Infrastructure providers</strong> that host our API, database, or file
              storage under contracts that limit use to providing the service;
            </li>
            <li>
              <strong>Authentication providers</strong> (Google, Facebook) as part of sign-in
              flows you initiate;
            </li>
            <li>
              <strong>AI model providers</strong> when you use Oracle or AI-assisted readings —
              we send the prompts needed to generate a response, not your payment card data;
            </li>
            <li>
              authorities when required by law, or to protect rights, safety, and the integrity
              of the service.
            </li>
          </ul>

          <h2 id="retain">6. Retention &amp; security</h2>
          <p>
            We keep account and profile data while your account is active and for a reasonable
            period afterward if needed for support, disputes, or legal compliance. Soft-deleted
            records may remain inaccessible in everyday use while retained for integrity of the
            ledger or recovery.
          </p>
          <p>
            We apply industry-standard safeguards (encrypted transport, access controls, and
            least-privilege server practices). No method of transmission or storage is 100%
            secure; please use a device you trust.
          </p>

          <h2 id="rights">7. Your choices</h2>
          <p>You may:</p>
          <ul>
            <li>update birth profile and preferences in the app;</li>
            <li>disable push notifications in the app or OS settings;</li>
            <li>disconnect Google / Facebook access from those providers;</li>
            <li>
              request access, correction, or deletion of your account data by contacting us at{' '}
              <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>.
            </li>
          </ul>
          <p>
            We will respond within a reasonable time. Some data may be retained if we must keep
            it for legal or security reasons (for example fraud prevention on point ledgers).
          </p>

          <h2 id="children">8. Children</h2>
          <p>
            Akyannyan is not directed at children under 13 (or the minimum age required in your
            country). If you believe a child provided personal data, contact us and we will
            take appropriate steps.
          </p>

          <h2 id="changes">9. Changes to this policy</h2>
          <p>
            We may update this Privacy Policy from time to time. The “Last updated” date at the
            top will change when we do. Continued use of the app after an update means you
            accept the revised policy, unless applicable law requires otherwise.
          </p>

          <h2 id="contact">10. Contact</h2>
          <p>
            Questions about privacy or this policy:
          </p>
          <ul>
            <li>
              Email: <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>
            </li>
            <li>
              Messenger:{' '}
              <a href={MESSENGER} target="_blank" rel="noreferrer">
                m.me/akyannyan.astrology
              </a>
            </li>
          </ul>
          <p>
            App name on Google OAuth consent: <strong>Akyannyan</strong>. Support email listed
            there should match the contact above.
          </p>
        </div>
      </div>
    </article>
  );
}

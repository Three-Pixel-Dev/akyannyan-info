const SUPPORT_EMAIL = 'akyannyan8@gmail.com';
const LAST_UPDATED = '20 October 2026';

export function DeleteAccountPage() {
  return (
    <article className="doc-page">
      <div className="container">
        <header className="doc-page__intro">
          <h1>Delete your AKyanNyan account</h1>
          <p className="doc-page__meta">Last updated: {LAST_UPDATED}</p>
          <p className="doc-page__my-lead">
            AKyanNyan - Baydin App (အကြံဉာဏ်) အကောင့်နှင့် ဆက်စပ်ဒေတာ ဖျက်ရန် လမ်းညွှန်။
            အောက်တွင် အင်္ဂလိပ်ဖြင့် အဆင့်လိုက် ဖော်ပြထားပါသည်။
          </p>
        </header>

        <nav className="doc-toc" aria-label="On this page">
          <p>Contents</p>
          <ol>
            <li>
              <a href="#in-app">Delete in the app</a>
            </li>
            <li>
              <a href="#email">Request by email</a>
            </li>
            <li>
              <a href="#deleted">What we delete</a>
            </li>
            <li>
              <a href="#kept">What may be retained</a>
            </li>
          </ol>
        </nav>

        <div className="doc-body">
          <p>
            This page is for users of <strong>AKyanNyan - Baydin App</strong> who want to delete
            their account and associated personal data.
          </p>

          <h2 id="in-app">1. Delete in the app (recommended)</h2>
          <ol>
            <li>Open <strong>AKyanNyan</strong> and sign in.</li>
            <li>
              Go to <strong>Profile / ကျွန်ုပ်</strong>.
            </li>
            <li>
              Open <strong>Danger zone / အန္တရာယ်ဇုန်</strong>.
            </li>
            <li>
              Choose <strong>Delete account</strong>, complete any verification step shown, and
              confirm.
            </li>
          </ol>
          <p>
            Deletion is permanent. You will need a new account (and a new membership code or
            sign-in) if you use the app again later.
          </p>

          <h2 id="email">2. Request by email</h2>
          <p>
            If you cannot use the in-app flow, email{' '}
            <a href={`mailto:${SUPPORT_EMAIL}?subject=Delete%20AKyanNyan%20account`}>
              {SUPPORT_EMAIL}
            </a>{' '}
            with:
          </p>
          <ul>
            <li>subject line: <strong>Delete AKyanNyan account</strong>;</li>
            <li>the email or phone linked to your account (if any);</li>
            <li>how you signed in (Google, Apple, membership code, or OTP).</li>
          </ul>
          <p>We will verify the request and process deletion within a reasonable time.</p>

          <h2 id="deleted">3. What we delete</h2>
          <p>When your account is deleted, we permanently remove:</p>
          <ul>
            <li>your user account record and sign-in identifiers;</li>
            <li>birth profile (date, time, place, and related settings);</li>
            <li>readings, Oracle conversations, and similar owned content;</li>
            <li>saved people and preferences tied to your account;</li>
            <li>registered devices / push notification tokens;</li>
            <li>points balance associated with the account.</li>
          </ul>

          <h2 id="kept">4. What may be retained</h2>
          <p>
            Limited operational or fraud-prevention records (for example certain point-ledger
            rows) may remain inaccessible while retained briefly for security, integrity, or
            legal reasons, then purged or kept only as required by law. See our{' '}
            <a href="/privacy">Privacy Policy</a> for full details.
          </p>
        </div>
      </div>
    </article>
  );
}

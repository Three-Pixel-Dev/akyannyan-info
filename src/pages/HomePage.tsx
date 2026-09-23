import { Link } from 'react-router-dom';

const MESSENGER = 'https://m.me/akyannyan.astrology';

const FEATURES = [
  {
    glyph: '✦',
    title: 'ဇာတာနှင့် Oracle',
    body: 'မွေးနေ့အချက်အလက်ဖြင့် ဇာတာဖွဲ့၊ တစ်သက်စာနှင့် AI Oracle မေးခွန်းများ။',
  },
  {
    glyph: '☽',
    title: 'နေ့စဉ်လမ်းညွှန်',
    body: 'ရက်ရွေး၊ ကံကြမ္မာ ကာလကြီးများ၊ တာရိုနှင့် အံဝင်မှု စစ်ဆေးချက်များ။',
  },
  {
    glyph: '◎',
    title: 'အကောင့်နှင့် ပွိုင့်',
    body: 'Google / Facebook သို့မဟုတ် ကုဒ်ဖြင့် ဝင်ရောက်ပြီး reading များ သိမ်းဆည်းနိုင်သည်။',
  },
] as const;

export function HomePage() {
  return (
    <>
      <section className="hero" aria-labelledby="hero-brand">
        <div className="hero__atmosphere" aria-hidden>
          <div className="hero__orb hero__orb--a" />
          <div className="hero__orb hero__orb--b" />
        </div>

        <div className="hero__grid">
          <div className="hero__copy">
            <h1 id="hero-brand" className="hero__brand">
              Akyannyan
              <span className="hero__brand-my">အကြံဉာဏ်</span>
            </h1>
            <p className="hero__headline">ဗေဒင်နှင့် ကံကြမ္မာကို လက်ထဲမှာ</p>
            <p className="hero__lede my">
              သင့်ဇာတာ၊ Oracle နှင့် နေ့စဉ်လမ်းညွှန်ချက်များကို တစ်နေရာတည်းမှာ ရယူပါ။
            </p>
            <p className="hero__lede en">Myanmar astrology guidance — charts, Oracle, and timing.</p>
            <div className="hero__actions">
              <a className="btn btn--jade my" href={MESSENGER} target="_blank" rel="noreferrer">
                Messenger တွင် ဆက်သွယ်မည်
              </a>
              <Link className="btn btn--ghost" to="/privacy">
                Privacy Policy
              </Link>
            </div>
          </div>

          <div className="hero__visual" aria-hidden>
            <div className="sky-panel">
              <div className="sky-panel__ring" />
              <div className="sky-panel__glyph">✦</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="features-title">
        <div className="container">
          <div className="section__head">
            <p className="section__eyebrow">What you get</p>
            <h2 id="features-title" className="section__title">
              အက်ပ်ထဲမှာ ဘာတွေ ရမလဲ
            </h2>
            <p className="section__lede">
              Light, calm tools for timing and reflection — built for Myanmar users.
            </p>
          </div>

          <ul className="feature-list">
            {FEATURES.map((item) => (
              <li key={item.title}>
                <span className="feature-list__glyph" aria-hidden>
                  {item.glyph}
                </span>
                <div>
                  <h3>{item.title}</h3>
                  <p className="my">{item.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--tint" aria-labelledby="trust-title">
        <div className="container trust-band">
          <div>
            <p className="section__eyebrow">Trust</p>
            <h2 id="trust-title" className="section__title">
              သင့်ဒေတာကို လေးစားစွာ သိမ်းဆည်းပါသည်
            </h2>
            <p className="section__lede">
              We collect only what the app needs for astrology features and account sign-in
              (including Google / Facebook). Read the full policy anytime.
            </p>
          </div>
          <div className="trust-band__panel">
            <h2 className="my">ကိုယ်ရေးအချက်အလက် မူဝါဒ</h2>
            <p>
              Birth details, readings, and sign-in data — what we store, why, and how to contact
              us.
            </p>
            <div className="trust-band__links">
              <Link className="btn btn--jade" to="/privacy">
                Read Privacy Policy
              </Link>
              <a className="btn btn--ghost" href="mailto:akyannyan8@gmail.com">
                Email support
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

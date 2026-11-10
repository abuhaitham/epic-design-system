/* @ds-bundle: {"format":4,"namespace":"EPICDesignSystem_70c10b","components":[{"name":"Button","sourcePath":"components/actions/Button.jsx"},{"name":"WhatsAppButton","sourcePath":"components/actions/WhatsAppButton.jsx"},{"name":"GlowSurface","sourcePath":"components/brand/GlowSurface.jsx"},{"name":"Icon","sourcePath":"components/brand/Icon.jsx"},{"name":"ICON_NAMES","sourcePath":"components/brand/Icon.jsx"},{"name":"EpicMark","sourcePath":"components/brand/Logo.jsx"},{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"Reveal","sourcePath":"components/brand/Reveal.jsx"},{"name":"InsightCard","sourcePath":"components/cards/InsightCard.jsx"},{"name":"PackageCard","sourcePath":"components/cards/PackageCard.jsx"},{"name":"PillarCard","sourcePath":"components/cards/PillarCard.jsx"},{"name":"ProfileCard","sourcePath":"components/cards/ProfileCard.jsx"},{"name":"TeamCard","sourcePath":"components/cards/TeamCard.jsx"},{"name":"TestimonialCard","sourcePath":"components/cards/TestimonialCard.jsx"},{"name":"Badge","sourcePath":"components/display/Badge.jsx"},{"name":"Tabs","sourcePath":"components/display/Tabs.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"Footer","sourcePath":"components/navigation/Footer.jsx"},{"name":"SiteHeader","sourcePath":"components/navigation/SiteHeader.jsx"},{"name":"CTABand","sourcePath":"components/sections/CTABand.jsx"},{"name":"FAQAccordion","sourcePath":"components/sections/FAQAccordion.jsx"},{"name":"Hero","sourcePath":"components/sections/Hero.jsx"},{"name":"LogoStrip","sourcePath":"components/sections/LogoStrip.jsx"},{"name":"NumberedSteps","sourcePath":"components/sections/NumberedSteps.jsx"},{"name":"SectionHeading","sourcePath":"components/sections/SectionHeading.jsx"},{"name":"ServiceRow","sourcePath":"components/sections/ServiceRow.jsx"},{"name":"StatRow","sourcePath":"components/sections/StatRow.jsx"}],"sourceHashes":{"components/actions/Button.jsx":"ca80aaf85cd2","components/actions/WhatsAppButton.jsx":"e965bfc17ad3","components/brand/GlowSurface.jsx":"bdbd4ef57cd4","components/brand/Icon.jsx":"86f6398ef919","components/brand/Logo.jsx":"fc4481a2a842","components/brand/Reveal.jsx":"9526680efe8b","components/cards/InsightCard.jsx":"41af2c77831a","components/cards/PackageCard.jsx":"ba2f6d213caf","components/cards/PillarCard.jsx":"31479c8cd341","components/cards/ProfileCard.jsx":"51c5ba665fb2","components/cards/TeamCard.jsx":"c7c2e97c827e","components/cards/TestimonialCard.jsx":"f954a0e99001","components/display/Badge.jsx":"6cbe0968c8b1","components/display/Tabs.jsx":"3ec9286272e6","components/forms/Checkbox.jsx":"ad77b5b8562c","components/forms/Input.jsx":"6aa4a9295749","components/forms/Select.jsx":"a7795f9fcecd","components/forms/Textarea.jsx":"b118fa4fcf5a","components/navigation/Footer.jsx":"03d281608016","components/navigation/SiteHeader.jsx":"d9c52c9de297","components/sections/CTABand.jsx":"87e0e6cc5608","components/sections/FAQAccordion.jsx":"02d8769010f8","components/sections/Hero.jsx":"237f654cfed1","components/sections/LogoStrip.jsx":"fba4fdf50912","components/sections/NumberedSteps.jsx":"3aaec70ba2e9","components/sections/SectionHeading.jsx":"8eaa8972f276","components/sections/ServiceRow.jsx":"51253bcf2524","components/sections/StatRow.jsx":"1ab82adfd138","ui_kits/website/BookScreen.jsx":"c312e25209c5","ui_kits/website/HomeScreen.jsx":"02c80a63142a","ui_kits/website/InsightsScreen.jsx":"9e71dd9c0d94","ui_kits/website/ServicesScreen.jsx":"ced40d9aeba4","ui_kits/website/copy.js":"a1323057c6f8"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.EPICDesignSystem_70c10b = window.EPICDesignSystem_70c10b || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/GlowSurface.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function GlowSurface({
  variant = 'glow',
  grain = true,
  as = 'div',
  className = '',
  style,
  children,
  ...rest
}) {
  const Tag = as;
  const cls = 'epic-surface epic-surface--' + variant + (grain ? ' epic-grain' : '') + (className ? ' ' + className : '');
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: cls,
    style: style
  }, rest), children);
}
Object.assign(__ds_scope, { GlowSurface });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/GlowSurface.jsx", error: String((e && e.message) || e) }); }

// components/brand/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const PATHS = {
  'arrow-right': /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m12 5 7 7-7 7"
  })),
  'arrow-left': /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "m12 19-7-7 7-7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M19 12H5"
  })),
  'arrow-up-right': /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M7 7h10v10"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7 17 17 7"
  })),
  'chevron-down': /*#__PURE__*/React.createElement("path", {
    d: "m6 9 6 6 6-6"
  }),
  'chevron-right': /*#__PURE__*/React.createElement("path", {
    d: "m9 18 6-6-6-6"
  }),
  plus: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 5v14"
  })),
  minus: /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14"
  }),
  check: /*#__PURE__*/React.createElement("path", {
    d: "M20 6 9 17l-5-5"
  }),
  x: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M18 6 6 18"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m6 6 12 12"
  })),
  menu: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M4 6h16"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4 12h16"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4 18h16"
  })),
  globe: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M2 12h20"
  })),
  'message-circle': /*#__PURE__*/React.createElement("path", {
    d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z"
  }),
  mail: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "4",
    width: "20",
    height: "16",
    rx: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"
  })),
  calendar: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "4",
    width: "18",
    height: "18",
    rx: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 2v4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 2v4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 10h18"
  })),
  linkedin: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "9",
    width: "4",
    height: "12"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "4",
    cy: "4",
    r: "2"
  })),
  'map-pin': /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "10",
    r: "3"
  })),
  'badge-check': /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m9 12 2 2 4-4"
  }))
};
const DIRECTIONAL = new Set(['arrow-right', 'arrow-left', 'arrow-up-right', 'chevron-right']);
function Icon({
  name,
  size = 20,
  strokeWidth = 1.75,
  flip,
  className = '',
  style,
  title,
  ...rest
}) {
  const shouldFlip = flip ?? DIRECTIONAL.has(name);
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: 'epic-icon' + (shouldFlip ? ' epic-icon--flip' : '') + (className ? ' ' + className : ''),
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": title ? undefined : true,
    role: title ? 'img' : undefined,
    style: style
  }, rest), title ? /*#__PURE__*/React.createElement("title", null, title) : null, PATHS[name] || null);
}
const ICON_NAMES = Object.keys(PATHS);
Object.assign(__ds_scope, { Icon, ICON_NAMES });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Icon.jsx", error: String((e && e.message) || e) }); }

// components/actions/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Button({
  variant = 'primary',
  size = 'md',
  href,
  arrow = false,
  iconStart,
  iconEnd,
  block = false,
  disabled = false,
  className = '',
  children,
  ...rest
}) {
  const Tag = href ? 'a' : 'button';
  const cls = ['epic-btn', 'epic-btn--' + variant, size !== 'md' ? 'epic-btn--' + size : '', block ? 'epic-btn--block' : '', className].filter(Boolean).join(' ');
  const iSize = size === 'sm' ? 16 : 18;
  const end = arrow ? 'arrow-right' : iconEnd;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    className: cls,
    disabled: Tag === 'button' ? disabled : undefined,
    "aria-disabled": disabled || undefined,
    type: Tag === 'button' ? rest.type || 'button' : undefined
  }, rest), iconStart ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconStart,
    size: iSize,
    className: "epic-btn__icon"
  }) : null, children, end ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: end,
    size: iSize,
    className: "epic-btn__icon epic-btn__icon--trail"
  }) : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Button.jsx", error: String((e && e.message) || e) }); }

// components/actions/WhatsAppButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function WhatsAppButton({
  phone = '966500000000',
  message = '',
  label = 'WhatsApp us',
  float = false,
  iconOnly = false,
  className = '',
  ...rest
}) {
  const href = 'https://wa.me/' + String(phone).replace(/[^0-9]/g, '') + (message ? '?text=' + encodeURIComponent(message) : '');
  const cls = ['epic-wa', float ? 'epic-wa--float' : '', iconOnly ? 'epic-wa--icon' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    target: "_blank",
    rel: "noopener noreferrer",
    className: cls,
    "aria-label": iconOnly ? label : undefined
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "message-circle",
    size: 22,
    strokeWidth: 2
  }), iconOnly ? null : /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { WhatsAppButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/WhatsAppButton.jsx", error: String((e && e.message) || e) }); }

// components/brand/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const COLORS = {
  blue: '#366BFF',
  black: '#000000',
  navy: '#07142B',
  white: '#FFFFFF',
  current: 'currentColor'
};
function EpicMark({
  color = 'current',
  height = '1em',
  className = '',
  style,
  title = 'EPIC'
}) {
  return /*#__PURE__*/React.createElement("svg", {
    className: 'epic-logo__mark' + (className ? ' ' + className : ''),
    viewBox: "48.85 55.642 206.781 125.8",
    style: {
      height,
      width: 'auto',
      ...style
    },
    role: "img",
    "aria-label": title,
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    fill: COLORS[color] || color,
    transform: "translate(304.481 0) scale(-1 1)",
    d: "M 99.054 180.98 L 48.85 180.98 L 48.85 154.08 L 122.954 154.08 L 71.054 97.58 L 89.154 79.18 L 137.931 131.766 L 137.931 55.642 L 163.231 55.642 L 163.231 134.342 L 216.231 79.642 L 234.331 98.042 L 181.431 154.442 L 255.631 154.442 L 255.631 181.442 L 181.331 181.442 C 155.392 181.442 138.892 164.926 137.972 139.687 L 99.054 180.98 Z"
  }));
}
function Logo({
  color = 'current',
  markColor,
  wordmark = true,
  size = 28,
  href,
  className = '',
  style,
  ...rest
}) {
  const Tag = href ? 'a' : 'span';
  const c = COLORS[color] || color;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    className: 'epic-logo' + (className ? ' ' + className : ''),
    style: {
      fontSize: size,
      color: c,
      ...style
    },
    "aria-label": "EPIC"
  }, rest), /*#__PURE__*/React.createElement(EpicMark, {
    color: markColor || 'current'
  }), wordmark ? /*#__PURE__*/React.createElement("span", {
    className: "epic-logo__word",
    "aria-hidden": "true"
  }, "EPIC") : null);
}
Object.assign(__ds_scope, { EpicMark, Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/brand/Reveal.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useEffect,
  useRef,
  useState
} = React;
function Reveal({
  as = 'div',
  delay = 0,
  variant = 'up',
  once = true,
  threshold = 0.15,
  className = '',
  style,
  children,
  ...rest
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          setVisible(true);
          if (once) io.disconnect();
        } else if (!once) setVisible(false);
      });
    }, {
      threshold,
      rootMargin: '0px 0px -8% 0px'
    });
    io.observe(el);
    return () => io.disconnect();
  }, [once, threshold]);
  const Tag = as;
  const v = variant === 'up' ? '' : ' epic-reveal--' + variant;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    ref: ref,
    className: 'epic-reveal' + v + (visible ? ' is-visible' : '') + (className ? ' ' + className : ''),
    style: {
      '--reveal-delay': delay + 'ms',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Reveal });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Reveal.jsx", error: String((e && e.message) || e) }); }

// components/cards/ProfileCard.jsx
try { (() => {
const DEFAULT_STATS = [{
  value: '27',
  label: 'Years'
}, {
  value: '89',
  label: 'Organisations'
}, {
  value: '4,800',
  label: 'Trainees'
}];
function ProfileCard({
  name = 'EPIC',
  handle = '@epic.sa',
  bio = 'The back office for education businesses in Saudi Arabia. Setup · Compliance · Growth.',
  avatar,
  verified = true,
  stats = DEFAULT_STATS,
  ctaLabel = 'Follow',
  onCta,
  bannerVariant = 'fluted',
  className = ''
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: 'epic-profile epic-on-dark' + (className ? ' ' + className : '')
  }, /*#__PURE__*/React.createElement(__ds_scope.GlowSurface, {
    variant: bannerVariant,
    className: "epic-profile__banner"
  }), /*#__PURE__*/React.createElement("div", {
    className: "epic-profile__body"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "epic-profile__avatar"
  }, avatar ? /*#__PURE__*/React.createElement("img", {
    src: avatar,
    alt: ""
  }) : /*#__PURE__*/React.createElement(__ds_scope.EpicMark, {
    color: "blue",
    height: "0.9em"
  })), ctaLabel ? /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary",
    size: "sm",
    onClick: onCta
  }, ctaLabel) : null), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "epic-profile__name"
  }, name, verified ? /*#__PURE__*/React.createElement("span", {
    className: "epic-profile__verified"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 12,
    strokeWidth: 3
  })) : null), /*#__PURE__*/React.createElement("div", {
    className: "epic-profile__handle"
  }, handle)), bio ? /*#__PURE__*/React.createElement("p", {
    className: "epic-profile__bio"
  }, bio) : null, stats.length ? /*#__PURE__*/React.createElement("div", {
    className: "epic-profile__stats"
  }, stats.map(s => /*#__PURE__*/React.createElement("div", {
    className: "epic-profile__stat",
    key: s.label
  }, /*#__PURE__*/React.createElement("b", null, s.value), /*#__PURE__*/React.createElement("span", null, s.label)))) : null));
}
Object.assign(__ds_scope, { ProfileCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/ProfileCard.jsx", error: String((e && e.message) || e) }); }

// components/cards/TeamCard.jsx
try { (() => {
function TeamCard({
  name,
  role,
  photo,
  linkedin,
  className = ''
}) {
  const initials = String(name || '').split(' ').map(p => p[0]).slice(0, 2).join('');
  return /*#__PURE__*/React.createElement("div", {
    className: 'epic-team' + (className ? ' ' + className : '')
  }, /*#__PURE__*/React.createElement("div", {
    className: "epic-team__photo"
  }, photo ? /*#__PURE__*/React.createElement("img", {
    src: photo,
    alt: name
  }) : /*#__PURE__*/React.createElement("span", {
    className: "epic-team__initials"
  }, initials)), /*#__PURE__*/React.createElement("div", {
    className: "epic-team__row"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "epic-team__name"
  }, name), /*#__PURE__*/React.createElement("div", {
    className: "epic-team__role"
  }, role)), linkedin ? /*#__PURE__*/React.createElement("a", {
    className: "epic-team__social",
    href: linkedin,
    "aria-label": name + ' on LinkedIn'
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "linkedin",
    size: 16
  })) : null));
}
Object.assign(__ds_scope, { TeamCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/TeamCard.jsx", error: String((e && e.message) || e) }); }

// components/cards/TestimonialCard.jsx
try { (() => {
function TestimonialCard({
  quote,
  name,
  role,
  avatar,
  variant = 'white',
  className = ''
}) {
  const initials = String(name || '').split(' ').map(p => p[0]).slice(0, 2).join('');
  return /*#__PURE__*/React.createElement("figure", {
    className: 'epic-testimonial' + (variant === 'dark' ? ' epic-testimonial--dark' : '') + (className ? ' ' + className : ''),
    style: {
      margin: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "epic-testimonial__mark",
    "aria-hidden": "true"
  }, "\u201C"), /*#__PURE__*/React.createElement("blockquote", {
    className: "epic-testimonial__quote"
  }, quote), /*#__PURE__*/React.createElement("figcaption", {
    className: "epic-testimonial__person"
  }, /*#__PURE__*/React.createElement("span", {
    className: "epic-testimonial__avatar"
  }, avatar ? /*#__PURE__*/React.createElement("img", {
    src: avatar,
    alt: ""
  }) : initials), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("div", {
    className: "epic-testimonial__name"
  }, name), /*#__PURE__*/React.createElement("div", {
    className: "epic-testimonial__role"
  }, role))));
}
Object.assign(__ds_scope, { TestimonialCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/TestimonialCard.jsx", error: String((e && e.message) || e) }); }

// components/display/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Badge({
  variant = 'neutral',
  upper = false,
  dot = false,
  className = '',
  children,
  ...rest
}) {
  const cls = ['epic-badge', 'epic-badge--' + variant, upper ? 'epic-badge--upper' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, rest), dot ? /*#__PURE__*/React.createElement("span", {
    className: "epic-badge__dot"
  }) : null, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/cards/InsightCard.jsx
try { (() => {
function InsightCard({
  title,
  category,
  date,
  readTime,
  excerpt,
  image,
  mediaVariant = 'glow-stone',
  href = '#',
  className = ''
}) {
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    className: 'epic-insight' + (className ? ' ' + className : '')
  }, /*#__PURE__*/React.createElement("div", {
    className: "epic-insight__media"
  }, image ? /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: ""
  }) : /*#__PURE__*/React.createElement(__ds_scope.GlowSurface, {
    variant: mediaVariant
  })), /*#__PURE__*/React.createElement("div", {
    className: "epic-insight__meta"
  }, category ? /*#__PURE__*/React.createElement(__ds_scope.Badge, null, category) : null, date ? /*#__PURE__*/React.createElement("span", null, date) : null, readTime ? /*#__PURE__*/React.createElement("span", null, "\xB7 ", readTime) : null), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "epic-insight__title"
  }, title)), excerpt ? /*#__PURE__*/React.createElement("p", {
    className: "epic-insight__excerpt"
  }, excerpt) : null);
}
Object.assign(__ds_scope, { InsightCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/InsightCard.jsx", error: String((e && e.message) || e) }); }

// components/cards/PackageCard.jsx
try { (() => {
function PackageCard({
  badge = 'Featured package',
  title = 'SCG — Setup, Compliance, Growth',
  description,
  includes = [],
  price,
  priceUnit,
  primaryCta = {
    label: 'Book a discovery call',
    arrow: true
  },
  secondaryCta,
  image,
  mediaVariant = 'fluted',
  variant = 'black',
  className = ''
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: 'epic-package epic-on-dark' + (variant === 'blue' ? ' epic-package--blue' : '') + (className ? ' ' + className : '')
  }, /*#__PURE__*/React.createElement("div", {
    className: "epic-package__body"
  }, badge ? /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    variant: variant === 'blue' ? 'outline' : 'solid',
    upper: true
  }, badge)) : null, /*#__PURE__*/React.createElement("h3", {
    className: "epic-package__title"
  }, title), description ? /*#__PURE__*/React.createElement("p", {
    className: "epic-package__desc"
  }, description) : null, includes.length ? /*#__PURE__*/React.createElement("ul", {
    className: "epic-package__list"
  }, includes.map((x, i) => /*#__PURE__*/React.createElement("li", {
    key: i
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 18
  }), x))) : null, price ? /*#__PURE__*/React.createElement("div", {
    className: "epic-package__price"
  }, /*#__PURE__*/React.createElement("span", {
    className: "epic-package__amount"
  }, price), priceUnit ? /*#__PURE__*/React.createElement("span", {
    className: "epic-package__unit"
  }, priceUnit) : null) : null, /*#__PURE__*/React.createElement("div", {
    className: "epic-package__actions"
  }, primaryCta ? /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: variant === 'blue' ? 'light' : 'primary',
    size: "lg",
    href: primaryCta.href,
    onClick: primaryCta.onClick,
    arrow: primaryCta.arrow
  }, primaryCta.label) : null, secondaryCta ? /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "outline",
    size: "lg",
    href: secondaryCta.href,
    onClick: secondaryCta.onClick
  }, secondaryCta.label) : null)), /*#__PURE__*/React.createElement("div", {
    className: "epic-package__media"
  }, image ? /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: ""
  }) : /*#__PURE__*/React.createElement(__ds_scope.GlowSurface, {
    variant: variant === 'blue' ? 'fluted-dark' : mediaVariant
  })));
}
Object.assign(__ds_scope, { PackageCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/PackageCard.jsx", error: String((e && e.message) || e) }); }

// components/cards/PillarCard.jsx
try { (() => {
function PillarCard({
  index = '01',
  title = 'Setup',
  tagline,
  tags = [],
  href = '#',
  variant = 'white',
  onClick,
  className = ''
}) {
  const v = variant === 'white' ? '' : ' epic-pillar--' + variant;
  const badge = variant === 'white' || variant === 'stone' ? 'neutral' : 'outline';
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    onClick: onClick,
    className: 'epic-pillar' + v + (className ? ' ' + className : '')
  }, /*#__PURE__*/React.createElement("div", {
    className: "epic-pillar__top"
  }, /*#__PURE__*/React.createElement("span", {
    className: "epic-pillar__num"
  }, index), /*#__PURE__*/React.createElement("span", {
    className: "epic-pillar__arrow"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "arrow-right",
    size: 18
  }))), /*#__PURE__*/React.createElement("h3", {
    className: "epic-pillar__title"
  }, title), tagline ? /*#__PURE__*/React.createElement("p", {
    className: "epic-pillar__tagline"
  }, tagline) : null, tags.length ? /*#__PURE__*/React.createElement("div", {
    className: "epic-pillar__tags"
  }, tags.map(t => /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    key: t,
    variant: badge
  }, t))) : null);
}
Object.assign(__ds_scope, { PillarCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/PillarCard.jsx", error: String((e && e.message) || e) }); }

// components/display/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useLayoutEffect,
  useRef,
  useState
} = React;
function Tabs({
  items = [],
  value,
  defaultValue,
  onChange,
  variant = 'pill',
  className = '',
  ...rest
}) {
  const [inner, setInner] = useState(defaultValue ?? (items[0] && items[0].id));
  const active = value ?? inner;
  const wrap = useRef(null);
  const [ind, setInd] = useState({
    left: 0,
    width: 0
  });
  useLayoutEffect(() => {
    const el = wrap.current && wrap.current.querySelector('[aria-selected="true"]');
    if (el) setInd({
      left: el.offsetLeft,
      width: el.offsetWidth
    });
  }, [active, items.length]);
  const select = id => {
    setInner(id);
    onChange && onChange(id);
  };
  const cls = ['epic-tabs', variant !== 'pill' ? 'epic-tabs--' + variant : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", _extends({
    ref: wrap,
    role: "tablist",
    className: cls
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "epic-tabs__indicator",
    style: {
      left: ind.left,
      width: ind.width
    }
  }), items.map(it => /*#__PURE__*/React.createElement("button", {
    key: it.id,
    role: "tab",
    type: "button",
    "aria-selected": it.id === active,
    className: "epic-tabs__tab",
    onClick: () => select(it.id)
  }, it.label)));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Checkbox({
  label,
  type = 'checkbox',
  className = '',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: 'epic-check' + (type === 'radio' ? ' epic-check--radio' : '') + (className ? ' ' + className : ''),
    style: style
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: type
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "epic-check__box"
  }, type === 'radio' ? /*#__PURE__*/React.createElement("svg", {
    width: "8",
    height: "8",
    viewBox: "0 0 8 8"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "4",
    cy: "4",
    r: "4",
    fill: "currentColor"
  })) : /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 14,
    strokeWidth: 2.5
  })), /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useId
} = React;
function Input({
  label,
  hint,
  error,
  dark = false,
  id,
  className = '',
  ...rest
}) {
  const auto = useId();
  const fid = id || auto;
  return /*#__PURE__*/React.createElement("div", {
    className: 'epic-field' + (className ? ' ' + className : '')
  }, label ? /*#__PURE__*/React.createElement("label", {
    className: "epic-field__label",
    htmlFor: fid,
    style: dark ? {
      color: '#fff'
    } : undefined
  }, label) : null, /*#__PURE__*/React.createElement("input", _extends({
    id: fid,
    className: 'epic-input' + (dark ? ' epic-input--dark' : ''),
    "aria-invalid": error ? true : undefined
  }, rest)), error ? /*#__PURE__*/React.createElement("span", {
    className: "epic-field__error"
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    className: "epic-field__hint"
  }, hint) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useId
} = React;
function Select({
  label,
  hint,
  error,
  options = [],
  placeholder,
  dark = false,
  id,
  className = '',
  ...rest
}) {
  const auto = useId();
  const fid = id || auto;
  return /*#__PURE__*/React.createElement("div", {
    className: 'epic-field' + (className ? ' ' + className : '')
  }, label ? /*#__PURE__*/React.createElement("label", {
    className: "epic-field__label",
    htmlFor: fid
  }, label) : null, /*#__PURE__*/React.createElement("div", {
    className: "epic-select"
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: fid,
    className: 'epic-input' + (dark ? ' epic-input--dark' : ''),
    "aria-invalid": error ? true : undefined,
    defaultValue: placeholder && rest.value === undefined && rest.defaultValue === undefined ? '' : undefined
  }, rest), placeholder ? /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, placeholder) : null, options.map(o => {
    const v = typeof o === 'string' ? o : o.value;
    const l = typeof o === 'string' ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v
    }, l);
  })), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 18,
    className: "epic-select__chev"
  })), error ? /*#__PURE__*/React.createElement("span", {
    className: "epic-field__error"
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    className: "epic-field__hint"
  }, hint) : null);
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useId
} = React;
function Textarea({
  label,
  hint,
  error,
  dark = false,
  id,
  rows = 4,
  className = '',
  ...rest
}) {
  const auto = useId();
  const fid = id || auto;
  return /*#__PURE__*/React.createElement("div", {
    className: 'epic-field' + (className ? ' ' + className : '')
  }, label ? /*#__PURE__*/React.createElement("label", {
    className: "epic-field__label",
    htmlFor: fid
  }, label) : null, /*#__PURE__*/React.createElement("textarea", _extends({
    id: fid,
    rows: rows,
    className: 'epic-input' + (dark ? ' epic-input--dark' : ''),
    "aria-invalid": error ? true : undefined
  }, rest)), error ? /*#__PURE__*/React.createElement("span", {
    className: "epic-field__error"
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    className: "epic-field__hint"
  }, hint) : null);
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Footer.jsx
try { (() => {
const DEFAULT_COLUMNS = [{
  heading: 'Services',
  links: [{
    label: 'Setup',
    href: '#setup'
  }, {
    label: 'Compliance',
    href: '#compliance'
  }, {
    label: 'Growth',
    href: '#growth'
  }, {
    label: 'SCG Package',
    href: '#packages'
  }]
}, {
  heading: 'Company',
  links: [{
    label: 'About EPIC',
    href: '#about'
  }, {
    label: 'Team',
    href: '#team'
  }, {
    label: 'Insights',
    href: '#insights'
  }, {
    label: 'Careers',
    href: '#careers'
  }]
}, {
  heading: 'Contact',
  links: [{
    label: 'Riyadh, Saudi Arabia',
    href: '#map'
  }, {
    label: 'hello@epic.sa',
    href: 'mailto:hello@epic.sa'
  }, {
    label: 'WhatsApp',
    href: '#whatsapp'
  }, {
    label: 'LinkedIn',
    href: '#linkedin'
  }]
}];
function Footer({
  columns = DEFAULT_COLUMNS,
  blurb = 'The back office for education businesses in Saudi Arabia. From licence to launch to scale.',
  newsletter = true,
  newsletterLabel = 'Insights, monthly',
  newsletterPlaceholder = 'Your email',
  newsletterCta = 'Subscribe',
  disclaimer = 'EPIC is not a law firm. Information on this site is general guidance on education licensing and operations in the Kingdom of Saudi Arabia and is not legal advice.',
  copyright = '© 2026 EPIC — Education Platform Investing Company. Formerly Advanced Quantum Holding.',
  legal = [{
    label: 'Privacy',
    href: '#privacy'
  }, {
    label: 'Terms',
    href: '#terms'
  }, {
    label: 'PDPL notice',
    href: '#pdpl'
  }],
  bigWordmark = true,
  className = ''
}) {
  return /*#__PURE__*/React.createElement("footer", {
    className: 'epic-footer epic-on-dark' + (className ? ' ' + className : '')
  }, /*#__PURE__*/React.createElement("div", {
    className: "epic-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "epic-footer__top"
  }, /*#__PURE__*/React.createElement("div", {
    className: "epic-footer__brand"
  }, /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    color: "white",
    markColor: "blue",
    size: 34,
    className: "epic-footer__logo"
  }), /*#__PURE__*/React.createElement("p", {
    className: "epic-footer__blurb"
  }, blurb), newsletter ? /*#__PURE__*/React.createElement("form", {
    className: "epic-field",
    onSubmit: e => e.preventDefault()
  }, /*#__PURE__*/React.createElement("span", {
    className: "epic-footer__heading"
  }, newsletterLabel), /*#__PURE__*/React.createElement("div", {
    className: "epic-footer__news"
  }, /*#__PURE__*/React.createElement("input", {
    className: "epic-input epic-input--dark",
    type: "email",
    placeholder: newsletterPlaceholder,
    "aria-label": newsletterPlaceholder
  }), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "light",
    type: "submit",
    style: {
      height: 52
    }
  }, newsletterCta))) : null), columns.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.heading,
    className: "epic-footer__col"
  }, /*#__PURE__*/React.createElement("span", {
    className: "epic-footer__heading"
  }, c.heading), c.links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.label,
    href: l.href
  }, l.label))))), bigWordmark ? /*#__PURE__*/React.createElement("div", {
    className: "epic-footer__wordmark",
    "aria-hidden": "true"
  }, "EPIC") : null, /*#__PURE__*/React.createElement("div", {
    className: "epic-footer__bottom"
  }, /*#__PURE__*/React.createElement("div", {
    className: "epic-footer__disclaimer"
  }, /*#__PURE__*/React.createElement("p", null, copyright), /*#__PURE__*/React.createElement("p", null, disclaimer)), /*#__PURE__*/React.createElement("nav", {
    className: "epic-footer__legal"
  }, legal.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.label,
    href: l.href
  }, l.label))))));
}
Object.assign(__ds_scope, { Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Footer.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SiteHeader.jsx
try { (() => {
const {
  useEffect,
  useState
} = React;
const DEFAULT_LINKS = [{
  label: 'Services',
  href: '#services'
}, {
  label: 'Packages',
  href: '#packages'
}, {
  label: 'About',
  href: '#about'
}, {
  label: 'Insights',
  href: '#insights'
}];
function SiteHeader({
  links = DEFAULT_LINKS,
  lang = 'en',
  onLangToggle,
  loginLabel = 'Client login',
  loginHref = '#login',
  ctaLabel = 'Book a discovery call',
  ctaHref,
  onCtaClick,
  tone = 'light',
  overlay = false,
  hideOnScroll = false,
  scrolled: forceScrolled,
  className = '',
  onNavigate
}) {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      if (hideOnScroll) setHidden(y > 400 && y > last && !open);
      last = y;
    };
    onScroll();
    window.addEventListener('scroll', onScroll, {
      passive: true
    });
    return () => window.removeEventListener('scroll', onScroll);
  }, [hideOnScroll, open]);
  const isScrolled = forceScrolled ?? scrolled;
  const cls = ['epic-header', overlay ? 'epic-header--overlay' : '', tone === 'dark' ? 'epic-header--on-dark' : '', isScrolled || open ? 'is-scrolled' : '', hidden ? 'is-hidden' : '', className].filter(Boolean).join(' ');
  const langLabel = lang === 'ar' ? 'English' : 'العربية';
  const nav = l => e => {
    setOpen(false);
    if (onNavigate) {
      e.preventDefault();
      onNavigate(l);
    }
  };
  return /*#__PURE__*/React.createElement("header", {
    className: cls
  }, /*#__PURE__*/React.createElement("div", {
    className: "epic-container epic-header__inner"
  }, /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    href: "#top",
    size: 26,
    className: "epic-header__logo",
    markColor: isScrolled || open || tone !== 'dark' ? 'blue' : 'current'
  }), /*#__PURE__*/React.createElement("nav", {
    className: "epic-header__nav",
    "aria-label": "Primary"
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.label,
    href: l.href,
    className: "epic-header__link",
    onClick: nav(l)
  }, l.label))), /*#__PURE__*/React.createElement("div", {
    className: "epic-header__actions"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "epic-header__link epic-header__lang",
    onClick: onLangToggle,
    lang: lang === 'ar' ? 'en' : 'ar'
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "globe",
    size: 17
  }), langLabel), /*#__PURE__*/React.createElement("a", {
    href: loginHref,
    className: "epic-header__link epic-header__login"
  }, loginLabel), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary",
    size: "sm",
    href: ctaHref,
    onClick: onCtaClick,
    className: "epic-header__cta"
  }, ctaLabel), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "epic-header__menu",
    "aria-label": "Menu",
    "aria-expanded": open,
    onClick: () => setOpen(!open)
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: open ? 'x' : 'menu',
    size: 20
  })))), /*#__PURE__*/React.createElement("div", {
    className: 'epic-header__drawer' + (open ? ' is-open' : '')
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.label,
    href: l.href,
    onClick: nav(l)
  }, l.label)), /*#__PURE__*/React.createElement("a", {
    href: loginHref
  }, loginLabel), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary",
    size: "lg",
    block: true,
    href: ctaHref,
    onClick: onCtaClick
  }, ctaLabel))));
}
Object.assign(__ds_scope, { SiteHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SiteHeader.jsx", error: String((e && e.message) || e) }); }

// components/sections/CTABand.jsx
try { (() => {
function CTABand({
  eyebrow = 'Make this real',
  title = 'Ready to open your school?',
  text,
  primaryCta = {
    label: 'Book a discovery call',
    arrow: true
  },
  secondaryCta,
  variant = 'glow-dark',
  flush = false,
  className = '',
  children
}) {
  const dark = variant !== 'glow-stone' && variant !== 'stone' && variant !== 'glow';
  return /*#__PURE__*/React.createElement(__ds_scope.GlowSurface, {
    as: "section",
    variant: variant,
    className: 'epic-cta' + (flush ? ' epic-cta--flush' : '') + (dark ? ' epic-on-dark' : '') + (className ? ' ' + className : '')
  }, /*#__PURE__*/React.createElement(__ds_scope.Reveal, {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 28
    }
  }, eyebrow ? /*#__PURE__*/React.createElement("span", {
    className: "epic-eyebrow epic-cta__eyebrow"
  }, eyebrow) : null, /*#__PURE__*/React.createElement("h2", {
    className: "epic-cta__title"
  }, title), text ? /*#__PURE__*/React.createElement("p", {
    className: "epic-cta__text"
  }, text) : null, /*#__PURE__*/React.createElement("div", {
    className: "epic-cta__actions"
  }, primaryCta ? /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: primaryCta.variant || (dark ? 'light' : 'primary'),
    size: "lg",
    href: primaryCta.href,
    onClick: primaryCta.onClick,
    arrow: primaryCta.arrow
  }, primaryCta.label) : null, secondaryCta ? /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: secondaryCta.variant || 'outline',
    size: "lg",
    href: secondaryCta.href,
    onClick: secondaryCta.onClick
  }, secondaryCta.label) : null, children)));
}
Object.assign(__ds_scope, { CTABand });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/sections/CTABand.jsx", error: String((e && e.message) || e) }); }

// components/sections/FAQAccordion.jsx
try { (() => {
const {
  useState
} = React;
function FAQAccordion({
  items = [],
  defaultOpen = 0,
  multiple = false,
  className = ''
}) {
  const [open, setOpen] = useState(defaultOpen == null ? [] : [defaultOpen]);
  const toggle = i => setOpen(o => o.includes(i) ? o.filter(x => x !== i) : multiple ? [...o, i] : [i]);
  return /*#__PURE__*/React.createElement("div", {
    className: 'epic-faq' + (className ? ' ' + className : '')
  }, items.map((it, i) => {
    const isOpen = open.includes(i);
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      className: 'epic-faq__item' + (isOpen ? ' is-open' : '')
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: "epic-faq__q",
      "aria-expanded": isOpen,
      onClick: () => toggle(i)
    }, /*#__PURE__*/React.createElement("span", null, it.q), /*#__PURE__*/React.createElement("span", {
      className: "epic-faq__icon"
    }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "plus",
      size: 18
    }))), /*#__PURE__*/React.createElement("div", {
      className: "epic-faq__a",
      role: "region"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", null, it.a))));
  }));
}
Object.assign(__ds_scope, { FAQAccordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/sections/FAQAccordion.jsx", error: String((e && e.message) || e) }); }

// components/sections/Hero.jsx
try { (() => {
function Cta({
  c,
  variant,
  size
}) {
  if (!c) return null;
  return /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: c.variant || variant,
    size: size,
    href: c.href,
    onClick: c.onClick,
    arrow: c.arrow
  }, c.label);
}
function Hero({
  eyebrow,
  title = 'License faster.\nOpen sooner.\nStart right.',
  lead,
  primaryCta,
  secondaryCta,
  variant = 'glow',
  align = 'start',
  foot,
  minHeight,
  className = '',
  children
}) {
  const lines = String(title).split('\n');
  const dark = variant === 'glow-dark' || variant === 'black' || variant === 'blue' || variant === 'fluted';
  return /*#__PURE__*/React.createElement(__ds_scope.GlowSurface, {
    as: "section",
    variant: variant,
    className: 'epic-hero' + (align === 'center' ? ' epic-hero--center' : '') + (dark ? ' epic-on-dark' : '') + (className ? ' ' + className : ''),
    style: minHeight ? {
      minHeight
    } : undefined
  }, /*#__PURE__*/React.createElement("div", {
    className: "epic-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "epic-hero__content"
  }, eyebrow ? /*#__PURE__*/React.createElement(__ds_scope.Reveal, {
    variant: "fade"
  }, /*#__PURE__*/React.createElement("span", {
    className: "epic-eyebrow"
  }, eyebrow)) : null, /*#__PURE__*/React.createElement("h1", {
    className: "epic-hero__title"
  }, lines.map((l, i) => /*#__PURE__*/React.createElement(__ds_scope.Reveal, {
    as: "span",
    key: i,
    delay: 120 + i * 110,
    style: {
      display: 'block'
    }
  }, l))), lead ? /*#__PURE__*/React.createElement(__ds_scope.Reveal, {
    delay: 120 + lines.length * 110
  }, /*#__PURE__*/React.createElement("p", {
    className: "epic-hero__lead"
  }, lead)) : null, primaryCta || secondaryCta ? /*#__PURE__*/React.createElement(__ds_scope.Reveal, {
    delay: 220 + lines.length * 110,
    className: "epic-hero__actions"
  }, /*#__PURE__*/React.createElement(Cta, {
    c: primaryCta,
    variant: "primary",
    size: "lg"
  }), /*#__PURE__*/React.createElement(Cta, {
    c: secondaryCta,
    variant: dark ? 'light' : 'outline',
    size: "lg"
  })) : null, children), foot ? /*#__PURE__*/React.createElement(__ds_scope.Reveal, {
    variant: "fade",
    delay: 700,
    className: "epic-hero__foot"
  }, foot) : null));
}
Object.assign(__ds_scope, { Hero });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/sections/Hero.jsx", error: String((e && e.message) || e) }); }

// components/sections/LogoStrip.jsx
try { (() => {
function LogoStrip({
  label = 'Trusted by schools, operators and investors across the Kingdom',
  logos = [],
  duration = 40,
  className = ''
}) {
  const items = logos.length ? logos : ['Al Noor Schools', 'Riyadh Academy', 'Najd Training', 'Future Minds', 'Dar Al Ilm', 'Coastal International', 'Qimam Institute'];
  const render = (l, i) => /*#__PURE__*/React.createElement("span", {
    className: "epic-logostrip__item",
    key: i
  }, typeof l === 'string' ? l : /*#__PURE__*/React.createElement("img", {
    src: l.src,
    alt: l.alt || ''
  }));
  return /*#__PURE__*/React.createElement("div", {
    className: 'epic-logostrip' + (className ? ' ' + className : '')
  }, label ? /*#__PURE__*/React.createElement("span", {
    className: "epic-logostrip__label"
  }, label) : null, /*#__PURE__*/React.createElement("div", {
    className: "epic-logostrip__viewport"
  }, /*#__PURE__*/React.createElement("div", {
    className: "epic-logostrip__track",
    style: {
      '--marquee-dur': duration + 's'
    }
  }, items.map(render), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: 'contents'
    }
  }, items.map((l, i) => render(l, 'd' + i))))));
}
Object.assign(__ds_scope, { LogoStrip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/sections/LogoStrip.jsx", error: String((e && e.message) || e) }); }

// components/sections/NumberedSteps.jsx
try { (() => {
const DEFAULT_STEPS = [{
  title: 'Discovery call',
  text: 'Thirty minutes on your plans, your timeline and where you are in the licensing process.'
}, {
  title: 'Roadmap',
  text: 'A written plan with every approval, document and deadline, owned by one EPIC lead.'
}, {
  title: 'Execution',
  text: 'We file, follow up and prepare you for every inspection while you focus on the school.'
}, {
  title: 'Launch & beyond',
  text: 'Open on schedule, then stay licensed and accredited with ongoing compliance support.'
}];
function NumberedSteps({
  steps = DEFAULT_STEPS,
  active,
  className = ''
}) {
  return /*#__PURE__*/React.createElement("ol", {
    className: 'epic-steps' + (className ? ' ' + className : ''),
    style: {
      '--steps': Math.min(steps.length, 4)
    }
  }, steps.map((s, i) => /*#__PURE__*/React.createElement(__ds_scope.Reveal, {
    as: "li",
    key: i,
    delay: i * 110,
    className: 'epic-step' + (active === i ? ' epic-step--active' : '')
  }, /*#__PURE__*/React.createElement("span", {
    className: "epic-step__num"
  }, String(i + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("span", {
    className: "epic-step__title"
  }, s.title), /*#__PURE__*/React.createElement("p", {
    className: "epic-step__text"
  }, s.text))));
}
Object.assign(__ds_scope, { NumberedSteps });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/sections/NumberedSteps.jsx", error: String((e && e.message) || e) }); }

// components/sections/SectionHeading.jsx
try { (() => {
function SectionHeading({
  eyebrow,
  title,
  lead,
  action,
  className = ''
}) {
  return /*#__PURE__*/React.createElement(__ds_scope.Reveal, {
    className: 'epic-section-head' + (className ? ' ' + className : '')
  }, /*#__PURE__*/React.createElement("div", {
    className: "epic-section-head__text"
  }, eyebrow ? /*#__PURE__*/React.createElement("span", {
    className: "epic-eyebrow epic-section-head__eyebrow"
  }, eyebrow) : null, title ? /*#__PURE__*/React.createElement("h2", {
    className: "epic-section-head__title"
  }, title) : null, lead ? /*#__PURE__*/React.createElement("p", {
    className: "epic-section-head__lead"
  }, lead) : null), action || null);
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/sections/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/sections/ServiceRow.jsx
try { (() => {
function ServiceRow({
  index = '01',
  eyebrow = 'Setup',
  title,
  tagline,
  items = [],
  cta,
  image,
  imageAlt = '',
  media,
  mediaVariant = 'fluted',
  reverse = false,
  id,
  className = ''
}) {
  return /*#__PURE__*/React.createElement("div", {
    id: id,
    className: 'epic-service' + (reverse ? ' epic-service--reverse' : '') + (className ? ' ' + className : '')
  }, /*#__PURE__*/React.createElement(__ds_scope.Reveal, {
    className: "epic-service__body"
  }, /*#__PURE__*/React.createElement("span", {
    className: "epic-eyebrow epic-service__eyebrow"
  }, /*#__PURE__*/React.createElement("span", {
    className: "epic-service__index"
  }, index), eyebrow), title ? /*#__PURE__*/React.createElement("h3", {
    className: "epic-service__title"
  }, title) : null, tagline ? /*#__PURE__*/React.createElement("p", {
    className: "epic-service__tagline"
  }, tagline) : null, items.length ? /*#__PURE__*/React.createElement("ul", {
    className: "epic-service__list"
  }, items.map((it, i) => /*#__PURE__*/React.createElement("li", {
    key: i
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 18
  }), it))) : null, cta ? /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: cta.variant || 'link',
    href: cta.href,
    onClick: cta.onClick,
    arrow: true
  }, cta.label)) : null), /*#__PURE__*/React.createElement(__ds_scope.Reveal, {
    variant: "scale",
    delay: 120,
    className: "epic-service__media"
  }, media || (image ? /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: imageAlt
  }) : /*#__PURE__*/React.createElement(__ds_scope.GlowSurface, {
    variant: mediaVariant
  }))));
}
Object.assign(__ds_scope, { ServiceRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/sections/ServiceRow.jsx", error: String((e && e.message) || e) }); }

// components/sections/StatRow.jsx
try { (() => {
const {
  useEffect,
  useRef,
  useState
} = React;
const DEFAULT_STATS = [{
  value: '27',
  label: 'Years in Saudi education'
}, {
  value: '89',
  label: 'Organisations advised'
}, {
  value: '158',
  label: 'Leaders developed'
}, {
  value: '4,800',
  label: 'Trainees across 24 centres'
}];
function CountUp({
  value,
  run,
  duration = 1600
}) {
  const target = parseFloat(String(value).replace(/[^0-9.]/g, '')) || 0;
  const hasComma = String(value).includes(',');
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!run) return;
    let raf;
    const t0 = performance.now();
    const tick = t => {
      const p = Math.min(1, (t - t0) / duration);
      const e = 1 - Math.pow(1 - p, 4);
      setN(Math.round(target * e));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [run, target, duration]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, hasComma ? n.toLocaleString('en-US') : String(n));
}
function StatRow({
  stats = DEFAULT_STATS,
  countUp = true,
  className = ''
}) {
  const ref = useRef(null);
  const [run, setRun] = useState(!countUp);
  useEffect(() => {
    if (!countUp || !ref.current || typeof IntersectionObserver === 'undefined') {
      setRun(true);
      return;
    }
    const io = new IntersectionObserver(es => {
      if (es[0].isIntersecting) {
        setRun(true);
        io.disconnect();
      }
    }, {
      threshold: 0.3
    });
    io.observe(ref.current);
    return () => io.disconnect();
  }, [countUp]);
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    className: 'epic-stats' + (className ? ' ' + className : '')
  }, stats.map((s, i) => /*#__PURE__*/React.createElement("div", {
    className: "epic-stat",
    key: i
  }, /*#__PURE__*/React.createElement("span", {
    className: "epic-stat__value"
  }, countUp ? /*#__PURE__*/React.createElement(CountUp, {
    value: s.value,
    run: run
  }) : s.value, s.suffix ? /*#__PURE__*/React.createElement("span", {
    className: "epic-stat__suffix"
  }, s.suffix) : null), /*#__PURE__*/React.createElement("span", {
    className: "epic-stat__label"
  }, s.label))));
}
Object.assign(__ds_scope, { StatRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/sections/StatRow.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/BookScreen.jsx
try { (() => {
const {
  Input: BkInput,
  Select: BkSelect,
  Textarea: BkTextarea,
  Checkbox: BkCheck,
  Button: BkButton,
  WhatsAppButton: BkWA,
  GlowSurface: BkGlow,
  Reveal: BkReveal,
  Icon: BkIcon,
  ProfileCard: BkProfile
} = window.EPICDesignSystem_70c10b;
function BookScreen({
  t
}) {
  const b = t.book;
  const [sent, setSent] = React.useState(false);
  const [err, setErr] = React.useState('');
  const submit = e => {
    e.preventDefault();
    const email = e.target.elements.email.value;
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      setErr('Enter a valid email address');
      return;
    }
    setErr('');
    setSent(true);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(BkGlow, {
    variant: "glow-stone",
    style: {
      paddingTop: 'calc(var(--header-h) + clamp(48px,7vw,96px))',
      paddingBottom: 'var(--section-y)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "epic-container",
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(340px,1fr))',
      gap: 'clamp(40px,6vw,96px)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(BkReveal, {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 24,
      color: 'var(--epic-midnight-navy)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "epic-eyebrow"
  }, b.eyebrow), /*#__PURE__*/React.createElement("h1", {
    className: "epic-h1"
  }, b.title), /*#__PURE__*/React.createElement("p", {
    className: "epic-lead",
    style: {
      color: 'inherit',
      opacity: .85,
      maxWidth: 480
    }
  }, b.lead), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      padding: 0,
      margin: '8px 0 0',
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, b.points.map(p => /*#__PURE__*/React.createElement("li", {
    key: p,
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'center',
      fontSize: 16
    }
  }, /*#__PURE__*/React.createElement(BkIcon, {
    name: "check",
    size: 18,
    style: {
      color: 'var(--accent)'
    }
  }), p))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement(BkProfile, {
    ctaLabel: null,
    bannerVariant: "fluted-dark"
  }))), /*#__PURE__*/React.createElement(BkReveal, {
    delay: 120,
    style: {
      background: '#fff',
      borderRadius: 'var(--radius-2xl)',
      padding: 'clamp(28px,4vw,48px)',
      boxShadow: 'var(--shadow-lg)'
    }
  }, sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20,
      minHeight: 420,
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 56,
      height: 56,
      borderRadius: '50%',
      background: 'var(--accent)',
      color: '#fff',
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(BkIcon, {
    name: "check",
    size: 28,
    strokeWidth: 2.25
  })), /*#__PURE__*/React.createElement("h2", {
    className: "epic-h3",
    style: {
      color: '#000'
    }
  }, b.done), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-muted)'
    }
  }, b.doneSub), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(BkWA, {
    label: t.wa
  }), /*#__PURE__*/React.createElement(BkButton, {
    variant: "outline",
    onClick: () => setSent(false)
  }, b.again))) : /*#__PURE__*/React.createElement("form", {
    onSubmit: submit,
    noValidate: true,
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2,minmax(0,1fr))',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(BkInput, {
    label: b.name,
    name: "name",
    required: true,
    style: {}
  }), /*#__PURE__*/React.createElement(BkInput, {
    label: b.phone,
    name: "phone",
    type: "tel",
    dir: "ltr",
    placeholder: "+966 5x xxx xxxx"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1/-1'
    }
  }, /*#__PURE__*/React.createElement(BkInput, {
    label: b.email,
    name: "email",
    type: "email",
    dir: "ltr",
    error: err || undefined
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1/-1'
    }
  }, /*#__PURE__*/React.createElement(BkSelect, {
    label: b.type,
    placeholder: b.typePh,
    options: b.types
  })), /*#__PURE__*/React.createElement("fieldset", {
    style: {
      gridColumn: '1/-1',
      border: 0,
      padding: 0,
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("legend", {
    className: "epic-field__label",
    style: {
      marginBottom: 12
    }
  }, b.stage), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 24,
      flexWrap: 'wrap'
    }
  }, b.stages.map((s, i) => /*#__PURE__*/React.createElement(BkCheck, {
    key: s,
    type: "radio",
    name: "stage",
    label: s,
    defaultChecked: i === 0
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1/-1'
    }
  }, /*#__PURE__*/React.createElement(BkTextarea, {
    label: b.msg,
    hint: b.msgHint,
    rows: 3
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1/-1'
    }
  }, /*#__PURE__*/React.createElement(BkCheck, {
    label: b.consent,
    defaultChecked: true
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1/-1'
    }
  }, /*#__PURE__*/React.createElement(BkButton, {
    type: "submit",
    size: "lg",
    block: true,
    arrow: true
  }, b.submit)))))));
}
window.BookScreen = BookScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/BookScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomeScreen.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  Hero,
  LogoStrip,
  StatRow,
  ServiceRow,
  SectionHeading,
  TestimonialCard,
  PackageCard,
  NumberedSteps,
  FAQAccordion,
  InsightCard,
  CTABand,
  Reveal,
  Button,
  PillarCard
} = window.EPICDesignSystem_70c10b;
function HomeScreen({
  t,
  go
}) {
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Hero, {
    eyebrow: t.hero.eyebrow,
    title: t.hero.title,
    lead: t.hero.lead,
    primaryCta: {
      label: t.cta,
      arrow: true,
      onClick: () => go('book')
    },
    secondaryCta: {
      label: t.explore,
      onClick: () => go('services')
    },
    foot: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", null, t.hero.foot1), /*#__PURE__*/React.createElement("span", null, t.hero.foot2))
  }), /*#__PURE__*/React.createElement("div", {
    className: "epic-container"
  }, /*#__PURE__*/React.createElement(LogoStrip, {
    label: t.trusted
  })), /*#__PURE__*/React.createElement("section", {
    className: "epic-section epic-container"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: t.statsHead.eyebrow,
    title: t.statsHead.title
  }), /*#__PURE__*/React.createElement(StatRow, {
    stats: t.stats
  })), /*#__PURE__*/React.createElement("section", {
    className: "epic-container",
    style: {
      paddingBottom: 'var(--section-y)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: t.pillarsHead.eyebrow,
    title: t.pillarsHead.title,
    lead: t.pillarsHead.lead
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'clamp(72px,9vw,128px)'
    }
  }, t.pillars.map((p, i) => /*#__PURE__*/React.createElement(ServiceRow, {
    key: p.id,
    index: p.index,
    eyebrow: p.eyebrow,
    title: p.title,
    tagline: p.tagline,
    items: p.items.slice(0, 4),
    reverse: i % 2 === 1,
    mediaVariant: ['fluted', 'glow-stone', 'glow-dark'][i],
    cta: {
      label: t.learnMore,
      onClick: () => go('services', p.id)
    }
  })))), /*#__PURE__*/React.createElement("section", {
    className: "epic-section",
    style: {
      background: 'var(--stone-50)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "epic-container"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: t.testiHead.eyebrow,
    title: t.testiHead.title
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))',
      gap: 16
    }
  }, t.testimonials.map((x, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: i,
    delay: i * 110
  }, /*#__PURE__*/React.createElement(TestimonialCard, _extends({}, x, {
    variant: i === 1 ? 'dark' : 'white'
  }))))))), /*#__PURE__*/React.createElement("section", {
    className: "epic-section epic-container",
    id: "packages"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(PackageCard, {
    badge: t.pkg.badge,
    title: t.pkg.title,
    description: t.pkg.desc,
    includes: t.pkg.includes,
    primaryCta: {
      label: t.cta,
      arrow: true,
      onClick: () => go('book')
    },
    secondaryCta: {
      label: t.pkg.secondary,
      onClick: () => go('services')
    }
  }))), /*#__PURE__*/React.createElement("section", {
    className: "epic-container",
    style: {
      paddingBottom: 'var(--section-y)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: t.stepsHead.eyebrow,
    title: t.stepsHead.title
  }), /*#__PURE__*/React.createElement(NumberedSteps, {
    steps: t.steps
  })), /*#__PURE__*/React.createElement("section", {
    className: "epic-container",
    style: {
      paddingBottom: 'var(--section-y)',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))',
      gap: 48
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: t.faqHead.eyebrow,
    title: t.faqHead.title
  }), /*#__PURE__*/React.createElement(Reveal, {
    style: {
      gridColumn: 'span 1'
    }
  }, /*#__PURE__*/React.createElement(FAQAccordion, {
    items: t.faq
  }))), /*#__PURE__*/React.createElement("section", {
    className: "epic-container",
    style: {
      paddingBottom: 'var(--section-y)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: t.insightsHead.eyebrow,
    title: t.insightsHead.title,
    action: /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      arrow: true,
      onClick: () => go('insights')
    }, t.insightsHead.all)
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))',
      gap: 24
    }
  }, t.insights.slice(0, 3).map((x, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: i,
    delay: i * 110
  }, /*#__PURE__*/React.createElement(InsightCard, _extends({}, x, {
    mediaVariant: x.v,
    href: "#insights"
  })))))), /*#__PURE__*/React.createElement("section", {
    className: "epic-container",
    style: {
      paddingBottom: 'clamp(48px,6vw,96px)'
    }
  }, /*#__PURE__*/React.createElement(CTABand, {
    eyebrow: t.ctaBand.eyebrow,
    title: t.ctaBand.title,
    text: t.ctaBand.text,
    primaryCta: {
      label: t.cta,
      arrow: true,
      onClick: () => go('book')
    }
  })));
}
window.HomeScreen = HomeScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/InsightsScreen.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  Tabs: InTabs,
  InsightCard: InCard,
  SectionHeading: InHead,
  CTABand: InCTA,
  Reveal: InReveal,
  Badge: InBadge,
  GlowSurface: InGlow
} = window.EPICDesignSystem_70c10b;
function InsightsScreen({
  t,
  go
}) {
  const [cat, setCat] = React.useState('all');
  const list = t.insights.filter(x => cat === 'all' || x.category === cat);
  const lead = t.insights[0];
  return /*#__PURE__*/React.createElement("main", {
    style: {
      paddingTop: 'calc(var(--header-h) + clamp(40px,6vw,88px))'
    }
  }, /*#__PURE__*/React.createElement("section", {
    className: "epic-container"
  }, /*#__PURE__*/React.createElement(InHead, {
    eyebrow: t.insightsHead.eyebrow,
    title: t.insightsHead.title
  }), /*#__PURE__*/React.createElement(InReveal, null, /*#__PURE__*/React.createElement("a", {
    href: "#insights",
    className: "epic-insight",
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))',
      gap: 'clamp(24px,4vw,64px)',
      alignItems: 'center',
      marginBottom: 'clamp(56px,7vw,104px)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "epic-insight__media",
    style: {
      aspectRatio: '4/3',
      borderRadius: 'var(--radius-xl)'
    }
  }, /*#__PURE__*/React.createElement(InGlow, {
    variant: "glow"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "epic-insight__meta"
  }, /*#__PURE__*/React.createElement(InBadge, {
    variant: "solid"
  }, lead.category), /*#__PURE__*/React.createElement("span", null, lead.date), /*#__PURE__*/React.createElement("span", null, "\xB7 ", lead.readTime)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    className: "epic-insight__title",
    style: {
      fontSize: 'var(--text-h2)',
      lineHeight: 1.08,
      letterSpacing: 'var(--tracking-heading)'
    }
  }, lead.title)), /*#__PURE__*/React.createElement("p", {
    className: "epic-lead"
  }, lead.excerpt)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 40
    }
  }, /*#__PURE__*/React.createElement(InTabs, {
    items: t.cats,
    value: cat,
    onChange: setCat
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill,minmax(280px,1fr))',
      gap: '48px 24px'
    }
  }, list.map((x, i) => /*#__PURE__*/React.createElement(InReveal, {
    key: x.title,
    delay: i % 3 * 100
  }, /*#__PURE__*/React.createElement(InCard, _extends({}, x, {
    mediaVariant: x.v,
    href: "#insights"
  })))))), /*#__PURE__*/React.createElement("section", {
    className: "epic-container",
    style: {
      paddingBlock: 'var(--section-y) clamp(48px,6vw,96px)'
    }
  }, /*#__PURE__*/React.createElement(InCTA, {
    variant: "glow",
    eyebrow: t.ctaBand.eyebrow,
    title: t.ctaBand.title,
    text: t.ctaBand.text,
    primaryCta: {
      label: t.cta,
      arrow: true,
      onClick: () => go('book')
    }
  })));
}
window.InsightsScreen = InsightsScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/InsightsScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ServicesScreen.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  Hero: SvHero,
  Tabs: SvTabs,
  ServiceRow: SvRow,
  PillarCard: SvPillar,
  SectionHeading: SvHead,
  TeamCard: SvTeam,
  CTABand: SvCTA,
  Reveal: SvReveal
} = window.EPICDesignSystem_70c10b;
function ServicesScreen({
  t,
  go,
  pillar,
  setPillar
}) {
  const active = t.pillars.find(p => p.id === pillar) || t.pillars[0];
  const idx = t.pillars.indexOf(active);
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(SvHero, {
    variant: "glow-stone",
    minHeight: 620,
    eyebrow: t.services.eyebrow,
    title: t.services.title,
    lead: t.services.lead
  }), /*#__PURE__*/React.createElement("section", {
    className: "epic-container",
    style: {
      paddingBlock: 'clamp(48px,6vw,80px)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))',
      gap: 16
    }
  }, t.pillars.map((p, i) => /*#__PURE__*/React.createElement(SvReveal, {
    key: p.id,
    delay: i * 110
  }, /*#__PURE__*/React.createElement(SvPillar, {
    index: p.index,
    title: p.eyebrow,
    tagline: p.title,
    tags: p.tags,
    variant: p.id === active.id ? 'blue' : 'white',
    onClick: e => {
      e.preventDefault();
      setPillar(p.id);
    }
  }))))), /*#__PURE__*/React.createElement("section", {
    className: "epic-container",
    style: {
      paddingBottom: 'var(--section-y)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 56
    }
  }, /*#__PURE__*/React.createElement(SvTabs, {
    items: t.pillars.map(p => ({
      id: p.id,
      label: p.eyebrow
    })),
    value: active.id,
    onChange: setPillar
  })), /*#__PURE__*/React.createElement(SvRow, {
    key: active.id + t.cta,
    index: active.index,
    eyebrow: active.eyebrow,
    title: active.title,
    tagline: active.tagline,
    items: active.items,
    mediaVariant: ['fluted', 'glow-stone', 'glow-dark'][idx],
    cta: {
      label: t.cta,
      variant: 'primary',
      onClick: () => go('book')
    }
  })), /*#__PURE__*/React.createElement("section", {
    className: "epic-section",
    style: {
      background: 'var(--stone-50)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "epic-container"
  }, /*#__PURE__*/React.createElement(SvHead, {
    eyebrow: t.teamHead.eyebrow,
    title: t.teamHead.title
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))',
      gap: 24
    }
  }, t.team.map((m, i) => /*#__PURE__*/React.createElement(SvReveal, {
    key: m.name,
    delay: i * 90
  }, /*#__PURE__*/React.createElement(SvTeam, _extends({}, m, {
    linkedin: "#"
  }))))))), /*#__PURE__*/React.createElement("section", {
    className: "epic-container",
    style: {
      paddingBlock: 'clamp(48px,6vw,96px)'
    }
  }, /*#__PURE__*/React.createElement(SvCTA, {
    variant: "fluted",
    eyebrow: t.ctaBand.eyebrow,
    title: t.pillars[1].title,
    text: t.ctaBand.text,
    primaryCta: {
      label: t.cta,
      arrow: true,
      onClick: () => go('book')
    }
  })));
}
window.ServicesScreen = ServicesScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ServicesScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/copy.js
try { (() => {
window.EPIC_COPY = {
  en: {
    nav: [{
      id: 'home',
      label: 'Home',
      href: '#home'
    }, {
      id: 'services',
      label: 'Services',
      href: '#services'
    }, {
      id: 'insights',
      label: 'Insights',
      href: '#insights'
    }, {
      id: 'book',
      label: 'Contact',
      href: '#book'
    }],
    login: 'Client login',
    cta: 'Book a discovery call',
    explore: 'Explore services',
    wa: 'WhatsApp us',
    hero: {
      eyebrow: 'The back office for education in Saudi Arabia',
      title: 'License faster.\nOpen sooner.\nStart right.',
      lead: 'EPIC takes private schools, kindergartens, international schools, training centres and institutes from licence to launch to scale.',
      foot1: 'Formerly Advanced Quantum Holding',
      foot2: 'Scroll to explore'
    },
    trusted: 'Trusted by operators and investors across the Kingdom',
    stats: [{
      value: '27',
      label: 'Years in Saudi education'
    }, {
      value: '89',
      label: 'Organisations advised'
    }, {
      value: '158',
      label: 'Leaders developed'
    }, {
      value: '4,800',
      label: 'Trainees across 24 centres'
    }],
    statsHead: {
      eyebrow: 'Track record',
      title: 'Nearly three decades inside Saudi education.'
    },
    pillarsHead: {
      eyebrow: 'What we do',
      title: 'Three pillars. One back office.',
      lead: 'One accountable team for every filing, inspection and decision between your idea and a full campus.'
    },
    pillars: [{
      id: 'setup',
      index: '01',
      eyebrow: 'Setup',
      title: 'License faster. Open sooner. Start right.',
      tagline: 'Everything between an idea and opening day, filed and tracked by one team.',
      items: ['Licensing & registration', 'Ministry approvals', 'Curriculum design', 'Saudization planning', 'Financial modelling', 'Facility readiness'],
      tags: ['Licensing', 'Curriculum', 'Saudization']
    }, {
      id: 'compliance',
      index: '02',
      eyebrow: 'Compliance',
      title: 'Stay licensed. Stay accredited. Sleep better.',
      tagline: 'Renewals, accreditation and governance handled before they become deadlines.',
      items: ['Licence renewals', 'ETEC / NCAAA readiness', 'Quality assurance', 'Governance frameworks', 'PDPL compliance', 'Inspection preparation'],
      tags: ['ETEC', 'NCAAA', 'PDPL']
    }, {
      id: 'growth',
      index: '03',
      eyebrow: 'Growth',
      title: 'Grow leaders. Choose partners well. Scale.',
      tagline: 'Leadership, diagnostics and partner decisions for operators ready for the next campus.',
      items: ['Leadership development', 'Institutional diagnostics', 'Partner vetting', 'Admissions system selection', 'LMS selection', 'Expansion planning'],
      tags: ['Leadership', 'Diagnostics', 'LMS']
    }],
    learnMore: 'Learn more',
    testiHead: {
      eyebrow: 'Clients',
      title: 'Owners who opened on time.'
    },
    testimonials: [{
      quote: 'We opened a term early. EPIC handled every approval and we never chased a single document.',
      name: 'Nora Al-Harbi',
      role: 'Founder, kindergarten group'
    }, {
      quote: 'Our accreditation visit was the calmest week of the year. Everything was already in the file.',
      name: 'Khalid Al-Mutairi',
      role: 'Principal, international school'
    }, {
      quote: 'They told us which LMS not to buy. That alone paid for the engagement.',
      name: 'Reem Al-Saud',
      role: 'COO, training centre network'
    }],
    pkg: {
      badge: 'Featured package',
      title: 'SCG: Setup, Compliance and Growth in one engagement.',
      desc: 'One EPIC lead, one roadmap and one annual plan covering every licence, accreditation and leadership milestone.',
      includes: ['Licensing, renewals and Ministry approvals', 'ETEC / NCAAA readiness and mock visits', 'Leadership development for your senior team', 'Partner and LMS vetting'],
      secondary: 'See what\u2019s included'
    },
    stepsHead: {
      eyebrow: 'Your journey with EPIC',
      title: 'Four steps. One accountable team.'
    },
    steps: [{
      title: 'Discovery call',
      text: 'Thirty minutes on your plans, your timeline and where you are in the licensing process.'
    }, {
      title: 'Roadmap',
      text: 'A written plan with every approval, document and deadline, owned by one EPIC lead.'
    }, {
      title: 'Execution',
      text: 'We file, follow up and prepare you for every inspection while you focus on the school.'
    }, {
      title: 'Launch & beyond',
      text: 'Open on schedule, then stay licensed and accredited with ongoing compliance support.'
    }],
    faqHead: {
      eyebrow: 'FAQ',
      title: 'Questions owners ask first.'
    },
    faq: [{
      q: 'How long does a private school licence take?',
      a: 'It depends on the stage, city and institution type. In week one we give you a dated roadmap with every approval on it, so you know your opening date before you commit to a lease.'
    }, {
      q: 'Do you handle ETEC and NCAAA accreditation?',
      a: 'Yes. We run readiness reviews, build the evidence file, train your team and run mock visits ahead of the real one.'
    }, {
      q: 'Can you help with Saudization targets?',
      a: 'We plan staffing against Saudization requirements from the financial model onward, so hiring and licensing stay aligned.'
    }, {
      q: 'Are you a law firm?',
      a: 'No. EPIC is not a law firm. We manage licensing, compliance and operations, and work alongside your legal counsel where needed.'
    }],
    insightsHead: {
      eyebrow: 'Insights',
      title: 'Notes from the field.',
      all: 'All insights'
    },
    insights: [{
      category: 'Compliance',
      date: 'Oct 2026',
      readTime: '6 min',
      title: 'What changes in the 2026 ETEC accreditation cycle',
      excerpt: 'The evidence owners should start collecting this term.',
      v: 'glow-stone'
    }, {
      category: 'Setup',
      date: 'Sep 2026',
      readTime: '4 min',
      title: 'Kindergarten licensing: the five documents that slow everyone down',
      excerpt: 'And how to have them ready before you sign a lease.',
      v: 'fluted'
    }, {
      category: 'Growth',
      date: 'Aug 2026',
      readTime: '8 min',
      title: 'Choosing an LMS for a multi-campus school group',
      excerpt: 'A vendor-neutral checklist from 30 selections.',
      v: 'glow-dark'
    }, {
      category: 'Compliance',
      date: 'Jul 2026',
      readTime: '5 min',
      title: 'PDPL for schools: a practical starting point',
      excerpt: 'What student-data obligations look like day to day.',
      v: 'fluted-dark'
    }, {
      category: 'Setup',
      date: 'Jun 2026',
      readTime: '7 min',
      title: 'Financial modelling for a first private school',
      excerpt: 'Enrolment ramps, fees and the Saudization line.',
      v: 'glow'
    }, {
      category: 'Growth',
      date: 'May 2026',
      readTime: '6 min',
      title: 'Developing principals from inside your network',
      excerpt: 'What 158 leaders taught us about succession.',
      v: 'blue'
    }],
    cats: [{
      id: 'all',
      label: 'All'
    }, {
      id: 'Setup',
      label: 'Setup'
    }, {
      id: 'Compliance',
      label: 'Compliance'
    }, {
      id: 'Growth',
      label: 'Growth'
    }],
    ctaBand: {
      eyebrow: 'Make this real',
      title: 'Ready to open your doors?',
      text: 'Book a 30-minute discovery call with an EPIC lead. No obligation.'
    },
    services: {
      eyebrow: 'Services',
      title: 'Every step from licence\nto launch to scale.',
      lead: 'Pick a pillar to see what EPIC handles for you.'
    },
    team: [{
      name: 'Sara Al-Qahtani',
      role: 'Managing Partner'
    }, {
      name: 'Faisal Al-Otaibi',
      role: 'Head of Compliance'
    }, {
      name: 'Lina Haddad',
      role: 'Head of Setup'
    }, {
      name: 'Omar Al-Shehri',
      role: 'Head of Growth'
    }],
    teamHead: {
      eyebrow: 'Team',
      title: 'The people who carry your file.'
    },
    book: {
      eyebrow: 'Book a discovery call',
      title: 'Thirty minutes. A clear next step.',
      lead: 'Tell us where you are. An EPIC lead will reply within one working day with a time for your call.',
      name: 'Full name',
      email: 'Work email',
      phone: 'Mobile',
      type: 'Institution type',
      typePh: 'Choose one',
      types: ['Private school', 'Kindergarten', 'International school', 'Training centre', 'Higher education institute'],
      stage: 'Where are you today?',
      stages: ['Planning', 'Licensing', 'Operating'],
      msg: 'What are you planning?',
      msgHint: 'Stage, city and target opening date.',
      consent: 'I agree to EPIC processing my details under the PDPL privacy notice.',
      submit: 'Request my call',
      done: 'Thank you. We\u2019ll be in touch within one working day.',
      doneSub: 'Prefer to talk now? Message us on WhatsApp.',
      again: 'Send another request',
      points: ['Reply within one working day', 'Bilingual team, English and Arabic', 'No obligation, no sales script']
    }
  },
  ar: {
    nav: [{
      id: 'home',
      label: 'الرئيسية',
      href: '#home'
    }, {
      id: 'services',
      label: 'الخدمات',
      href: '#services'
    }, {
      id: 'insights',
      label: 'رؤى',
      href: '#insights'
    }, {
      id: 'book',
      label: 'تواصل معنا',
      href: '#book'
    }],
    login: 'دخول العملاء',
    cta: 'احجز مكالمة تعريفية',
    explore: 'استكشف الخدمات',
    wa: 'تواصل عبر واتساب',
    hero: {
      eyebrow: 'المكتب الخلفي لقطاع التعليم في المملكة',
      title: 'رخّص أسرع.\nافتتح أبكر.\nابدأ بشكل صحيح.',
      lead: 'تأخذ إبيك المدارس الأهلية ورياض الأطفال والمدارس العالمية ومراكز التدريب والمعاهد من الترخيص إلى الافتتاح إلى التوسع.',
      foot1: 'سابقًا: الكم المتقدم القابضة',
      foot2: 'مرّر للاستكشاف'
    },
    trusted: 'موثوق من المشغّلين والمستثمرين في أنحاء المملكة',
    stats: [{
      value: '27',
      label: 'عامًا في التعليم السعودي'
    }, {
      value: '89',
      label: 'جهة استشرناها'
    }, {
      value: '158',
      label: 'قائدًا طوّرناهم'
    }, {
      value: '4,800',
      label: 'متدرب عبر 24 مركزًا'
    }],
    statsHead: {
      eyebrow: 'سجلّنا',
      title: 'قرابة ثلاثة عقود داخل التعليم السعودي.'
    },
    pillarsHead: {
      eyebrow: 'ماذا نقدّم',
      title: 'ثلاث ركائز. مكتب خلفي واحد.',
      lead: 'فريق واحد مسؤول عن كل طلب وكل زيارة وكل قرار بين فكرتك والحرم الكامل.'
    },
    pillars: [{
      id: 'setup',
      index: '01',
      eyebrow: 'التأسيس',
      title: 'رخّص أسرع. افتتح أبكر. ابدأ بشكل صحيح.',
      tagline: 'كل ما بين الفكرة ويوم الافتتاح، يُقدَّم ويُتابَع من فريق واحد.',
      items: ['الترخيص والتسجيل', 'موافقات الوزارة', 'تصميم المناهج', 'تخطيط التوطين', 'النمذجة المالية', 'جاهزية المنشأة'],
      tags: ['الترخيص', 'المناهج', 'التوطين']
    }, {
      id: 'compliance',
      index: '02',
      eyebrow: 'الامتثال',
      title: 'ابقَ مرخّصًا. ابقَ معتمدًا. نَم مطمئنًا.',
      tagline: 'التجديدات والاعتماد والحوكمة تُنجز قبل أن تصبح مواعيد نهائية.',
      items: ['تجديد التراخيص', 'جاهزية هيئة تقويم التعليم / المركز الوطني للتقويم', 'ضمان الجودة', 'أطر الحوكمة', 'نظام حماية البيانات الشخصية', 'الاستعداد للزيارات'],
      tags: ['تقويم', 'اعتماد', 'حماية البيانات']
    }, {
      id: 'growth',
      index: '03',
      eyebrow: 'النمو',
      title: 'طوّر القادة. اختر الشركاء بعناية. توسّع.',
      tagline: 'القيادة والتشخيص وقرارات الشراكة للمشغّلين المستعدين للحرم التالي.',
      items: ['تطوير القيادات', 'التشخيص المؤسسي', 'تقييم الشركاء', 'اختيار نظام القبول', 'اختيار نظام إدارة التعلم', 'تخطيط التوسع'],
      tags: ['القيادة', 'التشخيص', 'أنظمة التعلم']
    }],
    learnMore: 'اعرف المزيد',
    testiHead: {
      eyebrow: 'عملاؤنا',
      title: 'ملّاك افتتحوا في الموعد.'
    },
    testimonials: [{
      quote: 'افتتحنا قبل موعدنا بفصل دراسي. تولّت إبيك كل الموافقات ولم نلاحق مستندًا واحدًا.',
      name: 'نورة الحربي',
      role: 'مؤسسة، مجموعة رياض أطفال'
    }, {
      quote: 'كانت زيارة الاعتماد أهدأ أسبوع في السنة. كل شيء كان جاهزًا في الملف.',
      name: 'خالد المطيري',
      role: 'مدير، مدرسة عالمية'
    }, {
      quote: 'أخبرونا أي نظام تعلّم لا نشتريه. هذا وحده غطّى تكلفة التعاقد.',
      name: 'ريم آل سعود',
      role: 'الرئيس التنفيذي للعمليات، شبكة مراكز تدريب'
    }],
    pkg: {
      badge: 'الباقة المميزة',
      title: 'SCG: التأسيس والامتثال والنمو في تعاقد واحد.',
      desc: 'قائد واحد من إبيك، وخارطة طريق واحدة، وخطة سنوية تغطي كل ترخيص واعتماد ومحطة قيادية.',
      includes: ['الترخيص والتجديدات وموافقات الوزارة', 'جاهزية الاعتماد والزيارات التجريبية', 'تطوير القيادات لفريقك', 'تقييم الشركاء وأنظمة التعلم'],
      secondary: 'ماذا تشمل الباقة'
    },
    stepsHead: {
      eyebrow: 'رحلتك مع إبيك',
      title: 'أربع خطوات. فريق واحد مسؤول.'
    },
    steps: [{
      title: 'مكالمة تعريفية',
      text: 'ثلاثون دقيقة عن خططك وجدولك الزمني وموقعك في مسار الترخيص.'
    }, {
      title: 'خارطة الطريق',
      text: 'خطة مكتوبة بكل موافقة ومستند وموعد، يتولاها قائد واحد من إبيك.'
    }, {
      title: 'التنفيذ',
      text: 'نقدّم ونتابع ونجهّزك لكل زيارة بينما تركّز على مدرستك.'
    }, {
      title: 'الافتتاح وما بعده',
      text: 'افتتح في الموعد، ثم ابقَ مرخّصًا ومعتمدًا بدعم امتثال مستمر.'
    }],
    faqHead: {
      eyebrow: 'الأسئلة الشائعة',
      title: 'أول ما يسأله الملّاك.'
    },
    faq: [{
      q: 'كم يستغرق ترخيص مدرسة أهلية؟',
      a: 'يعتمد على المرحلة والمدينة ونوع المنشأة. في الأسبوع الأول نسلّمك خارطة طريق مؤرّخة بكل موافقة، لتعرف موعد افتتاحك قبل توقيع عقد الإيجار.'
    }, {
      q: 'هل تتولون اعتماد هيئة تقويم التعليم والمركز الوطني؟',
      a: 'نعم. نجري مراجعات الجاهزية ونبني ملف الأدلة وندرّب فريقك وننفّذ زيارات تجريبية قبل الزيارة الفعلية.'
    }, {
      q: 'هل تساعدون في نسب التوطين؟',
      a: 'نخطط للتوظيف وفق متطلبات التوطين بدءًا من النموذج المالي، ليبقى التوظيف والترخيص متوافقين.'
    }, {
      q: 'هل أنتم مكتب محاماة؟',
      a: 'لا. إبيك ليست مكتب محاماة. ندير الترخيص والامتثال والعمليات، ونعمل مع مستشارك القانوني عند الحاجة.'
    }],
    insightsHead: {
      eyebrow: 'رؤى',
      title: 'ملاحظات من الميدان.',
      all: 'كل الرؤى'
    },
    insights: [{
      category: 'الامتثال',
      date: 'أكتوبر 2026',
      readTime: '6 دقائق',
      title: 'ما الذي يتغير في دورة اعتماد 2026',
      excerpt: 'الأدلة التي ينبغي للملّاك جمعها هذا الفصل.',
      v: 'glow-stone'
    }, {
      category: 'التأسيس',
      date: 'سبتمبر 2026',
      readTime: '4 دقائق',
      title: 'ترخيص رياض الأطفال: خمسة مستندات تبطئ الجميع',
      excerpt: 'وكيف تجهّزها قبل توقيع الإيجار.',
      v: 'fluted'
    }, {
      category: 'النمو',
      date: 'أغسطس 2026',
      readTime: '8 دقائق',
      title: 'اختيار نظام تعلّم لمجموعة مدارس متعددة الفروع',
      excerpt: 'قائمة محايدة من 30 عملية اختيار.',
      v: 'glow-dark'
    }, {
      category: 'الامتثال',
      date: 'يوليو 2026',
      readTime: '5 دقائق',
      title: 'حماية البيانات للمدارس: نقطة بداية عملية',
      excerpt: 'كيف تبدو التزامات بيانات الطلاب يومًا بيوم.',
      v: 'fluted-dark'
    }, {
      category: 'التأسيس',
      date: 'يونيو 2026',
      readTime: '7 دقائق',
      title: 'النمذجة المالية لأول مدرسة أهلية',
      excerpt: 'نمو التسجيل والرسوم وبند التوطين.',
      v: 'glow'
    }, {
      category: 'النمو',
      date: 'مايو 2026',
      readTime: '6 دقائق',
      title: 'تطوير المديرين من داخل شبكتك',
      excerpt: 'ما علّمنا إياه 158 قائدًا عن التعاقب.',
      v: 'blue'
    }],
    cats: [{
      id: 'all',
      label: 'الكل'
    }, {
      id: 'التأسيس',
      label: 'التأسيس'
    }, {
      id: 'الامتثال',
      label: 'الامتثال'
    }, {
      id: 'النمو',
      label: 'النمو'
    }],
    ctaBand: {
      eyebrow: 'اجعلها حقيقة',
      title: 'جاهز لفتح أبوابك؟',
      text: 'احجز مكالمة تعريفية لمدة 30 دقيقة مع قائد من إبيك. دون أي التزام.'
    },
    services: {
      eyebrow: 'الخدمات',
      title: 'كل خطوة من الترخيص\nإلى الافتتاح إلى التوسع.',
      lead: 'اختر ركيزة لترى ما تتولاه إبيك عنك.'
    },
    team: [{
      name: 'سارة القحطاني',
      role: 'الشريك المدير'
    }, {
      name: 'فيصل العتيبي',
      role: 'رئيس الامتثال'
    }, {
      name: 'لينا حداد',
      role: 'رئيسة التأسيس'
    }, {
      name: 'عمر الشهري',
      role: 'رئيس النمو'
    }],
    teamHead: {
      eyebrow: 'الفريق',
      title: 'الأشخاص الذين يحملون ملفك.'
    },
    book: {
      eyebrow: 'احجز مكالمة تعريفية',
      title: 'ثلاثون دقيقة. خطوة تالية واضحة.',
      lead: 'أخبرنا أين أنت اليوم. سيرد عليك قائد من إبيك خلال يوم عمل واحد بموعد مكالمتك.',
      name: 'الاسم الكامل',
      email: 'البريد الإلكتروني للعمل',
      phone: 'الجوال',
      type: 'نوع المنشأة',
      typePh: 'اختر نوعًا',
      types: ['مدرسة أهلية', 'روضة أطفال', 'مدرسة عالمية', 'مركز تدريب', 'معهد تعليم عالٍ'],
      stage: 'أين أنت اليوم؟',
      stages: ['التخطيط', 'الترخيص', 'التشغيل'],
      msg: 'ما الذي تخطط له؟',
      msgHint: 'المرحلة والمدينة وموعد الافتتاح المستهدف.',
      consent: 'أوافق على معالجة إبيك لبياناتي وفق إشعار الخصوصية.',
      submit: 'اطلب مكالمتي',
      done: 'شكرًا لك. سنتواصل معك خلال يوم عمل واحد.',
      doneSub: 'تفضّل الحديث الآن؟ راسلنا عبر واتساب.',
      again: 'أرسل طلبًا آخر',
      points: ['رد خلال يوم عمل واحد', 'فريق ثنائي اللغة، عربي وإنجليزي', 'دون التزام ودون نص مبيعات']
    }
  }
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/copy.js", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.WhatsAppButton = __ds_scope.WhatsAppButton;

__ds_ns.GlowSurface = __ds_scope.GlowSurface;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.ICON_NAMES = __ds_scope.ICON_NAMES;

__ds_ns.EpicMark = __ds_scope.EpicMark;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Reveal = __ds_scope.Reveal;

__ds_ns.InsightCard = __ds_scope.InsightCard;

__ds_ns.PackageCard = __ds_scope.PackageCard;

__ds_ns.PillarCard = __ds_scope.PillarCard;

__ds_ns.ProfileCard = __ds_scope.ProfileCard;

__ds_ns.TeamCard = __ds_scope.TeamCard;

__ds_ns.TestimonialCard = __ds_scope.TestimonialCard;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.SiteHeader = __ds_scope.SiteHeader;

__ds_ns.CTABand = __ds_scope.CTABand;

__ds_ns.FAQAccordion = __ds_scope.FAQAccordion;

__ds_ns.Hero = __ds_scope.Hero;

__ds_ns.LogoStrip = __ds_scope.LogoStrip;

__ds_ns.NumberedSteps = __ds_scope.NumberedSteps;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.ServiceRow = __ds_scope.ServiceRow;

__ds_ns.StatRow = __ds_scope.StatRow;

})();

import React from 'react';
import { Icon } from '../brand/Icon.jsx';
import { Badge } from '../display/Badge.jsx';
import { Button } from '../actions/Button.jsx';
import { GlowSurface } from '../brand/GlowSurface.jsx';

export function PackageCard({ badge = 'Featured package', title = 'SCG — Setup, Compliance, Growth', description, includes = [], price, priceUnit, primaryCta = { label: 'Book a discovery call', arrow: true }, secondaryCta, image, mediaVariant = 'fluted', variant = 'black', className = '' }) {
  return (
    <div className={'epic-package epic-on-dark' + (variant === 'blue' ? ' epic-package--blue' : '') + (className ? ' ' + className : '')}>
      <div className="epic-package__body">
        {badge ? <div><Badge variant={variant === 'blue' ? 'outline' : 'solid'} upper>{badge}</Badge></div> : null}
        <h3 className="epic-package__title">{title}</h3>
        {description ? <p className="epic-package__desc">{description}</p> : null}
        {includes.length ? <ul className="epic-package__list">{includes.map((x, i) => <li key={i}><Icon name="check" size={18} />{x}</li>)}</ul> : null}
        {price ? <div className="epic-package__price"><span className="epic-package__amount">{price}</span>{priceUnit ? <span className="epic-package__unit">{priceUnit}</span> : null}</div> : null}
        <div className="epic-package__actions">
          {primaryCta ? <Button variant={variant === 'blue' ? 'light' : 'primary'} size="lg" href={primaryCta.href} onClick={primaryCta.onClick} arrow={primaryCta.arrow}>{primaryCta.label}</Button> : null}
          {secondaryCta ? <Button variant="outline" size="lg" href={secondaryCta.href} onClick={secondaryCta.onClick}>{secondaryCta.label}</Button> : null}
        </div>
      </div>
      <div className="epic-package__media">{image ? <img src={image} alt="" /> : <GlowSurface variant={variant === 'blue' ? 'fluted-dark' : mediaVariant} />}</div>
    </div>
  );
}

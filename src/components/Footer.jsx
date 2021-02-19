import React from 'react';

export default function Footer() {
  return (
    <React.Fragment>
      <p style={{bottom: '1rem'}}>
        <small>
          © Dominik Haid &nbsp;
          <a
            href="https://www.dominikhaid.de"
            rel={'noreferrer'}
            target="_blank"
          >
            www.dominikhaid.de
          </a>
        </small>
      </p>
    </React.Fragment>
  );
}

import React from 'react';

export default function Footer() {
  return (
    <React.Fragment>
      <footer style={{bottom: '3rem'}}>
        <p>
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
      </footer>
    </React.Fragment>
  );
}

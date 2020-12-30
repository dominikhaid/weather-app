import React from 'react';

export default function FooterContainer() {
  return (
    <React.Fragment>
      <footer className="container-full bg-secondary pb-5">
        <p className="text-center text-primary-600 text-md">
          <small>
            © Dominik Haid{' '}
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

import React from 'react';

export default function FooterContainer() {
  return (
    <React.Fragment>
      <footer className="bg-primary p-2xl container-normal max-w-1/2">
        <p className="text-white text-center text-primary text-md">
          <small className="text-white">
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

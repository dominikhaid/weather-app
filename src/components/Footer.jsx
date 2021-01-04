import React from 'react';

export default function FooterContainer() {
  return (
    <React.Fragment>
      <footer
        className="px-4xl w-100 absolute bottom-xs"
        style={{bottom: '0px'}}
      >
        <p className="text-white text-center text-white text-md">
          <small className="text-white">
            © Dominik Haid &nbsp;
            <a
              href="https://www.dominikhaid.de"
              rel={'noreferrer'}
              target="_blank"
            >
              {' '}
              www.dominikhaid.de
            </a>
          </small>
        </p>
      </footer>
    </React.Fragment>
  );
}

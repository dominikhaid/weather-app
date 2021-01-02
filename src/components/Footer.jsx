import React from 'react';

export default function FooterContainer() {
  return (
    <React.Fragment>
      <footer className="p-4xl w-100 absolute" style={{bottom: '0px'}}>
        <p className="text-white text-center text-white text-md">
          <small className="text-white">
            © Dominik Haid &nbsp;
            <a
              style={{color: 'var(--color-secundary)'}}
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

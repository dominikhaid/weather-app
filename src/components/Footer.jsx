import React from 'react';

export default function FooterContainer(props) {
  return (
    <React.Fragment>
      <footer className="felx-center">
        <p style={{textAlign: 'center'}}>
          <small>
            © Dominik Haid{' '}
            <a href="https://www.dominikhaid.de" target="_blank">
              www.dominikhaid.de
            </a>
          </small>
        </p>
      </footer>
    </React.Fragment>
  );
}

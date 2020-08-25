import React from 'react';
import App from 'next/app';
import '../../public/less/main.css';
import NavContainer from '@/components/Header';
import RequestCount from '@/components/RequestCount';
import FooterContainer from '@/components/Footer';
import {Provider} from '@/context/provider';
import AppContext from '@/context/app-context';
import Link from 'next/link';

import {Header, List, Modal, Button, Icon} from 'semantic-ui-react';

export function RenderModal(props) {
  return (
    <Modal
      onClose={() => {
        props.setNewState({modalState: false});
      }}
      onOpen={() => {
        props.setNewState({modalState: false});
      }}
      open={props.modalState}
    >
      <Modal.Header>{props.modalHeader}</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <Header as="h4">{props.modalHeaderDes}</Header>
        </Modal.Description>
        <List selection verticalAlign="middle">
          {props.modalData && props.modalData.length > 0
            ? props.modalData.map((city, index) => {
                return (
                  <List.Item>
                    <List.Content
                      className={
                        props.modalActiveItem === index ? 'active' : ''
                      }
                      cityInd={index}
                      onClick={e => {
                        props.setNewState({
                          ...props,
                          modalActiveItem: index,
                        });
                      }}
                    >
                      <List.Header>{city.city}</List.Header>
                      <List.Description>{city.plz}</List.Description>
                    </List.Content>
                    {props.modalActiveItem === index ? (
                      <Icon name={'check circle'} />
                    ) : (
                      false
                    )}
                  </List.Item>
                );
              })
            : ''}
        </List>
      </Modal.Content>
      <Modal.Actions>
        <Button
          color="black"
          onClick={() => {
            props.setNewState({
              ...props,
              modalState: false,
            });
          }}
        >
          Abbrechen
        </Button>
        {props.modalActiveItem !== false ? (
          <Link href="/weather">
            <Button
              content="Ok"
              labelPosition="right"
              icon="checkmark"
              positive
            />
          </Link>
        ) : (
          <Button
            disabled
            content="Ok"
            labelPosition="right"
            icon="checkmark"
            positive
          />
        )}
      </Modal.Actions>
    </Modal>
  );
}

export function reportWebVitals(metric) {
  if (metric.label === 'web-vital') {
    console.debug('METRIC', metric);
  }
}

class MainApp extends App {
  state = {
    modalState: false,
    modalMode: false,
    modalData: [],
    modalHeader: false,
    modalHeaderDes: false,
    modalActiveItem: false,
    setNewState: e => {
      this.setState(e);
    },
  };

  render() {
    const {Component, pageProps} = this.props;

    return (
      <Provider>
        <AppContext.Consumer>
          {stateData => {
            return (
              <React.Fragment>
                <main
                  style={{marginBottom: '1rem'}}
                  id="main"
                  className="scrollBoxY dimmable"
                >
                  <RequestCount {...stateData} />
                  <Component
                    {...stateData}
                    modal={this.state}
                    RenderModal={RenderModal}
                  />
                </main>
                <NavContainer {...stateData} />
                <FooterContainer />
              </React.Fragment>
            );
          }}
        </AppContext.Consumer>
      </Provider>
    );
  }
}

export default MainApp;

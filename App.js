import React, { Component } from 'react';
import './App.css';
import { Layout, Row, Col, Button, Modal, Icon } from 'antd';

import JsonEditor from './components/JsonEditor';

const { Header } = Layout;

class App extends Component {
  state = {
    visible: false
  };

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  render() {
    return (
      <div>
        <Layout>
          <Header
            style={{
              background: '#4285f4',
              boxShadow: '5px 0 5px 0 rgba(0,0,0,0.7)',
              zIndex: '2 '
            }}
          >
            <Row type="flex" justify="start" align="middle">
              <Col
                span={8}
                style={{
                  color: 'white',
                  fontSize: '22px',
                  fontWeight: 'bold',
                  fontFamily: 'monospace',
                  letterSpacing: '1px'
                }}
              >
                {' '}
                JSON-EDITOR-EXAMPLE
              </Col>
              <Col span={2} offset={14}>
                <Button
                  type="primary"
                  size="default"
                  style={{
                    color: 'white',
                    fontSize: '15px',
                    fontWeight: 'bold',
                    fontFamily: 'monospace',
                    letterSpacing: '1px',
                    backgroundColor: '#4da0ee'
                  }}
                  onClick={this.showModal}
                >
                  <Icon
                    type="plus"
                    style={{
                      fontSize: 15,
                      fontFamily: 'monospace',
                      fontWeight: 'bold'
                    }}
                  />{' '}
                  | PIPE
                </Button>
                <Modal
                  title="Add-Pipeline"
                  visible={this.state.visible}
                  onOk={this.handleOk}
                  onCancel={this.handleCancel}
                  width="800px"
                >
                  <JsonEditor />
                  <p />
                  <p>
                    Use <code>addn</code> <strong>snippet</strong> for adding{' '}
                    <strong>pipe-node</strong>. Use <code>Ctrl+Space</code> for{' '}
                    <strong>auto-completion</strong>.
                  </p>
                </Modal>
              </Col>
            </Row>
          </Header>
        </Layout>
      </div>
    );
  }
}

export default App;

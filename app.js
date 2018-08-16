import React, { Component } from 'react';
import './App.css';
import { Layout, Row, Col, Button, Modal, Icon } from 'antd';

import JsonEditor from './components/JsonEditor';
const ReactMarkdown = require('react-markdown');

const { Header } = Layout;

const mdNotes ='For auto-complete use `Ctrl+Enter`.\n\nType `nodeadd` for node-adding snippet.\n';

class App extends Component {
  state = {
    visible: false
  };

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOK = e => {
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
                span={2}
                style={{
                  color: 'white',
                  fontSize: '22px',
                  fontWeight: 'bold',
                  fontFamily: 'monospace',
                  letterSpacing: '1px'
                }}
              >
                {' '}
                HKUBE
              </Col>
              <Col span={10} offset={6} />
              <Col span={2} offset={4}>
                <Button
                  className="Add-Pipe"
                  type="primary"
                  size="default"
                  style={{
                    color: 'white',
                    fontSize: '15px',
                    fontWeight: 'bold',
                    fontFamily: 'monospace',
                    letterSpacing: '1px'
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
                  <ReactMarkdown source={mdNotes} />
                </Modal>
              </Col>
              <Col span={2} />
            </Row>
          </Header>
        </Layout>
      </div>
    );
  }
}

export default App;

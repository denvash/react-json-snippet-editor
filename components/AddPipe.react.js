import React, { Component } from 'react';
import 'antd/dist/antd.css'

import { Layout, Row, Col, Button, Modal, Icon } from 'antd';
import ReactJson from 'react-json-view';

import JsonEditor from './components/JsonEditor.react';
import template from './lib/json-object.json';

const jsonTemplate = JSON.stringify(template, null, 2);

const { Header, Content } = Layout;

class AddPipe extends Component {
  constructor() {
    super();
    this.pipe = jsonTemplate;
    this.saved = this.pipe;
  }
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
    this.saved = this.pipe;
    this.setState({
      visible: false
    });
  };

  handleReset = e => {
    console.log(e);
    this.pipe = jsonTemplate;
    this.saved = this.pipe;
    this.setState({
      visible: false
    });
    this.setState({
      visible: true
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
                  footer={[
                    <Button onClick={this.handleCancel}> Cancel</Button>,
                    <Button onClick={this.handleReset}> Reset</Button>,
                    <Button
                      type="primary"
                      size="default"
                      onClick={this.handleOk}
                    >
                      {' '}
                      Add Pipe
                    </Button>
                  ]}
                >
                  <JsonEditor
                    jsonTemplate={this.saved}
                    pipe={newPipe => (this.pipe = newPipe)}
                  />
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
          <Content>
            <ReactJson
              src={JSON.parse(this.pipe)}
              name={false}
              enableClipboard={false}
              displayObjectSize={false}
              displayDataTypes={false}
              theme="monokai"
              style={{
                fontWeight: 'bold',
                fontFamily: 'monospace',
                letterSpacing: '1px',
                padding: 24,
                minHeight: 280,
              }}
            />
          </Content>
        </Layout>
      </div>
    );
  }
}

export default AddPipe;

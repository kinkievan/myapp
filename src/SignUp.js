import 'antd/dist/antd.css';
import {
    Form,
    Input,
    Select,
    Button,
    Row,
    Col,
    Avatar,
    Radio,
    InputNumber,
} from 'antd';
import request from './requests/linedevelopers'
import dmhubRequest from './requests/dmhub'
import React, { Component } from 'react';
import qs from 'qs';
import extensionRequest from './requests/extension'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

const client_id = '1655873978'
const client_secret = '0baf50135c4d9cf4e4b2ba80da55e929'
class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            picture: '',
            redirectUri: 'https://dry-spire-87445.herokuapp.com/'
        };
    }


    componentDidMount() {
        const query = new URLSearchParams(
            this.props.location.search
        );
        const code = query.get("code")
        if (code) {
            this.setState({ code: code })
            this.getLineToken(code)
        }
    }


    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            const mobile = `${values['prefix']} ${values['mobile'].substring(1, values['mobile'].length)}`
            console.log(mobile)
            if (!err) {
                extensionRequest.post('/dm_hub/processUser', { ...values, lineId: this.state.sub, mobile: mobile, img: this.state.picture })
                    .then(res => {
                        if (res.data.code === '1') {
                            window.location.href = `linesuccess?url=${this.state.picture}`;
                        }
                        else {
                            alert('會員資料加入失敗,請重新確認資料')
                        }
                    })
            }
        });
    }
    getLineToken = (code) => {
        const data = qs.stringify({
            grant_type: 'authorization_code',
            code: code,
            redirect_uri: this.state.redirectUri,
            client_id: client_id,
            client_secret: client_secret,
        });
        const headers = {
            'Content-Type': 'application/x-www-form-urlencoded',
        }
        request.post('token', data, { headers: headers }).then((res) => {
            const tokenData = res.data
            this.setState({
                ...tokenData
            })
            this.getLindProfile(tokenData)
        })
    }

    getLindProfile = (tokenData) => {
        const data = qs.stringify({
            id_token: tokenData.id_token,
            client_id: client_id
        })
        const headers = {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': `${tokenData.token_type} ${tokenData.access_token}`
        }

        request.post('verify', data, { headers: headers }).then((res) => {
            console.log(res)
            const userData = res.data
            this.props.form.setFieldsValue({
                email: userData.email,
                name: userData.name
            });
            this.setState({
                ...userData
            })
        })
    }
    close = () => {
        window.location.href = `linesuccess?url=${this.state.picture}`;
    }

    render() {
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 10 },
            },
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 16,
                    offset: 8,
                },
            },
        };
        const { Option } = Select;
        const { getFieldDecorator } = this.props.form;
        const prefixSelector = getFieldDecorator('prefix', {
            initialValue: '+886',
        })(
            <Select style={{ width: 80 }}>
                <Option value="+866">+886</Option>
            </Select>,
        );

        return (
            <div style={{ padding: 10 }}>
                <Row>
                    <Col span={2}></Col>
                    <Col span={20}>
                        <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                            <Form.Item
                                label=" "
                                colon={false}
                            >
                                <h2>歡迎加入會員</h2>
                                <Avatar shape="square" size={80} src={this.state.picture} />
                            </Form.Item>
                            <Form.Item
                                label="姓名"
                            >
                                {getFieldDecorator('name', {
                                    rules: [{ required: true, message: '請輸入姓名!', whitespace: true }],
                                })(<Input />)}
                            </Form.Item>

                            <Form.Item label="電話">
                                {getFieldDecorator('mobile', {
                                    rules: [{ pattern: new RegExp('^09\\d{8}$'), required: true, message: '電話格式錯誤!' }],
                                })(<Input style={{ width: '100%' }} />)}
                            </Form.Item>
                            <Form.Item label="E-mail">
                                {getFieldDecorator('email', {
                                    rules: [{ type: 'email', required: true, message: 'E-mail錯誤' }],
                                })(<Input style={{ width: '100%' }} />)}
                            </Form.Item>
                            <Form.Item label="性別">
                                {getFieldDecorator('gender', {
                                })(
                                    <Radio.Group >
                                        <Radio value={1}>男</Radio>
                                        <Radio value={2}>女</Radio>
                                    </Radio.Group>
                                )}
                            </Form.Item>


                            <Form.Item label="年齡">
                                {getFieldDecorator('age', {

                                })(<InputNumber />)}
                            </Form.Item>
                            <Form.Item label="地址">
                                {getFieldDecorator('homeAddress', {

                                })(<Input style={{ width: '100%' }} />)}
                            </Form.Item>
                            <Form.Item {...tailFormItemLayout}>
                                <Button type="primary" htmlType="submit">
                                    加入會員
          </Button>
                            </Form.Item>
                        </Form>
                    </Col>
                </Row>
            </div >
        );
    }
}
export default Form.create()(SignUp);


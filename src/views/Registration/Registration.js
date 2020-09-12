import React from 'react';
import "./style.css"
import {Form, Input, Tooltip, Select, Button,} from 'antd';
import {QuestionCircleOutlined} from '@ant-design/icons';

const axios = require('axios');
const {Option} = Select;
const formItemLayout = {
    labelCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 8,
        },
    },
    wrapperCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 16,
        },
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


const Registration = () => {
    const [form] = Form.useForm();

    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
            <Select
                style={{
                    width: 70,
                }}
            >
                <Option value="48">+48</Option>
                <Option value="87">+87</Option>
            </Select>
        </Form.Item>
    );

    const handleClick = () =>{
        const data = {
            username: form.getFieldValue("nickname"),
            password: form.getFieldValue("password"),
            repeatedPassword: form.getFieldValue("confirm"),
            email: form.getFieldValue("email")
        }

        console.log(data)
        axios.post('http://cosmo-portal.herokuapp.com/user',data)
            .then(response => console.log(response))
            .catch(error => console.log(error))

        //Sposób z fetch
        // fetch('http://cosmo-portal.herokuapp.com/user', {
        //     method: 'POST', // or 'PUT'
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(data)
        // }).then(response => response.json())
        //     .then(data => console.log(data));
    }

    return (
        <div className="content">
            <div className="title">
                <h1 style={{fontWeight: "bold"}}>Portal Cosmo</h1>
            </div>
            <Form
                {...formItemLayout}
                form={form}
                name="register"
                initialValues={{
                    prefix: '48',
                }}
                scrollToFirstError
            >
                <Form.Item
                    name="email"
                    label="E-mail"
                    rules={[
                        {
                            type: 'email',
                            message: 'The input is not valid E-mail!',
                        },
                        {
                            required: true,
                            message: 'Please input your E-mail!',
                        },
                    ]}
                >
                    <Input/>
                </Form.Item>

                <Form.Item
                    name="password"
                    label="Password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                    hasFeedback
                >
                    <Input.Password/>
                </Form.Item>

                <Form.Item
                    name="confirm"
                    label="Confirm Password"
                    dependencies={['password']}
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: 'Please confirm your password!',
                        },
                        ({getFieldValue}) => ({
                            validator(rule, value) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                }

                                return Promise.reject('The two passwords that you entered do not match!');
                            },
                        }),
                    ]}
                >
                    <Input.Password/>
                </Form.Item>

                <Form.Item
                    name="nickname"
                    label={
                        <span>
            Nickname&nbsp;
                            <Tooltip title="What do you want others to call you?">
              <QuestionCircleOutlined/>
            </Tooltip>
          </span>
                    }
                    rules={[
                        {
                            required: true,
                            message: 'Please input your nickname!',
                            whitespace: true,
                        },
                    ]}
                >
                    <Input/>
                </Form.Item>

                <Form.Item {...tailFormItemLayout}>
                    <Button onClick={handleClick} type="primary" htmlType="submit" style={{width: "100%"}}>
                        Register
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};


export default Registration
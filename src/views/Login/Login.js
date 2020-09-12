import React from "react";
import './style.css';
import {Form, Input, Button, Checkbox} from 'antd';
import {UserOutlined, LockOutlined} from '@ant-design/icons';

const axios = require('axios');

const Login = () => {
    const [form] = Form.useForm();

    const handleClick = () =>{
        const data = {
            usernameOrEmail: form.getFieldValue("username"),
            password: form.getFieldValue("password"),
        }

        console.log(data)
        axios.post('http://cosmo-portal.herokuapp.com/user/authenticate',data)
            .then(response => console.log(response))
            .catch(error => console.log(error))

        //Sposób z fetch
        // fetch('http://cosmo-portal.herokuapp.com/user/authenticate', {
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
                name="normal_login"
                className="login-form"
                form={form}
                initialValues={{
                    remember: true,
                }}
            >
                <Form.Item
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Username!',
                        },
                    ]}
                >
                    <Input prefix={<UserOutlined/>} placeholder="Username" className="input-box"/>
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Password!',
                        },
                    ]}
                    style={{paddingTop: 12}}
                >
                    <Input.Password
                        prefix={<LockOutlined/>}
                        type="password"
                        placeholder="Password"
                        className="input-box"
                    />
                </Form.Item>
                <Form.Item>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <a className="login-form-forgot" href="">
                        Forgot password
                    </a>
                </Form.Item>

                <Form.Item>
                    <Button onClick={handleClick} type="primary" htmlType="submit" className="login-form-button">
                        Log in
                    </Button>
                    Or <a href="/registration">register now!</a>
                </Form.Item>
            </Form>
        </div>
    );
};


export default Login
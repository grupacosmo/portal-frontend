import React, {useState} from "react";
import {Avatar, Popover, Button, Row, Col} from 'antd';
import {UserOutlined,CrownOutlined,IdcardOutlined} from '@ant-design/icons';

const popoverContent = (
    <div>
        <p>Gmail:</p>
        <p>Slack:</p>
        <p>Facebook:</p>
    </div>
)


function Member(props) {
    const [visible, setVisible] = useState(false)

    function handleVisibleChange(visible) {
        setVisible(visible);
    };

    const icon =
        props.role === "Admin" ? <CrownOutlined/> :
            props.role === "Koordynator" ? <IdcardOutlined/> : ""

    return (
        <div style={{marginBottom: 40}}>
            <Row gutter={[0,20]}>
                <Col xs={24} md={16} lg={{span:20}}>
                    <Avatar size={64} icon={<UserOutlined/>}/>
                    <div className="MemberInfo">
                        <p className="MemberName">{props.name}</p>
                        <p className="MemberRole">{icon} {props.role}</p>
                    </div>
                </Col>
                <Col xs={24} md={8} lg={{span:4}}>
                    <Popover
                        content={popoverContent}
                        title="Kontakt"
                        trigger="click"
                        visible={visible}
                        onVisibleChange={handleVisibleChange}
                        placement="top"
                    >
                        <Button type="primary" className="MemberButton">Kontakt</Button>
                    </Popover>
                </Col>
            </Row>

        </div>
    )
}

export default Member
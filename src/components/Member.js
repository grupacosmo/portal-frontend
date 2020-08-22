import React, {useState} from "react";
import {Avatar, Popover, Button} from 'antd';
import {UserOutlined} from '@ant-design/icons';
import {CrownOutlined} from '@ant-design/icons';
import {IdcardOutlined} from '@ant-design/icons';


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
        <div style={{position: "relative", marginBottom: 40}}>
            <Avatar size={64} icon={<UserOutlined/>}/>
            <div className="MemberInfo">
                <p className="MemberName">{props.name}</p>
                <p className="MemberRole">{icon} {props.role}</p>
            </div>

            <Popover
                content={popoverContent}
                title="Kontakt"
                trigger="click"
                visible={visible}
                onVisibleChange={handleVisibleChange}
                placement="right"
            >
                <Button type="primary" className="MemberButton">Kontakt</Button>
            </Popover>

        </div>
    )
}

export default Member
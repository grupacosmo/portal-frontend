import React from "react";
import Member from "./Member";
import {Card} from 'antd';

const hStyle = {
    borderBottom: 3,
    borderBottomColor: "#f0f0f0",
    borderBottomStyle: "solid",
    fontSize: 20,
    fontWeight: 600,
}
const bStyle = {
    textAlign: "left"
}

const MemberList = () => {
    return (
        <div className="site-card-wrapper">

            <Card title="Administratorzy" bordered={false} headStyle={hStyle} bodyStyle={bStyle} className="MemberCategory">
                <Member name="Adam Kowalski" role="Admin"/>
            </Card>

            <Card title="Koordynatorzy" bordered={false} headStyle={hStyle} bodyStyle={bStyle}  className="MemberCategory">
                <Member name="Adam Kowalski" role="Kordynator"/>
            </Card>

            <Card title="Pozostali członkowie" bordered={false} headStyle={hStyle} bodyStyle={bStyle}  className="MemberCategory">
                <Member name="Adam Kowalski" role="Członek"/>
            </Card>

        </div>
    )
}

export default MemberList
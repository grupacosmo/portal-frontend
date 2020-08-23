import React, {useState} from "react";
import Member from "./Member";
import MemberButton from "./MemberButton";
import {Card} from 'antd';

const hStyle = {
    borderBottom: 3,
    borderBottomColor: "#f0f0f0",
    borderBottomStyle: "solid",
    fontSize: 20,
    fontWeight: 600,
}
const bStyle = {
    textAlign: "left",
    padding: 10,
    marginTop: 30
}

const membersData = [
    {
        id: 1,
        name: "Adam Kowalski",
        role: "Admin",
    },
    {
        id: 2,
        name: "Adam Kowalski",
        role: "Koordynator",
    },
    {
        id: 3,
        name: "Adam Kowalski",
        role: "Członek",
    },
    {
        id: 4,
        name: "Adam Kowalski",
        role: "Członek",
    },
    {
        id: 5,
        name: "Adam Kowalski",
        role: "Koordynator",
    },
    {
        id: 6,
        name: "Adam Kowalski",
        role: "Koordynator",
    },
    {
        id: 7,
        name: "Adam Kowalski",
        role: "Członek",
    },
    {
        id: 8,
        name: "Adam Kowalski",
        role: "Członek",
    },
    {
        id: 9,
        name: "Adam Kowalski",
        role: "Koordynator",
    },
    {
        id: 10,
        name: "Adam Kowalski",
        role: "Członek",
    },
    {
        id: 11,
        name: "Adam Kowalski",
        role: "Koordynator",
    },
    {
        id: 12,
        name: "Adam Kowalski",
        role: "Członek",
    }
]

const MemberList = () => {
    const admins = membersData.filter((member) => member.role === "Admin").map((member) =>
        <Member key={member.id} name={member.name} role={member.role}/>
    )
    const coordinators = membersData.filter((member) => member.role === "Koordynator").map((member) =>
        <Member key={member.id} name={member.name} role={member.role}/>
    )
    const members = membersData.filter((member) => member.role === "Członek").map((member) =>
        <Member key={member.id} name={member.name} role={member.role}/>
    )

    const [adminsNum, setAdminsNum] = useState(1)
    const [coordinatorsNum, setCoordinatorsNum] = useState(1)
    const [membersNum, setMembersNum] = useState(1)


    return (
        <div className="site-card-wrapper">

            <Card title="Administratorzy" bordered={false} headStyle={hStyle} bodyStyle={bStyle}
                  className="MemberCategory">
                {admins.slice(0, adminsNum)}
                <MemberButton props={{data: admins, displayNum: adminsNum, setFunction: setAdminsNum}}/>
            </Card>

            <Card title="Koordynatorzy" bordered={false} headStyle={hStyle} bodyStyle={bStyle}
                  className="MemberCategory">
                {coordinators.slice(0, coordinatorsNum)}
                <MemberButton
                    props={{data: coordinators, displayNum: coordinatorsNum, setFunction: setCoordinatorsNum}}/>
            </Card>

            <Card title="Pozostali członkowie" bordered={false} headStyle={hStyle} bodyStyle={bStyle}
                  className="MemberCategory">
                {members.slice(0, membersNum)}
                <MemberButton props={{data: members, displayNum: membersNum, setFunction: setMembersNum}}/>
            </Card>

        </div>
    )
}

export default MemberList
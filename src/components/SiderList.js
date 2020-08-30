import React from "react";
import {List} from 'antd';

const SiderList = (props) => {
    return (
        <List
            header={<div className="ProjectsListHeader">{props.header}</div>}
            dataSource={props.data}
            bordered
            className="ProjectsList"
            renderItem={item => (
                <List.Item className="ProjectsListItem">
                    <List.Item.Meta
                        title={<a href="#" style={{fontWeight:400}}>{props.icon}{item}</a>}
                    />
                </List.Item>
            )}
        />
    )
}

export default SiderList
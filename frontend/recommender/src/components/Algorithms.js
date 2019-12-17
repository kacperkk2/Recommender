import React from 'react';
import { List } from 'antd';


const Algorithms = (props) => {
    return(
        <List
            itemLayout="vertical"
            size="large"
            pagination={{
            onChange: page => {
                console.log(page);
            },
            pageSize: 3,
            }}
            dataSource={props.data}
            renderItem={item => (
                <List.Item key={item.short}>
                <List.Item.Meta
                    title={<a href={item.href}>{item.short}</a>}
                    description={item.name}
                />
                {item.link}
                </List.Item>
            )}
        />
    )
}

export default Algorithms;
import { List, Card } from 'antd';
import React from 'react';

const data = [
  {
    title: 'Title 1',
  },
  {
    title: 'Title 2',
  },
  {
    title: 'Title 3',
  },
];

const MainCards = (props) => {
    console.log(props.children[0].type)
    return(
        // <List
        //     grid={{ gutter: 16, column: 3 }}
        //     dataSource={data}
        //     renderItem={item => (
        //     <List.Item>
        //         <Card title={item.title}>Card content</Card>
        //     </List.Item>
        //     )}
        // />
        <List grid={{ gutter: 16, column: 3 }}>
            <Card title='aaa'>{props.children[0]}</Card>
            <Card title='aaa'>Card content</Card>
            <Card title='aaa'>Card content</Card>
        </List>
    );
}

export default MainCards;
  
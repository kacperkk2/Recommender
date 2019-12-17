import React from 'react';
import Algorithms from '../components/Algorithms';
import axios from 'axios';


const listData = [];
for (let i = 0; i < 23; i++) {
  listData.push({
    href: 'http://ant.design',
    title: `ant design part ${i}`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description:
      'AAAnt Design, a design language for background applications, is refined by Ant UED Team.',
    content:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  });
}

class AlgorithmsList extends React.Component {

    state = {
        algorithms: []
    }

    componentDidMount() {
        axios.get('http://localhost:8000/algorithms/')
        .then(res => {
            this.setState({
                algorithms: res.data
            });
            console.log(res.data);
        })
    }

    render() {
        return (
            <Algorithms data={this.state.algorithms}/>
        )
    }
}

export default AlgorithmsList;
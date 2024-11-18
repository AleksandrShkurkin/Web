import './App.css';
import Content from './Components/Content';
import Comments from './Components/Comments'
import { Component } from 'react';

class App extends Component {
  constructor(props)
  {
    super(props);
    this.commentList = [];
  }

  addComment = (name, content) => 
  {
    this.commentList.push({name, content});
    this.forceUpdate();
  }

  render() {
    return (
      <>
      <Content onSubmit={this.addComment}/>
      <Comments comments={this.commentList}/>
      </>
    );
  }
}

export default App;

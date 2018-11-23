import React, { Component } from 'react';
import Stories from './components/Stories';
import store from './stores';
import './App.css';

class App extends Component {
  onArchive(){
    const objectID = (objectID:number) => {
      store.archiveStore.archivedStoryIDs.push(objectID);
    };
    return objectID;
  }
  render() {
    return (
      <div className="App">
        <Stories 
        stories={store.storyStore.stories} 
        onArchive={this.onArchive}/>
      </div>
    );
  }
}

export default App;

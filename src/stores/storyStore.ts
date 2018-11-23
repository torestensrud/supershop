import { observable, computed } from 'mobx';


const INITIAL_STORE = [
    {    
        title: 'React',
        url: 'some url',
        author: 'Tobba',
        num_comments: 3,
        points: 4,
        objectID: 1
    },
    {    
        title: 'React',
        url: 'some url',
        author: 'Tobba2',
        num_comments: 4,
        points: 2,
        objectID: 2
    }
];

function isNotArchived(archivedStoryIDs:any) {
    return function() {
        return archivedStoryIDs.indexOf(archivedStoryIDs.objectID) === -1;
    }
}

class StoryStore {
    @observable stories = INITIAL_STORE;

    rootStore: any;
    constructor(rootStore:any){
        this.rootStore = rootStore;
    }
    
    @computed get readableStories() {
        const { archivedStoryIDs } = this.rootStore.archiveStore;
        return this.stories.filter(isNotArchived(archivedStoryIDs));
    }
}

export default StoryStore;

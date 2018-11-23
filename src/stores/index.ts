import StoryStore from './storyStore';
import ArchiveStore from './archiveStore';

// interface storyStoreEnum {
//     [index:number]: {
//         title: string; 
//         url:string;
//         author: string;
//         num_comments: number;
//         points: number;
//         objectID: number;
//     }
// }


class RootStore {
    storyStore: any;
    archiveStore: any;
    constructor(){
        this.storyStore = new StoryStore(this);
        this.archiveStore = new ArchiveStore(this);
    }
}

const rootStore = new RootStore();

export default rootStore;
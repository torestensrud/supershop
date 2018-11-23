import { observable } from 'mobx';

class ArchiveStore {
    rootStore: any
    constructor(rootStore:any){
        this.rootStore = rootStore;
    }
    @observable archivedStoryIDs:number[] = []
}

export default ArchiveStore;
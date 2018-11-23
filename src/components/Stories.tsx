import React from 'react';
import Story from './Story';

interface Columns{
    [key: string]: {
        [key:string]: string
    };
}

const COLUMNS: Columns = {
    title: {
        label: 'title1',
        width: '40%',
    },
    author: {
        label: 'title2',
        width: '30%',
    },
    comments: {
        label: 'title3',
        width: '10%',
    },
    points: {
        label: 'title4',
        width: '10%',
    },
    archive: {
        label: 'title5',
        width: '10%',
    },
};

const Stories: any = ({stories, onArchive}: any) => {
    return (
        <div className="stories">
        <StoriesHeader columns={COLUMNS} />
        {(stories || []).map((story: any) => 
            <Story
                key={story.objectID}
                story={story}  
                columns={COLUMNS}
                onArchive={onArchive}
            /> 
        )}
    </div> )
};

const StoriesHeader: any = ({columns}: any) :any => {
    return (
        <div className="stories-header">
        {Object.keys(COLUMNS).map((key) =>
            <span
                key={key} 
                style={{ width: COLUMNS[key].width}}    
            >
                {COLUMNS[key].label}
            </span>
        )}
        </div>
    );
}


export default Stories;
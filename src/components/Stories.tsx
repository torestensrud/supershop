import React from 'react';
import { Row, Col } from 'antd';
import Story from './Story';

interface Columns{
    [key: string]: {
        [key:string]: string
    };
}

const Stories: any = ({stories, onArchive}: any) => {
    return (
        <div className="stories">

        <StoriesHeader stories={stories}/>

        {(stories || []).map((story: any) => 
            <Story
                key={story.objectID}
                story={story}  
                onArchive={onArchive}
            /> 
        )}
    </div> )
};

const StoriesHeader: any = ({stories}: any) :any => {
    return (
        <Row gutter={16}>
            {Object.keys(stories[0]).map((key) =>
                <Col className="gutter-row"
                    span={3}
                    key={key} >
                    <div className="gutter-box">{key}</div>
                </Col>
            )}
            <Col className="gutter-row"
                span={3} >
                <div className="gutter-box">Archive</div>
            </Col>
        </Row>
        
    );
}


export default Stories;
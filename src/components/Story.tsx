import React from 'react';
import { Row, Col, Button } from 'antd';



const Story = ({story, onArchive}: any) => {
    const { objectID } = story;

    return ( 
        <Row gutter={16}>
            {Object.keys(story).map((key) => {
                return (
                    <Col className="gutter-row"
                        span={3}
                        key={key} >
                            {story[key]}
                    </Col>
                )}
            )}

            <Col span={3}>
                <Button 
                    type="primary"
                    onClick={ () => onArchive(objectID)}>
                        Archive
                </Button>
            </Col>

        </Row>
    );
}

export default Story;
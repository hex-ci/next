import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Progress } from '@alifd/next';

ReactDOM.render(
    <div>
        <Progress percent={20} progressive />
        <Progress percent={60} progressive />
        <Progress percent={90} progressive />
    </div>,
    mountNode
);

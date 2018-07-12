import React from 'react';
import TaskList from '../containers/task-list';
import TaskDetails from '../containers/task-detail';
require('../../scss/style.scss');

const App = () => (
    <div>
      
      <div className='col-md-7'>
        <h2>任务细节</h2>
        <TaskDetails />
      </div>
      <div className='col-md-offset-1 col-md-4'>
        <h2>任务列表</h2>
        <TaskList />
      </div>
    </div>
);

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className='ui container comments'>
      <ApprovalCard>
        <div>
          <h4>Warning!</h4>
          Are you sure you want to do this?
        </div>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail 
          avatar={faker.image.avatar()} 
          author='Sam' 
          timeAgo='Today at 4:34PM' 
          commentText="I can't do it. I just can't do it. It's inappropriate. It's not nice." 
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail 
          avatar={faker.image.avatar()} 
          author='Samwise' 
          timeAgo='Yesterday at 5:00PM'
          commentText="I don't think anybody knows it was Russia that wrote Lorem Ipsum" />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail 
          avatar={faker.image.avatar()} 
          author='Sally' timeAgo='Today at 4:34PM' 
          commentText="While that's mock-ups and this is politics, are they really so different? " />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));

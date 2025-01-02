// PostDetails.jsx
import { useParams, useNavigate } from 'react-router-dom';

const PostDetails = () => {
  const { id } = useParams();  // Access dynamic route parameter
  const navigate = useNavigate();  // Get the navigate function to programmatically change the route

  const post = {
    123: { title: 'Product No # 01', content: 'This is the product with unique desing and reliable exposure.' },
    456: { title: 'Do the Epic Shit', content: 'This is the best seller of the year with alot of  new lessons.kick off to start it.' },
  };

  const currentPost = post[id];

  if (!currentPost) {
    return <h2>Post not found</h2>;
  }

  // Function to navigate back to the homepage
  const goBackHome = () => {
    navigate('/');  // Navigate programmatically to the home page
  };

  return (
    <div>
      <h1>{currentPost.title}</h1>
      <p>{currentPost.content}</p>
      <button onClick={goBackHome} className='border border-black p-2 m-2'>
        Go Back to Home
      </button>
    </div>
  );
};

export default PostDetails;

import learnOnline from '../../../assets/Others/learn-online.png'
const LearnOnline = () => {
  return (
    <div className='flex my-40 justify-center items-center'>
      <div className='w-full'>
        <img src={learnOnline} alt="" />
      </div>
      <div className='space-y-8 ml-10'>
        <h1 className="text-4xl font-semibold">Learn and get a profession online</h1>
        <p className='font-semibold'>Morbi tempor eleifend condimentum. Etiam mollis urna et massa tempus vulputate. Nunc sed nisl est. Donec non consectetur elit.</p>
        <button className='btn btn-outline'>Learn More</button>
      </div>
    </div>
  );
};

export default LearnOnline;
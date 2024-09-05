const SectionTitle = ({ header, subHeader }) => {
  return (

    <div className="text-center font-bold my-20 space-y-5">
      <h1 className="text-5xl">{header}</h1>
      <p>{subHeader}</p>  
    </div>
  );
};

export default SectionTitle;
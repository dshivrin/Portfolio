import './ButtonLink.scss';

//this must be a div due to animations.
const ButtonLink = (props: any) => {
   
  const navigate = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div onClick={() => navigate(props.website)} className="box">
      <div className="box-inner">
        <h2>{props.name}</h2>
      </div>
    </div>
  );
};

export default ButtonLink;

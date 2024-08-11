const ReasonBox = ({ icon, title }) => {
  return (
    <div className="reasonBox">
      <div className="icon">{icon}</div>
      <h3 className="title">{title}</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam in
        officia natus asperiores, fugit accusamus libero. Assumenda in
        perferendis officia.
      </p>
    </div>
  );
};

export default ReasonBox;

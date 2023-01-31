interface InfoProps {
  number: number;
}

const InfoComponent = ({ number }: InfoProps): JSX.Element => {
  return (
    <section className="controls">
      <p className="info">{number} gentlemen pointing at you</p>
      <button className="button button--select">Select all</button>
    </section>
  );
};

export default InfoComponent;

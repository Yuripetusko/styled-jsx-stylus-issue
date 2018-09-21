import ComponentStyles from '../styles/styles.styl';

export default () => (
  <div>
    <style jsx global>
      {ComponentStyles}
    </style>
    <div className="my-element">Hello World!</div>
  </div>
);

import ComponentStyles from '../styles/styles.styl';
import Child from './child';

export default () => (
  <div>
    <style jsx>{ComponentStyles}</style>
    <div className="my-element">
      Hello World!
      <div className="child-element">I am Child</div>
      <Child />
    </div>
  </div>
);

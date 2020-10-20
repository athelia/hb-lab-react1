"use strict";

function Homepage() {
  return (
    <div>
      <h2>These cards are super cool!</h2>
      <p><a href="/cards">See the cards</a></p>
      <img src="/static/img/balloonicorn.jpg" />
    </div>
  );
}

ReactDOM.render(<Homepage />, document.querySelector('#app'));

(this["webpackJsonpreact-multi-page-website"]=this["webpackJsonpreact-multi-page-website"]||[]).push([[0],[,,,,,,,function(e,t,n){"use strict";n.r(t);var a=n(18);n.d(t,"Navigation",(function(){return a.default}));var r=n(19);n.d(t,"Footer",(function(){return r.default}));var o=n(25);n.d(t,"Home",(function(){return o.default}));var l=n(23);n.d(t,"WrongAnswer",(function(){return l.default}));var c=n(22);n.d(t,"RightAnswer",(function(){return c.default}));var s=n(20);n.d(t,"GameOver",(function(){return s.default}));var i=n(21);n.d(t,"PlayNow",(function(){return i.default}));var m=n(24);n.d(t,"YouAreIn",(function(){return m.default}));var u=n(11);n.d(t,"Countdown",(function(){return u.default}))},,,,function(e,t,n){"use strict";n.r(t);var a=n(6),r=n(5),o=n(9),l=n(10),c=n(0),s=n.n(c),i=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(e){var r;return Object(a.a)(this,n),(r=t.call(this,e)).state={days:0,hours:0,min:0,sec:0},r}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.interval=setInterval((function(){var t=e.calculateCountdown(e.props.date);t?e.setState(t):e.stop()}),1e3)}},{key:"componentWillUnmount",value:function(){this.stop()}},{key:"calculateCountdown",value:function(e){var t=(Date.parse(new Date(e))-Date.parse(new Date))/1e3;if(t<=0)return!1;var n={years:0,days:0,hours:0,min:0,sec:0};return t>=31557600&&(n.years=Math.floor(t/31557600),t-=365.25*n.years*86400),t>=86400&&(n.days=Math.floor(t/86400),t-=86400*n.days),t>=3600&&(n.hours=Math.floor(t/3600),t-=3600*n.hours),t>=60&&(n.min=Math.floor(t/60),t-=60*n.min),n.sec=t,n}},{key:"stop",value:function(){clearInterval(this.interval)}},{key:"addLeadingZeros",value:function(e){for(e=String(e);e.length<2;)e="0"+e;return e}},{key:"render",value:function(){var e=this.state;return s.a.createElement("div",{className:"Countdown"},s.a.createElement("span",{className:"Countdown-col"},s.a.createElement("span",{className:"Countdown-col-element"},s.a.createElement("strong",null,this.addLeadingZeros(e.hours)),s.a.createElement("span",null,":"))),s.a.createElement("span",{className:"Countdown-col"},s.a.createElement("span",{className:"Countdown-col-element"},s.a.createElement("strong",null,this.addLeadingZeros(e.min)),s.a.createElement("span",null,":"))),s.a.createElement("span",{className:"Countdown-col"},s.a.createElement("span",{className:"Countdown-col-element"},s.a.createElement("strong",null,this.addLeadingZeros(e.sec)),s.a.createElement("span",null))))}}]),n}(c.Component);i.defaultProps={date:new Date},t.default=i},,,,function(e,t,n){},,,function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(4);n(15);t.default=function(){return r.a.createElement("div",{className:"navigation"},r.a.createElement("nav",{className:"navbar navbar-expand navbar-dark bg-dark"},r.a.createElement("div",{className:"container"},r.a.createElement(o.c,{className:"navbar-brand",to:"/"},"Spot The BAll"),r.a.createElement("div",null,r.a.createElement("ul",{className:"navbar-nav ml-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(o.c,{className:"nav-link",to:"/"},"Home")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(o.c,{className:"nav-link",to:"/wrongAnswer"},"WrongAnswer")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(o.c,{className:"nav-link",to:"/RightAnswer"},"RightAnswer")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(o.c,{className:"nav-link",to:"/GameOver"},"GameOver")))))))}},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a);t.default=function(){return r.a.createElement("div",{className:"footer"},r.a.createElement("footer",{class:"py-5 bg-dark fixed-bottom"},r.a.createElement("div",{class:"container"},r.a.createElement("p",{class:"m-0 text-center text-white"},"Copyright \xa9 Your Website 2020"))))}},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(11);t.default=function(){var e=new Date,t=11===e.getMonth()&&e.getDate()>23?e.getFullYear()+1:e.getFullYear();return r.a.createElement("div",{className:"WrongA"},r.a.createElement("img",{src:"photos/gameover.png",alt:""}),r.a.createElement("h1",null,"GAME OVER!"),r.a.createElement("h2",null,"Time until we pick the lucky 200 winners:"),r.a.createElement(o.default,{date:"".concat(t,"-12-24T00:00:00")}),r.a.createElement("h2",null,"Good luck and come back tomorrow to play again!"),r.a.createElement("div",{className:"wrong-wrong"},r.a.createElement("img",{src:"photos/wrong.png"}),r.a.createElement("img",{src:"photos/wrong.png"})))}},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=(n(15),n(2));t.default=function(){var e=Object(o.m)();return r.a.createElement("div",{className:"Play-Now"},r.a.createElement("div",{className:"Heading"},r.a.createElement("h1",null,"SPOT THE BALL"),r.a.createElement("h2",null,"and win R180 000 in Airtime & Data"),r.a.createElement("img",{className:"Player",src:"photos/player.png",alt:""})),r.a.createElement("div",null,r.a.createElement("button",{className:"play-now",onClick:function(){e("/Home")}},"Play Now")))}},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=(n(15),n(2));t.default=function(){var e=Object(o.m)();return r.a.createElement("div",null,r.a.createElement("div",{className:"WrongA"},r.a.createElement("h1",null,"YOU GOT IT"),r.a.createElement("h2",null,"and win R180 000 in Airtime and Data"),r.a.createElement("img",{src:"photos/RightSign.png",alt:""}),r.a.createElement("h2",null,"Enter your cell number and double your chances!"),r.a.createElement("input",null),r.a.createElement("h2",null,"By entering your number, you agree to our third party marketing policy."),r.a.createElement("button",{className:"goAgainButton",onClick:function(){e("/YouAreIn")}},"Double Up!")))}},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=(n(15),n(2));t.default=function(){var e=Object(o.m)();return r.a.createElement("div",{className:"WrongA"},r.a.createElement("h1",null,"TRY AGAIN"),r.a.createElement("h2",null,"and win R180 000 in Airtime and Data"),r.a.createElement("img",{src:"photos/wrongSign.png",alt:""}),r.a.createElement("h2",null,"Enter your cell number and double your chances!"),r.a.createElement("input",null),r.a.createElement("h2",null,"By entering your number, you agree to our third-party marketing policy."),r.a.createElement("button",{className:"goAgainButton",onClick:function(){e("/Home")}},"Go Again"))}},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(11);t.default=function(){var e=new Date,t=11===e.getMonth()&&e.getDate()>23?e.getFullYear()+1:e.getFullYear();return r.a.createElement("div",{className:"WrongA"},r.a.createElement("img",{src:"photos/gameover.png",alt:""}),r.a.createElement("h1",null,"You're in!"),r.a.createElement("h2",null,"Time until we pick the lucky 200 winners:"),r.a.createElement("div",{className:"Countdown"},r.a.createElement(o.default,{date:"".concat(t,"-12-24T00:00:00")})),r.a.createElement("h2",null,"Good luck and come back tomorrow to play again!"),r.a.createElement("div",{className:"wrong-wrong"},r.a.createElement("img",{src:"photos/wrong.png"}),r.a.createElement("img",{src:"photos/rightSign.png"})))}},function(e,t,n){"use strict";n.r(t);var a=n(6),r=n(5),o=n(9),l=n(10),c=n(0),s=n.n(c),i={A1:{correct:3,revealed:"A2"}},m=(n(29),function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(e){var r;return Object(a.a)(this,n),(r=t.call(this,e)).tick=function(){var e=r.state.timer;if(console.log(e),0===e)return clearInterval(r.timerID),void(window.location.pathname="/GameOver");r.setState({timer:e-1})},r.checkAnswer=function(e){e.target.disabled=!0,e.target.textContent==r.state.currentCorrectAnswer?window.location.pathname="/RightAnswer":window.location.pathname="/WrongAnswer"},r.restartGame=function(e){e.toString();var t=parseInt(r.state.points);localStorage.getItem("spot-the-ball-"+e)?t>parseInt(localStorage.getItem(e))&&localStorage.setItem("spot-the-ball-"+e,t):localStorage.setItem("spot-the-ball-"+e,t),r.setState({points:0}),r.startRound()},r.state={currentPhoto:"",currentPhotoBallRevealed:"",currentCorrectAnswer:"",didAnswerCorrectly:"",timer:0,disableTime:4e3},r}return Object(r.a)(n,[{key:"componentWillMount",value:function(){this.changePhoto()}},{key:"componentDidMount",value:function(){this.startRound()}},{key:"startRound",value:function(){var e=this;this.setState({timer:10}),this.timerID=setInterval((function(){return e.tick()}),1e3)}},{key:"changePhoto",value:function(){var e=["A1"],t=e[Math.floor(Math.random()*e.length)];console.log(t);var n=i[t].correct,a=i[t].revealed;this.setState({currentPhoto:t,currentCorrectAnswer:n,currentPhotoBallRevealed:a})}},{key:"showAnswer",value:function(e){e?this.setState({didAnswerCorrectly:!0}):this.setState({didAnswerCorrectly:!1})}},{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"Heading"},s.a.createElement("h1",null,"SPOT THE BALL"),s.a.createElement("h2",null,"and win R180 000 in Airtime & Data")),s.a.createElement(u,{photo:this.state.currentPhoto,answer:this.state.didAnswerCorrectly,photoRevealed:this.state.currentPhotoBallRevealed}),s.a.createElement(d,{onClick:this.checkAnswer}),s.a.createElement(h,{time:this.state.timer}))}}]),n}(c.Component)),u=(t.default=m,function(e){Object(o.a)(c,e);var t=Object(l.a)(c);function c(e){return Object(a.a)(this,c),t.call(this,e)}return Object(r.a)(c,[{key:"render",value:function(){var e="./photos/"+this.props.photo+".jpg",t="./photos/"+this.props.photoRevealed+".jpg";return s.a.createElement("div",{className:"Container",style:{backgroundImage:"url("+n(27)("".concat(e))+")"}},!0===this.props.answer&&s.a.createElement("div",{className:"MessageBox AnswerCorrect",style:{backgroundImage:"url("+n(27)("".concat(t))+")"}}),!1===this.props.answer&&s.a.createElement("div",{className:"MessageBox AnswerIncorrect",style:{backgroundImage:"url("+n(27)("".concat(t))+")"}}))}}]),c}(c.Component));function d(e){return s.a.createElement("div",{className:"container2"},s.a.createElement("h2",null,"Choose the button below where you think the ball above is!"),s.a.createElement("div",{className:"ControlsContainer"},s.a.createElement("button",{className:"ControlsButton",onClick:e.onClick},"1"),s.a.createElement("button",{className:"ControlsButton",onClick:e.onClick},"2"),s.a.createElement("button",{className:"ControlsButton",onClick:e.onClick},"3"),s.a.createElement("button",{className:"ControlsButton",onClick:e.onClick},"4"),s.a.createElement("button",{className:"ControlsButton",onClick:e.onClick},"5"),s.a.createElement("button",{className:"ControlsButton",onClick:e.onClick},"6")))}function h(e){return s.a.createElement("div",{className:"Timer Counter"},e.time)}},,function(e,t,n){var a={".":7,"./":7,"./App.css":15,"./Countdown":11,"./Countdown.jsx":11,"./Footer":19,"./Footer.jsx":19,"./GameOver":20,"./GameOver.jsx":20,"./Home":25,"./Home.jsx":25,"./HowItPlays":30,"./HowItPlays.jsx":30,"./Navigation":18,"./Navigation.jsx":18,"./PlayNow":21,"./PlayNow.jsx":21,"./RightAnswer":22,"./RightAnswer.jsx":22,"./WrongAnswer":23,"./WrongAnswer.jsx":23,"./YouAreIn":24,"./YouAreIn.jsx":24,"./blog/Blog":31,"./blog/Blog.jsx":31,"./blog/Post":32,"./blog/Post.jsx":32,"./blog/Posts":33,"./blog/Posts.jsx":33,"./index":7,"./index.js":7,"./pages.css":29,"./photos/A1.jpg":42,"./photos/A2.jpg":43,"./photos/image 2.png":44,"./photos/player.png":45};function r(e){var t=o(e);return n(t)}function o(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=o,e.exports=r,r.id=27},,function(e,t,n){},function(e,t){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(2);t.default=function(){return r.a.createElement("div",{className:"home"},r.a.createElement("div",{class:"container"},r.a.createElement("h1",{className:"text-center mt-5"},"Blog page"),r.a.createElement(o.a,null)))}},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(2);t.default=function(){var e=Object(o.o)().postSlug;return Object(a.useEffect)((function(){}),[e]),r.a.createElement("div",{className:"home"},r.a.createElement("div",{class:"container"},r.a.createElement("h1",{className:"mt-5"},"This is a Post Title"),r.a.createElement("h6",{className:"mb-5"},"The post slug is, ",e),r.a.createElement("p",null,"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."),r.a.createElement("p",null,"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."),r.a.createElement("p",null,"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.")))}},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(4);t.default=function(){return r.a.createElement("div",{className:"home"},r.a.createElement("div",{class:"container"},r.a.createElement(o.b,{to:"/blog/this-is-a-post-title"},r.a.createElement("div",{class:"row align-items-center my-5"},r.a.createElement("div",{class:"col-lg-7"},r.a.createElement("img",{class:"img-fluid rounded mb-4 mb-lg-0",src:"http://placehold.it/900x400",alt:""})),r.a.createElement("div",{class:"col-lg-5"},r.a.createElement("h1",{class:"font-weight-light"},"This is a post title"),r.a.createElement("p",null,"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."))))))}},,function(e,t,n){e.exports=n(46)},,,,,,function(e,t,n){},function(e,t,n){e.exports=n.p+"static/media/A1.ff039289.jpg"},function(e,t,n){e.exports=n.p+"static/media/A2.861eb5fc.jpg"},function(e,t,n){e.exports=n.p+"static/media/image 2.178983fc.png"},function(e,t,n){e.exports=n.p+"static/media/player.2b258356.png"},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(34),l=n.n(o);n(40),n(41),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var c=n(4),s=n(2),i=n(7);l.a.render(r.a.createElement(c.a,null,r.a.createElement(s.d,null,r.a.createElement(s.b,{path:"/home",element:r.a.createElement(i.Home,null)}),r.a.createElement(s.b,{path:"/wrongAnswer",element:r.a.createElement(i.WrongAnswer,null)}),r.a.createElement(s.b,{path:"/RightAnswer",element:r.a.createElement(i.RightAnswer,null)}),r.a.createElement(s.b,{path:"/gameOver",element:r.a.createElement(i.GameOver,null)}),r.a.createElement(s.b,{path:"/YouAreIn",element:r.a.createElement(i.YouAreIn,null)}),r.a.createElement(s.b,{path:"/",element:r.a.createElement(i.PlayNow,null)}))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[35,1,2]]]);
//# sourceMappingURL=main.55598bf8.chunk.js.map
(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{39:function(e,t,n){e.exports=n.p+"static/media/organizer-791939_1920.c1432f1e.jpg"},50:function(e,t,n){e.exports=n(62)},62:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(24),l=n.n(o),c=n(6),i=n(20),s=n(64),u=n(65),m=n(66),d=n(41),h=n(67),f=n(39),E=n.n(f),p=function(){return r.a.createElement("div",{style:{fontFamily:"IBM Plex Serif"}},r.a.createElement(s.a,{fluid:!0,style:{height:"70vh",backgroundImage:"url(".concat(E.a,")"),backgroundSize:"cover",marginLeft:"20px",marginRight:"20px"}},r.a.createElement(u.a,null,r.a.createElement("h1",{style:{textAlign:"center"}},"Welcome to My Day"),r.a.createElement("h5",{style:{textAlign:"center"}}," ",r.a.createElement("i",null,"Plan, Achieve, fight another day")," "))),r.a.createElement(u.a,null,r.a.createElement(m.a,null,r.a.createElement(d.a,{style:{display:"flex",alignItems:"center"}},r.a.createElement("div",{style:{margin:"auto",width:"300px",marginTop:"1px",fontFamily:"IBM Plex Serif"}},r.a.createElement(c.b,{to:"/signup"},r.a.createElement(h.a,{variant:"primary",style:{margin:"auto",width:"300px",marginTop:"1px",backgroundColor:"#6e6e6dff",border:"none"}},"Sign up")))),r.a.createElement(d.a,{style:{display:"flex",alignItems:"center"}},r.a.createElement("div",{style:{margin:"auto",width:"300px",marginTop:"1px",fontFamily:"IBM Plex Serif"}},r.a.createElement(c.b,{to:"/signin"},r.a.createElement(h.a,{variant:"primary",style:{margin:"auto",width:"300px",marginTop:"1px",backgroundColor:"#6e6e6dff",border:"none"}},"Sign in")))))))},g=n(5),y=function(e){return fetch("".concat("http://localhost:6025","/signup"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))},b=function(e){return fetch("".concat("http://localhost:6025","/signin"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))},v=function(e,t){"undefined"!==typeof window&&(localStorage.setItem("jwt",JSON.stringify(e)),t())},S=function(){return"undefined"!=typeof window&&(!!localStorage.getItem("jwt")&&JSON.parse(localStorage.getItem("jwt")))},k=n(69),j=n(70),w=function(e,t){return e.location.pathname,{}},C=Object(i.g)((function(e){var t=e.history;return r.a.createElement("div",{style:{fontFamily:"IBM Plex Serif",color:"#6e6e6dff",textDecoration:"none"}},r.a.createElement(k.a,{collapseOnSelect:!0,expand:"lg",bg:"",variant:"",style:{color:"black",backgroundColor:"#A79080"}},!S()&&r.a.createElement(r.a.Fragment,null,r.a.createElement(k.a.Brand,null,r.a.createElement(c.b,{style:(w(t),{color:"white"}),to:"/"},"My Day")),r.a.createElement(j.a.Link,null,r.a.createElement(c.b,{style:(w(t),{color:"white"}),to:"/signup"},"Sign up")),r.a.createElement(j.a.Link,null,r.a.createElement(c.b,{style:(w(t),{color:"white"}),to:"/signin"},"Sign in"))),S()&&r.a.createElement(r.a.Fragment,null,r.a.createElement(k.a.Brand,null,r.a.createElement(c.b,{to:"/user/".concat(S().user._id),style:(w(t,"/user/".concat(S().user._id)),{color:"black",textDecoration:"none"}),className:"nav-link"},"".concat(S().user.firstName,"'s profile"))),r.a.createElement(k.a.Toggle,{"areia-controls":"responsive-navbar-nav",style:{backgroundColor:"transparent"}}),r.a.createElement(k.a.Collapse,{id:"responsive-navbar-nav"},r.a.createElement(j.a,{style:{display:"flex",marginLeft:"auto"}},r.a.createElement(h.a,Object(g.a)({style:w(t),onClick:function(){return e=function(){return t.push("/")},"undefined"!==typeof window&&localStorage.removeItem("jwt"),e(),fetch("".concat("http://localhost:6025","/signout"),{method:"GET"}).then((function(e){return console.log(e),e.json()})).catch((function(e){return console.log(e)}));var e}},"style",{float:"right",backgroundColor:"#6e6e6dff",border:"none"}),"Sign out"))))))})),x=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Archive Data"))},O=n(7),D=n(8),T=n(10),N=n(9),A=n(11),M=n(68),z=function(e){function t(){var e;return Object(O.a)(this,t),(e=Object(T.a)(this,Object(N.a)(t).call(this))).handleChange=function(t){return function(n){e.setState({error:""}),e.setState(Object(g.a)({},t,n.target.value))}},e.clickSubmit=function(t){t.preventDefault();var n=e.state,a=n.firstName,r=n.lastName,o=n.email,l=n.password;y({firstName:a,lastName:r,email:o,password:l}).then((function(t){t.error?e.setState({error:t.error}):e.setState({error:"",firstName:"",lastName:"",email:"",password:"",open:!0})}))},e.signupForm=function(t,n,a,o){return r.a.createElement("div",null,r.a.createElement("h1",null,"Sign Up"),r.a.createElement("br",null),r.a.createElement("form",{style:{fontFamily:"IBM Plex Serif"}},r.a.createElement(M.a,null,r.a.createElement(M.a.Row,null,r.a.createElement(d.a,null,r.a.createElement(M.a.Label,null,"First Name"),r.a.createElement(M.a.Control,{placeholder:"First name",type:"text",onChange:e.handleChange("firstName"),value:t})),r.a.createElement(d.a,null,r.a.createElement(M.a.Label,null,"Last Name"),r.a.createElement(M.a.Control,{placeholder:"Last name",type:"text",onChange:e.handleChange("lastName"),value:n}))),r.a.createElement(M.a.Group,{controlId:"formGroupEmail"},r.a.createElement(M.a.Label,null,"Email Address"),r.a.createElement(M.a.Control,{type:"text",onChange:e.handleChange("email"),value:a})),r.a.createElement(M.a.Group,{controlId:"formGroupPassword"},r.a.createElement(M.a.Label,null,"Password"),r.a.createElement(M.a.Control,{type:"password",placeholder:"",onChange:e.handleChange("password"),value:o}))),r.a.createElement(h.a,{onClick:e.clickSubmit,style:{backgroundColor:"#6e6e6dff",border:"none"}},"Submit")))},e.state={firstName:"",lastName:"",email:"",password:"",error:"",open:!1},e}return Object(A.a)(t,e),Object(D.a)(t,[{key:"render",value:function(){var e=this.state,t=e.firstName,n=e.lastName,a=e.email,o=e.password,l=e.error,i=e.open;return r.a.createElement("div",null,r.a.createElement(s.a,{style:{height:"90vh"}},r.a.createElement("div",{style:{display:l?"":"none"}},l),r.a.createElement("div",{style:{display:i?"":"none"}},"Account successfully created!",r.a.createElement(c.b,{to:"/signin"}," Sign in")),r.a.createElement("br",null),this.signupForm(t,n,a,o)))}}]),t}(a.Component),_=function(e){function t(){var e;return Object(O.a)(this,t),(e=Object(T.a)(this,Object(N.a)(t).call(this))).handleChange=function(t){return function(n){e.setState({error:""}),e.setState(Object(g.a)({},t,n.target.value))}},e.clickSubmit=function(t){t.preventDefault(),e.setState({loading:!0});var n=e.state,a={email:n.email,password:n.password};console.log(a),b(a).then((function(t){t.error?e.setState({error:t.error,loading:!1}):v(t,(function(){e.setState({redirectTo:!0})}))}))},e.signinForm=function(t,n){return r.a.createElement("form",{style:{fontFamily:"IBM Plex Serif"}},r.a.createElement("br",null),r.a.createElement(M.a,null,r.a.createElement(M.a.Group,{controlId:"formGroupEmail"},r.a.createElement(M.a.Label,null,"Email Address"),r.a.createElement(M.a.Control,{type:"text",placeholder:"",onChange:e.handleChange("email"),value:t})),r.a.createElement(M.a.Group,{controlId:"formGroupPassword"},r.a.createElement(M.a.Label,null,"Password"),r.a.createElement(M.a.Control,{type:"password",placeholder:"",onChange:e.handleChange("password"),value:n})),r.a.createElement(h.a,{onClick:e.clickSubmit,style:{backgroundColor:"#6e6e6dff",border:"none"}},"Submit")))},e.state={email:"",password:"",error:"",redirectTo:!1,loading:!1},e}return Object(A.a)(t,e),Object(D.a)(t,[{key:"render",value:function(){var e=this.state,t=e.email,n=e.password,a=e.error,o=e.redirectTo,l=e.loading;return o?r.a.createElement(i.a,{to:"/user/".concat(S().user._id)}):r.a.createElement("div",null,r.a.createElement(s.a,{style:{height:"90vh"}},r.a.createElement("br",null),r.a.createElement("h1",null,"Sign In"),r.a.createElement("div",{style:{display:a?"":"none"}},a),l?r.a.createElement("div",null,r.a.createElement("h2",null,"Loading...")):"",this.signinForm(t,n)))}}]),t}(a.Component),B=n(71),L=n(22),Y=n.n(L),I=function(e,t){return fetch("".concat("http://localhost:6025","/sunday/all/").concat(e),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(t)}}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))},F=function(e,t){return fetch("".concat("http://localhost:6025","/monday/all/").concat(e),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(t)}}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))},P=function(e,t){return fetch("".concat("http://localhost:6025","/tuesday/all/").concat(e),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(t)}}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))},G=function(e,t){return fetch("".concat("http://localhost:6025","/wednesday/all/").concat(e),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(t)}}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))},R=function(e,t){return fetch("".concat("http://localhost:6025","/thursday/all/").concat(e),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(t)}}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))},H=function(e,t){return fetch("".concat("http://localhost:6025","/friday/all/").concat(e),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(t)}}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))},V=function(e,t){return fetch("".concat("http://localhost:6025","/saturday/all/").concat(e),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(t)}}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))},J=function(e,t,n){return fetch("".concat("http://localhost:6025","/sunday/new/").concat(e),{method:"POST",headers:{Accept:"application/json",Authorization:"Bearer ".concat(t)},body:n}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))},W=function(e,t,n){return fetch("".concat("http://localhost:6025","/monday/new/").concat(e),{method:"POST",headers:{Accept:"application/json",Authorization:"Bearer ".concat(t)},body:n}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))},U=function(e,t,n){return fetch("".concat("http://localhost:6025","/tuesday/new/").concat(e),{method:"POST",headers:{Accept:"application/json",Authorization:"Bearer ".concat(t)},body:n}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))},q=function(e,t,n){return fetch("".concat("http://localhost:6025","/wednesday/new/").concat(e),{method:"POST",headers:{Accept:"application/json",Authorization:"Bearer ".concat(t)},body:n}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))},K=function(e,t,n){return fetch("".concat("http://localhost:6025","/thursday/new/").concat(e),{method:"POST",headers:{Accept:"application/json",Authorization:"Bearer ".concat(t)},body:n}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))},Q=function(e,t,n){return fetch("".concat("http://localhost:6025","/friday/new/").concat(e),{method:"POST",headers:{Accept:"application/json",Authorization:"Bearer ".concat(t)},body:n}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))},X=function(e,t,n){return fetch("".concat("http://localhost:6025","/saturday/new/").concat(e),{method:"POST",headers:{Accept:"application/json",Authorization:"Bearer ".concat(t)},body:n}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))},Z=function(e){function t(){var e;return Object(O.a)(this,t),(e=Object(T.a)(this,Object(N.a)(t).call(this))).state={user:"",redirectToSignin:!1,error:"",sunday:[],monday:[],tuesday:[],wednesday:[],thursday:[],friday:[],saturday:[]},e}return Object(A.a)(t,e),Object(D.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=S().user._id,n=S().token;I(t,n).then((function(t){t.error?e.setState({error:t.error}):e.setState({sunday:t}),console.log(e.state.sunday)})),F(t,n).then((function(t){t.error?e.setState({error:t.error}):e.setState({monday:t}),console.log(e.state.monday)})),P(t,n).then((function(t){t.error?e.setState({error:t.error}):e.setState({tuesday:t}),console.log(e.state.tuesday)})),G(t,n).then((function(t){t.error?e.setState({error:t.error}):e.setState({wednesday:t}),console.log(e.state.wednesday)})),R(t,n).then((function(t){t.error?e.setState({error:t.error}):e.setState({thursday:t}),console.log(e.state.thursday)})),H(t,n).then((function(t){t.error?e.setState({error:t.error}):e.setState({friday:t}),console.log(e.state.friday)})),V(t,n).then((function(t){t.error?e.setState({error:t.error}):e.setState({saturday:t}),console.log(e.state.saturday)}))}},{key:"render",value:function(){var e=Y()().startOf("week").format("dddd, MMMM Do YYYY"),t=Y()().startOf("week").add(1,"d").format("dddd, MMMM Do YYYY"),n=Y()().startOf("week").add(2,"d").format("dddd, MMMM Do YYYY"),a=Y()().startOf("week").add("3","d").format("dddd, MMMM Do YYYY"),o=Y()().startOf("week").add("4","d").format("dddd, MMMM Do YYYY"),l=Y()().startOf("week").add("5","d").format("dddd, MMMM Do YYYY"),i=Y()().endOf("week").format("dddd, MMMM Do YYYY"),s=this.state,u=s.sunday,m=s.monday,d=s.tuesday,f=s.wednesday,E=s.thursday,p=s.friday,g=s.saturday;return r.a.createElement("div",{style:{marginLeft:"25%",marginRight:"25%",textAlign:"center"}},r.a.createElement("h1",null,"Today is your Day!"),r.a.createElement("h4",null," Create a note corresponding to an task you have for the week"),r.a.createElement(B.a,{style:{margin:"20px"}},r.a.createElement(B.a.Header,{as:"h5"},e),r.a.createElement(B.a.Body,null,r.a.createElement(B.a.Title,null,u.length," notes"),r.a.createElement(B.a.Text,null),r.a.createElement(c.b,{to:"/sunday/".concat(S().user._id)},r.a.createElement(h.a,{variant:"primary"},"View all notes")))),r.a.createElement(B.a,{style:{margin:"20px"}},r.a.createElement(B.a.Header,{as:"h5"},t),r.a.createElement(B.a.Body,null,r.a.createElement(B.a.Title,null,m.length," notes"),r.a.createElement(B.a.Text,null),r.a.createElement(c.b,{to:"/monday/".concat(S().user._id)},r.a.createElement(h.a,{variant:"primary"},"View all notes")))),r.a.createElement(B.a,{style:{margin:"20px"}},r.a.createElement(B.a.Header,{as:"h5"},n),r.a.createElement(B.a.Body,null,r.a.createElement(B.a.Title,null,d.length," notes"),r.a.createElement(B.a.Text,null),r.a.createElement(c.b,{to:"/tuesday/".concat(S().user._id)},r.a.createElement(h.a,{variant:"primary"},"View all notes")))),r.a.createElement(B.a,{style:{margin:"20px"}},r.a.createElement(B.a.Header,{as:"h5"},a),r.a.createElement(B.a.Body,null,r.a.createElement(B.a.Title,null,f.length," notes"),r.a.createElement(B.a.Text,null),r.a.createElement(c.b,{to:"/wednesday/".concat(S().user._id)},r.a.createElement(h.a,{variant:"primary"},"View all notes")))),r.a.createElement(B.a,{style:{margin:"20px"}},r.a.createElement(B.a.Header,{as:"h5"},o),r.a.createElement(B.a.Body,null,r.a.createElement(B.a.Title,null,E.length," notes"),r.a.createElement(B.a.Text,null),r.a.createElement(c.b,{to:"/thursday/".concat(S().user._id)},r.a.createElement(h.a,{variant:"primary"},"View all notes")))),r.a.createElement(B.a,{style:{margin:"20px"}},r.a.createElement(B.a.Header,{as:"h5"},l),r.a.createElement(B.a.Body,null,r.a.createElement(B.a.Title,null,p.length," notes"),r.a.createElement(B.a.Text,null),r.a.createElement(c.b,{to:"/friday/".concat(S().user._id)},r.a.createElement(h.a,{variant:"primary"},"View all notes")))),r.a.createElement(B.a,{style:{margin:"20px"}},r.a.createElement(B.a.Header,{as:"h5"},i),r.a.createElement(B.a.Body,null,r.a.createElement(B.a.Title,null,g.length," notes"),r.a.createElement(B.a.Text,null),r.a.createElement(c.b,{to:"/saturday/".concat(S().user._id)},r.a.createElement(h.a,{variant:"primary"},"View all notes")))))}}]),t}(a.Component),$=function(e){function t(){var e;return Object(O.a)(this,t),(e=Object(T.a)(this,Object(N.a)(t).call(this))).handleChange=function(t){return function(n){var a;e.setState({error:""});var r="photo"===t?n.target.files[0]:n.target.value,o="photo"===t?n.target.files[0].size:0;e.noteData.set(t,r),e.setState((a={},Object(g.a)(a,t,r),Object(g.a)(a,"fileSize",o),a))}},e.clickSubmit=function(t){t.preventDefault();var n=S().user._id,a=S().token;J(n,a,e.noteData).then((function(t){t.error?e.setState({error:t.error}):e.setState({note:""}),alert("note created!")}))},e.newSunNote=function(t){return r.a.createElement("div",{style:{margin:"10px"}},r.a.createElement("h2",{style:{textAlign:"center"}}," New note"),r.a.createElement("hr",null),r.a.createElement("form",null,r.a.createElement(M.a.Row,null,r.a.createElement(d.a,null,r.a.createElement(M.a.Label,null,"Note"),r.a.createElement(M.a.Control,{placeholder:"Your note here...",type:"text",onChange:e.handleChange("note"),value:t})))),r.a.createElement("br",null),r.a.createElement(h.a,{size:"lg",block:!0,onClick:e.clickSubmit,style:{backgroundColor:"#6e6e6dff",border:"none"}},"Create note"))},e.noteList=function(){return r.a.createElement("div",null,r.a.createElement("h1",{style:{textAlign:"center"}},r.a.createElement("h2",null,"Notes for Sunday")),e.state.notes.map((function(e,t){return r.a.createElement("div",{key:t},r.a.createElement(B.a,{size:"sm",style:{padding:"10px"}},r.a.createElement(B.a.Body,null,e.note),r.a.createElement("p",null,e._id._id),r.a.createElement(h.a,{variant:"danger"},"Delete")))})))},e.state={note:"",notes:[],user:{},error:"",noteId:"",token:""},e}return Object(A.a)(t,e),Object(D.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.noteData=new FormData,this.setState({user:S().user});var t=S().user._id,n=S().token;this.setState({token:n}),I(t,n).then((function(t){t.error?e.setState({error:t.error}):e.setState({notes:t}),console.log(e.state.notes),console.log(e.state.token)}))}},{key:"render",value:function(){var e=this.state.note;return r.a.createElement(u.a,null,r.a.createElement(m.a,null,r.a.createElement(d.a,null,this.newSunNote(e)),r.a.createElement(d.a,null,this.noteList())))}}]),t}(a.Component),ee=function(e){function t(){var e;return Object(O.a)(this,t),(e=Object(T.a)(this,Object(N.a)(t).call(this))).handleChange=function(t){return function(n){var a;e.setState({error:""});var r="photo"===t?n.target.files[0]:n.target.value,o="photo"===t?n.target.files[0].size:0;e.noteData.set(t,r),e.setState((a={},Object(g.a)(a,t,r),Object(g.a)(a,"fileSize",o),a))}},e.clickSubmit=function(t){t.preventDefault();var n=S().user._id,a=S().token;W(n,a,e.noteData).then((function(t){t.error?e.setState({error:t.error}):e.setState({note:""}),alert("note created!")}))},e.newMonNote=function(t){return r.a.createElement("div",{style:{margin:"10px"}},r.a.createElement("h2",{style:{textAlign:"center"}}," New note"),r.a.createElement("hr",null),r.a.createElement("form",null,r.a.createElement(M.a.Row,null,r.a.createElement(d.a,null,r.a.createElement(M.a.Label,null,"Note"),r.a.createElement(M.a.Control,{placeholder:"Your note here...",type:"text",onChange:e.handleChange("note"),value:t})))),r.a.createElement("br",null),r.a.createElement(h.a,{size:"lg",block:!0,onClick:e.clickSubmit,style:{backgroundColor:"#6e6e6dff",border:"none"}},"Create note"))},e.noteList=function(){return r.a.createElement("div",null,r.a.createElement("h1",{style:{textAlign:"center"}},r.a.createElement("h2",null,"Notes for Monday")),e.state.notes.map((function(e,t){return r.a.createElement("div",{key:t},r.a.createElement(B.a,{size:"sm",style:{padding:"10px"}},r.a.createElement(B.a.Body,null,e.note),r.a.createElement("p",null,e._id._id),r.a.createElement(h.a,{variant:"danger"},"Delete")))})))},e.state={note:"",notes:[],user:{},error:"",noteId:"",token:""},e}return Object(A.a)(t,e),Object(D.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.noteData=new FormData,this.setState({user:S().user});var t=S().user._id,n=S().token;this.setState({token:n}),F(t,n).then((function(t){t.error?e.setState({error:t.error}):e.setState({notes:t}),console.log(e.state.notes),console.log(e.state.token)}))}},{key:"render",value:function(){var e=this.state.note;return r.a.createElement(u.a,null,r.a.createElement(m.a,null,r.a.createElement(d.a,null,this.newMonNote(e)),r.a.createElement(d.a,null,this.noteList())))}}]),t}(a.Component),te=function(e){function t(){var e;return Object(O.a)(this,t),(e=Object(T.a)(this,Object(N.a)(t).call(this))).handleChange=function(t){return function(n){var a;e.setState({error:""});var r="photo"===t?n.target.files[0]:n.target.value,o="photo"===t?n.target.files[0].size:0;e.noteData.set(t,r),e.setState((a={},Object(g.a)(a,t,r),Object(g.a)(a,"fileSize",o),a))}},e.clickSubmit=function(t){t.preventDefault();var n=S().user._id,a=S().token;U(n,a,e.noteData).then((function(t){t.error?e.setState({error:t.error}):e.setState({note:""}),alert("note created!")}))},e.newTuesNote=function(t){return r.a.createElement("div",{style:{margin:"10px"}},r.a.createElement("h2",{style:{textAlign:"center"}}," New note"),r.a.createElement("hr",null),r.a.createElement("form",null,r.a.createElement(M.a.Row,null,r.a.createElement(d.a,null,r.a.createElement(M.a.Label,null,"Note"),r.a.createElement(M.a.Control,{placeholder:"Your note here...",type:"text",onChange:e.handleChange("note"),value:t})))),r.a.createElement("br",null),r.a.createElement(h.a,{size:"lg",block:!0,onClick:e.clickSubmit,style:{backgroundColor:"#6e6e6dff",border:"none"}},"Create note"))},e.noteList=function(){return r.a.createElement("div",null,r.a.createElement("h1",{style:{textAlign:"center"}},r.a.createElement("h2",null,"Notes for Tuesday")),e.state.notes.map((function(e,t){return r.a.createElement("div",{key:t},r.a.createElement(B.a,{size:"sm",style:{padding:"10px"}},r.a.createElement(B.a.Body,null,e.note),r.a.createElement("p",null,e._id._id),r.a.createElement(h.a,{variant:"danger"},"Delete")))})))},e.state={note:"",notes:[],user:{},error:"",noteId:"",token:""},e}return Object(A.a)(t,e),Object(D.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.noteData=new FormData,this.setState({user:S().user});var t=S().user._id,n=S().token;this.setState({token:n}),P(t,n).then((function(t){t.error?e.setState({error:t.error}):e.setState({notes:t}),console.log(e.state.notes),console.log(e.state.token)}))}},{key:"render",value:function(){var e=this.state.note;return r.a.createElement(u.a,null,r.a.createElement(m.a,null,r.a.createElement(d.a,null,this.newTuesNote(e)),r.a.createElement(d.a,null,this.noteList())))}}]),t}(a.Component),ne=function(e){function t(){var e;return Object(O.a)(this,t),(e=Object(T.a)(this,Object(N.a)(t).call(this))).handleChange=function(t){return function(n){var a;e.setState({error:""});var r="photo"===t?n.target.files[0]:n.target.value,o="photo"===t?n.target.files[0].size:0;e.noteData.set(t,r),e.setState((a={},Object(g.a)(a,t,r),Object(g.a)(a,"fileSize",o),a))}},e.clickSubmit=function(t){t.preventDefault();var n=S().user._id,a=S().token;q(n,a,e.noteData).then((function(t){t.error?e.setState({error:t.error}):e.setState({note:""}),alert("note created!")}))},e.newWedNote=function(t){return r.a.createElement("div",{style:{margin:"10px"}},r.a.createElement("h2",{style:{textAlign:"center"}}," New note"),r.a.createElement("hr",null),r.a.createElement("form",null,r.a.createElement(M.a.Row,null,r.a.createElement(d.a,null,r.a.createElement(M.a.Label,null,"Note"),r.a.createElement(M.a.Control,{placeholder:"Your note here...",type:"text",onChange:e.handleChange("note"),value:t})))),r.a.createElement("br",null),r.a.createElement(h.a,{size:"lg",block:!0,onClick:e.clickSubmit,style:{backgroundColor:"#6e6e6dff",border:"none"}},"Create note"))},e.noteList=function(){return r.a.createElement("div",null,r.a.createElement("h1",{style:{textAlign:"center"}},r.a.createElement("h2",null,"Notes for Wednesday")),e.state.notes.map((function(e,t){return r.a.createElement("div",{key:t},r.a.createElement(B.a,{size:"sm",style:{padding:"10px"}},r.a.createElement(B.a.Body,null,e.note),r.a.createElement("p",null,e._id._id),r.a.createElement(h.a,{variant:"danger"},"Delete")))})))},e.state={note:"",notes:[],user:{},error:"",noteId:"",token:""},e}return Object(A.a)(t,e),Object(D.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.noteData=new FormData,this.setState({user:S().user});var t=S().user._id,n=S().token;this.setState({token:n}),G(t,n).then((function(t){t.error?e.setState({error:t.error}):e.setState({notes:t}),console.log(e.state.notes),console.log(e.state.token)}))}},{key:"render",value:function(){var e=this.state.note;return r.a.createElement(u.a,null,r.a.createElement(m.a,null,r.a.createElement(d.a,null,this.newWedNote(e)),r.a.createElement(d.a,null,this.noteList())))}}]),t}(a.Component),ae=function(e){function t(){var e;return Object(O.a)(this,t),(e=Object(T.a)(this,Object(N.a)(t).call(this))).handleChange=function(t){return function(n){var a;e.setState({error:""});var r="photo"===t?n.target.files[0]:n.target.value,o="photo"===t?n.target.files[0].size:0;e.noteData.set(t,r),e.setState((a={},Object(g.a)(a,t,r),Object(g.a)(a,"fileSize",o),a))}},e.clickSubmit=function(t){t.preventDefault();var n=S().user._id,a=S().token;K(n,a,e.noteData).then((function(t){t.error?e.setState({error:t.error}):e.setState({note:""}),alert("note created!")}))},e.newThuNote=function(t){return r.a.createElement("div",{style:{margin:"10px"}},r.a.createElement("h2",{style:{textAlign:"center"}}," New note"),r.a.createElement("hr",null),r.a.createElement("form",null,r.a.createElement(M.a.Row,null,r.a.createElement(d.a,null,r.a.createElement(M.a.Label,null,"Note"),r.a.createElement(M.a.Control,{placeholder:"Your note here...",type:"text",onChange:e.handleChange("note"),value:t})))),r.a.createElement("br",null),r.a.createElement(h.a,{size:"lg",block:!0,onClick:e.clickSubmit,style:{backgroundColor:"#6e6e6dff",border:"none"}},"Create note"))},e.noteList=function(){return r.a.createElement("div",null,r.a.createElement("h1",{style:{textAlign:"center"}},r.a.createElement("h2",null,"Notes for Thursday")),e.state.notes.map((function(e,t){return r.a.createElement("div",{key:t},r.a.createElement(B.a,{size:"sm",style:{padding:"10px"}},r.a.createElement(B.a.Body,null,e.note),r.a.createElement("p",null,e._id._id),r.a.createElement(h.a,{variant:"danger"},"Delete")))})))},e.state={note:"",notes:[],user:{},error:"",noteId:"",token:""},e}return Object(A.a)(t,e),Object(D.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.noteData=new FormData,this.setState({user:S().user});var t=S().user._id,n=S().token;this.setState({token:n}),R(t,n).then((function(t){t.error?e.setState({error:t.error}):e.setState({notes:t}),console.log(e.state.notes),console.log(e.state.token)}))}},{key:"render",value:function(){var e=this.state.note;return r.a.createElement(u.a,null,r.a.createElement(m.a,null,r.a.createElement(d.a,null,this.newThuNote(e)),r.a.createElement(d.a,null,this.noteList())))}}]),t}(a.Component),re=function(e){function t(){var e;return Object(O.a)(this,t),(e=Object(T.a)(this,Object(N.a)(t).call(this))).handleChange=function(t){return function(n){var a;e.setState({error:""});var r="photo"===t?n.target.files[0]:n.target.value,o="photo"===t?n.target.files[0].size:0;e.noteData.set(t,r),e.setState((a={},Object(g.a)(a,t,r),Object(g.a)(a,"fileSize",o),a))}},e.clickSubmit=function(t){t.preventDefault();var n=S().user._id,a=S().token;Q(n,a,e.noteData).then((function(t){t.error?e.setState({error:t.error}):e.setState({note:""}),alert("note created!")}))},e.newFriNote=function(t){return r.a.createElement("div",{style:{margin:"10px"}},r.a.createElement("h2",{style:{textAlign:"center"}}," New note"),r.a.createElement("hr",null),r.a.createElement("form",null,r.a.createElement(M.a.Row,null,r.a.createElement(d.a,null,r.a.createElement(M.a.Label,null,"Note"),r.a.createElement(M.a.Control,{placeholder:"Your note here...",type:"text",onChange:e.handleChange("note"),value:t})))),r.a.createElement("br",null),r.a.createElement(h.a,{size:"lg",block:!0,onClick:e.clickSubmit,style:{backgroundColor:"#6e6e6dff",border:"none"}},"Create note"))},e.noteList=function(){return r.a.createElement("div",null,r.a.createElement("h1",{style:{textAlign:"center"}},r.a.createElement("h2",null,"Notes for Friday")),e.state.notes.map((function(e,t){return r.a.createElement("div",{key:t},r.a.createElement(B.a,{size:"sm",style:{padding:"10px"}},r.a.createElement(B.a.Body,null,e.note),r.a.createElement("p",null,e._id._id),r.a.createElement(h.a,{variant:"danger"},"Delete")))})))},e.state={note:"",notes:[],user:{},error:"",noteId:"",token:""},e}return Object(A.a)(t,e),Object(D.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.noteData=new FormData,this.setState({user:S().user});var t=S().user._id,n=S().token;this.setState({token:n}),H(t,n).then((function(t){t.error?e.setState({error:t.error}):e.setState({notes:t}),console.log(e.state.notes),console.log(e.state.token)}))}},{key:"render",value:function(){var e=this.state.note;return r.a.createElement(u.a,null,r.a.createElement(m.a,null,r.a.createElement(d.a,null,this.newFriNote(e)),r.a.createElement(d.a,null,this.noteList())))}}]),t}(a.Component),oe=function(e){function t(){var e;return Object(O.a)(this,t),(e=Object(T.a)(this,Object(N.a)(t).call(this))).handleChange=function(t){return function(n){var a;e.setState({error:""});var r="photo"===t?n.target.files[0]:n.target.value,o="photo"===t?n.target.files[0].size:0;e.noteData.set(t,r),e.setState((a={},Object(g.a)(a,t,r),Object(g.a)(a,"fileSize",o),a))}},e.clickSubmit=function(t){t.preventDefault();var n=S().user._id,a=S().token;X(n,a,e.noteData).then((function(t){t.error?e.setState({error:t.error}):e.setState({note:""}),alert("note created!")}))},e.newSatNote=function(t){return r.a.createElement("div",{style:{margin:"10px"}},r.a.createElement("h2",{style:{textAlign:"center"}}," New note"),r.a.createElement("hr",null),r.a.createElement("form",null,r.a.createElement(M.a.Row,null,r.a.createElement(d.a,null,r.a.createElement(M.a.Label,null,"Note"),r.a.createElement(M.a.Control,{placeholder:"Your note here...",type:"text",onChange:e.handleChange("note"),value:t})))),r.a.createElement("br",null),r.a.createElement(h.a,{size:"lg",block:!0,onClick:e.clickSubmit,style:{backgroundColor:"#6e6e6dff",border:"none"}},"Create note"))},e.noteList=function(){return r.a.createElement("div",null,r.a.createElement("h1",{style:{textAlign:"center"}},r.a.createElement("h2",null,"Notes for Saturday")),e.state.notes.map((function(e,t){return r.a.createElement("div",{key:t},r.a.createElement(B.a,{size:"sm",style:{padding:"10px"}},r.a.createElement(B.a.Body,null,e.note),r.a.createElement("p",null,e._id._id),r.a.createElement(h.a,{variant:"danger"},"Delete")))})))},e.state={note:"",notes:[],user:{},error:"",noteId:"",token:""},e}return Object(A.a)(t,e),Object(D.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.noteData=new FormData,this.setState({user:S().user});var t=S().user._id,n=S().token;this.setState({token:n}),V(t,n).then((function(t){t.error?e.setState({error:t.error}):e.setState({notes:t}),console.log(e.state.notes),console.log(e.state.token)}))}},{key:"render",value:function(){var e=this.state.note;return r.a.createElement(u.a,null,r.a.createElement(m.a,null,r.a.createElement(d.a,null,this.newSatNote(e)),r.a.createElement(d.a,null,this.noteList())))}}]),t}(a.Component),le=n(49),ce=function(e){var t=e.component,n=Object(le.a)(e,["component"]);return r.a.createElement(i.b,Object.assign({},n,{render:function(e){return S()?r.a.createElement(t,e):r.a.createElement(i.a,{to:{pathname:"/signin",state:{from:e.location}}})}}))},ie=function(){return r.a.createElement("div",null,r.a.createElement(C,null),r.a.createElement(i.d,null,r.a.createElement(i.b,{exact:!0,path:"/",component:p}),r.a.createElement(i.b,{exact:!0,path:"/signup",component:z}),r.a.createElement(i.b,{exact:!0,path:"/signin",component:_}),r.a.createElement(ce,{exact:!0,path:"/user/:userId",component:Z}),r.a.createElement(ce,{exact:!0,path:"/sunday/:userId",component:$}),r.a.createElement(ce,{exact:!0,path:"/monday/:userId",component:ee}),r.a.createElement(ce,{exact:!0,path:"/tuesday/:userId",component:te}),r.a.createElement(ce,{exact:!0,path:"/wednesday/:userId",component:ne}),r.a.createElement(ce,{exact:!0,path:"/thursday/:userId",component:ae}),r.a.createElement(ce,{exact:!0,path:"/friday/:userId",component:re}),r.a.createElement(ce,{exact:!0,path:"/saturday/:userId",component:oe}),r.a.createElement(i.b,{exact:!0,path:"/archive",component:x})))},se=function(){return r.a.createElement("div",null,r.a.createElement(c.a,null,r.a.createElement(ie,null)))};l.a.render(r.a.createElement(se,null),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.c3fa6576.chunk.js.map
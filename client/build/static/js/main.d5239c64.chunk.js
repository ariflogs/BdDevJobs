(this.webpackJsonpBdDevJobs=this.webpackJsonpBdDevJobs||[]).push([[0],{46:function(e,a,t){e.exports=t(79)},53:function(e,a,t){},79:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),s=t(39),c=t.n(s),r=(t(51),t(52),t(14)),i=t(12),m=(t(53),t(8));function o(){var e=Object(l.useState)(!1),a=Object(m.a)(e,2),t=a[0],s=a[1],c=t?"is-active":"";return n.a.createElement("nav",{className:"navbar has-background-white-ter",role:"navigation","aria-label":"main navigation"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"navbar-brand"},n.a.createElement(r.b,{to:"/",className:"navbar-item"},n.a.createElement("h3",{className:"subtitle is-3"},"BdDevJobs")),n.a.createElement("a",{onClick:function(){return s(!t)},role:"button",className:"navbar-burger burger","aria-label":"menu","aria-expanded":"false","data-target":"navbarBasicExample"},n.a.createElement("span",{"aria-hidden":"true"}),n.a.createElement("span",{"aria-hidden":"true"}),n.a.createElement("span",{"aria-hidden":"true"}))),n.a.createElement("div",{id:"navbarBasicExample",className:"navbar-menu "+c},n.a.createElement("div",{className:"navbar-end"},n.a.createElement("div",{className:"navbar-item"},n.a.createElement("div",{className:"buttons"},n.a.createElement(r.b,{to:"/",className:"button is-primary"},"Jobs"),n.a.createElement(r.b,{to:"/job/create",className:"button is-danger"},"Create Job")))))))}var d=t(15),u=t.n(d),b=t(18),E=t(19),p=t.n(E),v=t(26),h=t.n(v);function g(e){var a=e.jobData,t=Object(l.useState)(!1),s=Object(m.a)(t,2),c=s[0],r=s[1],i=c?"block":"none",o=a.title,d=a.description,u=a.min_salary,b=a.max_salary,E=a.company_name,p=a.job_location,v=a.technologies,g=a.last_date_to_submit,N=(a.contact_email,a.starting_date);function f(){return{__html:d}}return n.a.createElement("div",{className:"card is-shadowless",style:{marginBottom:"1.5rem",position:"relative",height:200}},n.a.createElement("div",{className:"card-content"},n.a.createElement("h4",{className:"title is-4"},o),n.a.createElement("h6",{className:"subtitle is-6"},"at ",n.a.createElement("strong",null,E)," - ",p),n.a.createElement("button",{onClick:function(){return r(!c)},className:"button is-small is-warning",style:{position:"absolute",right:"1rem",top:"1rem"}},"show details"),n.a.createElement("div",{className:"details"},n.a.createElement("h5",{className:"subtitle is-5 is-marginless"},"Job Desc: "),n.a.createElement("div",{className:"ml-1rem overflow-dot",style:{height:"40px",overflow:"hidden"},dangerouslySetInnerHTML:f()}))),n.a.createElement("div",{className:"modal",style:{display:i}},n.a.createElement("div",{className:"modal-background"}),n.a.createElement("div",{className:"modal-card",style:{marginTop:"5vh"}},n.a.createElement("header",{className:"modal-card-head"},n.a.createElement("p",{className:"modal-card-title",style:{width:"80%"}},o),n.a.createElement("button",{onClick:function(){return r(!c)},className:"button is-danger"},"Close")),n.a.createElement("section",{className:"modal-card-body"},n.a.createElement("div",{className:"details"},n.a.createElement("div",{className:"mb-1rem is-flex"},n.a.createElement("span",{className:"subtitle is-5 is-marginless"},"Company Name: "),n.a.createElement("p",{className:"ml-1rem"},E)),n.a.createElement("div",{className:"mb-1rem is-flex"},n.a.createElement("span",{className:"subtitle is-5 is-marginless"},"Job Location: "),n.a.createElement("p",{className:"ml-1rem"},p)),v&&n.a.createElement("div",{className:"mb-1rem is-flex"},n.a.createElement("span",{className:"subtitle is-5 is-marginless"},"Technologies: "),n.a.createElement("span",{className:"ml-1rem"},n.a.createElement("div",{className:"tags"},v.map((function(e){return n.a.createElement("span",{key:e,className:"tag is-success"},e)}))))),n.a.createElement("div",{className:"mb-1rem is-flex"},n.a.createElement("span",{className:"subtitle is-5 is-marginless"},"Salary: "),n.a.createElement("p",{className:"ml-1rem"},u," - ",b||"Negotiable"," TK")),n.a.createElement("div",{className:"mb-1rem is-flex"},n.a.createElement("span",{className:"subtitle is-5 is-marginless"},"Last Date Of Submit: "),n.a.createElement("p",{className:"ml-1rem"},h()(g).format("Do MMMM YYYY"))),N&&n.a.createElement("div",{className:"mb-1rem is-flex"},n.a.createElement("span",{className:"subtitle is-5 is-marginless"},"Starting Date: "),n.a.createElement("p",{className:"ml-1rem"},h()(N).format("Do MMMM YYYY"))),n.a.createElement("div",{className:"mb-1rem"},n.a.createElement("span",{className:"subtitle is-5 is-marginless"},"Job Desc: "),n.a.createElement("div",{className:"ml-1rem",dangerouslySetInnerHTML:f()})))))))}function N(){var e=Object(l.useState)([]),a=Object(m.a)(e,2),t=a[0],s=a[1],c=Object(l.useState)(!0),r=Object(m.a)(c,2),i=r[0],o=r[1];return Object(l.useEffect)((function(){Object(b.a)(u.a.mark((function e(){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.get("https://bddevjobs.herokuapp.com/");case 3:a=e.sent,s(a.data.response),o(!1),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),alert(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()}),[i]),i?n.a.createElement("progress",{className:"progress is-large is-primary",max:"100"},"60%"):n.a.createElement("div",{className:"container box has-background-white-ter",style:{marginTop:"2rem",maxWidth:"1080px"}},t.map((function(e){return n.a.createElement(g,{key:e._id,jobData:e})})))}var f=t(44),y=t(45);function _(){var e=Object(l.useState)(""),a=Object(m.a)(e,2),t=a[0],s=a[1],c=Object(l.useState)(""),r=Object(m.a)(c,2),i=r[0],o=r[1],d=Object(l.useState)(null),E=Object(m.a)(d,2),v=E[0],h=E[1],g=Object(f.a)({initialValues:{title:"",min_salary:"",max_salary:"",company_name:"",job_location:"",last_date_to_submit:"",contact_email:"",contact_num:"",starting_date:"",technologies:[]},onSubmit:function(e,a){var t=e.title,l=(e.description,e.min_salary),n=e.max_salary,c=e.company_name,r=e.job_location,i=e.last_date_to_submit,m=e.contact_email,d=e.contact_num,E=e.starting_date,g=e.technologies,N=a.resetForm,f={title:t,description:v,min_salary:l,max_salary:n,company_name:c,job_location:r,last_date_to_submit:i,contact_email:m,contact_num:d,starting_date:E,technologies:g};console.log(f),Object(b.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.post("https://bddevjobs.herokuapp.com/job/create",f);case 3:N({}),h(""),s("Congratulations!! Your job has been added! :D "),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),o("Something went wrong! Please check if you have filled everything currently or let me know your issue at devarifhossain@gmail.com");case 11:window.scrollTo(0,0);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))()}});return n.a.createElement("div",null,t&&n.a.createElement("div",{class:"notification is-success"},n.a.createElement("button",{class:"delete",onClick:function(){return s("")}}),t),i&&n.a.createElement("div",{class:"notification is-danger"},n.a.createElement("button",{class:"delete",onClick:function(){return o("")}}),i),n.a.createElement("form",{onSubmit:g.handleSubmit},n.a.createElement("div",{class:"field"},n.a.createElement("label",{class:"label"},"Job Title*"),n.a.createElement("div",{class:"control"},n.a.createElement("input",{name:"title",onChange:g.handleChange,value:g.values.title,class:"input",type:"text",placeholder:"Junior Javascript Developer",required:!0}))),n.a.createElement("div",{class:"field"},n.a.createElement("label",{class:"label"},"Company Name*"),n.a.createElement("div",{class:"control"},n.a.createElement("input",{name:"company_name",onChange:g.handleChange,value:g.values.company_name,class:"input",type:"text",placeholder:"XYZ Company",required:!0}))),n.a.createElement("div",{className:"field is-horizontal"},n.a.createElement("div",{className:"field-body"},n.a.createElement("div",{class:"field"},n.a.createElement("label",{class:"label"},"Contact Email*"),n.a.createElement("div",{class:"control"},n.a.createElement("input",{name:"contact_email",onChange:g.handleChange,value:g.values.contact_email,class:"input",type:"text",placeholder:"xyz@zyx.com",required:!0}))),n.a.createElement("div",{class:"field"},n.a.createElement("label",{class:"label"},"Contact Number"),n.a.createElement("div",{class:"control"},n.a.createElement("input",{name:"contact_num",onChange:g.handleChange,value:g.values.contact_num,class:"input",type:"number",placeholder:"01XXXXXXXXXX"}))))),n.a.createElement("div",{class:"field"},n.a.createElement("label",{class:"label"},"Job Location*"),n.a.createElement("div",{class:"control"},n.a.createElement("input",{name:"job_location",onChange:g.handleChange,value:g.values.job_location,class:"input",type:"text",placeholder:"House No. 3, Block X, Badda, Dhaka-1212",required:!0}))),n.a.createElement("div",{class:"field"},n.a.createElement("label",{class:"label"},"Job Description*"),n.a.createElement("div",{class:"control"},n.a.createElement(y.a,{initialValue:"<p>Description, Requirements...</p>",apiKey:"ptkpfiwuk1nnjeqwslj8yh92pjh5w5v6prmfd71dg3zgizhs",init:{height:500,menubar:!1,plugins:["advlist autolink lists link image charmap print preview anchor","searchreplace visualblocks code fullscreen","insertdatetime media table paste code help wordcount"],toolbar:"undo redo | formatselect | bold italic backcolor |              alignleft aligncenter alignright alignjustify |              bullist numlist outdent indent | removeformat | help"},onEditorChange:function(e,a){h(e)}}))),n.a.createElement("div",{class:"field"},n.a.createElement("label",{class:"label"},"Key Technonogies"),n.a.createElement("div",{class:"control"},n.a.createElement("input",{name:"technologies",onChange:g.handleChange,value:g.values.technologies,class:"input",type:"text",placeholder:"Javascript, ES6+, React.js, Redux"}),n.a.createElement("p",{class:"help is-danger"},"*Use , to seperate technologies"))),n.a.createElement("div",{className:"field is-horizontal"},n.a.createElement("div",{className:"field-body"},n.a.createElement("div",{class:"field"},n.a.createElement("label",{class:"label"},"Minimum Salary*"),n.a.createElement("div",{class:"control has-icons-right"},n.a.createElement("input",{name:"min_salary",onChange:g.handleChange,value:g.values.min_salary,class:"input",type:"number",placeholder:"30000",required:!0}),n.a.createElement("span",{class:"icon is-small is-right"},n.a.createElement("span",null,"TK")))),n.a.createElement("div",{class:"field"},n.a.createElement("label",{class:"label"},"Maximum Salary"),n.a.createElement("div",{class:"control has-icons-right"},n.a.createElement("input",{name:"max_salary",onChange:g.handleChange,value:g.values.max_salary,class:"input",type:"number",placeholder:"50000"}),n.a.createElement("span",{class:"icon is-small is-right"},n.a.createElement("span",null,"TK")))))),n.a.createElement("div",{className:"field is-horizontal"},n.a.createElement("div",{className:"field-body"},n.a.createElement("div",{className:"field"},n.a.createElement("label",{className:"label"},"Last Date to Submit*"),n.a.createElement("div",{className:"control"},n.a.createElement("input",{name:"last_date_to_submit",onChange:g.handleChange,value:g.values.last_date_to_submit,className:"input",type:"date",required:!0}))),n.a.createElement("div",{className:"field"},n.a.createElement("label",{className:"label"},"Starting Date"),n.a.createElement("div",{className:"control"},n.a.createElement("input",{name:"starting_date",onChange:g.handleChange,value:g.values.starting_date,className:"input",type:"date"}))))),n.a.createElement("div",{class:"field mt-2rem"},n.a.createElement("p",{class:"control"},n.a.createElement("button",{type:"submit",class:"button is-primary is-fullwidth"},"Submit")))))}function x(){return n.a.createElement("div",{className:"container"},n.a.createElement("h1",{className:"title is-h1 has-text-danger has-text-centered"},"Create Job Page"),n.a.createElement("div",{className:"box has-background-white-ter",style:{maxWidth:880,margin:"1rem auto"}},n.a.createElement(_,null)))}var j=function(){return n.a.createElement(r.a,null,n.a.createElement("div",null,n.a.createElement(o,null),n.a.createElement(i.c,null,n.a.createElement(i.a,{exact:!0,path:"/"},n.a.createElement(N,null)),n.a.createElement(i.a,{exact:!0,path:"/job/create"},n.a.createElement(x,null)))))};c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(j,null)),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.d5239c64.chunk.js.map
import React from 'react';
import './App.css';
import jquery from 'jquery/dist/jquery.min.js';

class App extends React.Component {
   constructor(props) {
      super(props);
		
      this.state = {
		 title: "Developer details of this ReactJS - State example",
         id: "1",
         name: "Rahamath S",
		 email: "rahamath18@yahoo.com",
		 title_1: "Following data fetched from jsonplaceholder.typicode.com",
		 title_sub_1: "",
         id_1: "",
         name_1: "",
		 email_1: "",
		 users: []
      }
		fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json()).then((result) => {
			var finalResult;
		  jquery.each(result, function(key, value) {
			if(value.id == 5) {
				finalResult = value;
			}
		  });
          this.setState({			
			title_sub_1: finalResult.website,
            id_1: finalResult.id,
            name_1: finalResult.name,
            email_1: finalResult.email,
			users: result,
          });
        },
        (error) => {
          this.setState({ title: true, error });
        }
      )
   }
   render() {

      const test = function(result) {
		var content = "";
		jquery.each(result, function(key, value) {
			content = content + "ID:" + value.id + " | " + "Name:" + value.name + " | " + "Email:" + value.email + ", ";
		});
		return content;
	}

      return (
         <div>
		    <h1>Title : {this.state.title}</h1>
            <h3>ID : {this.state.id}</h3>
            <h3>Name : {this.state.name}</h3>
            <h3>Email : {this.state.email}</h3>
		  	<br/>
		    <h1>Title : {this.state.title_1}</h1>
		    <h2>Title Sub : {this.state.title_sub_1}</h2>
            <h3>ID : {this.state.id_1}</h3>
            <h3>Name : {this.state.name_1}</h3>
            <h3>Email : {this.state.email_1}</h3>
		    <h3>Details : {test(this.state.users)}</h3> 
         </div>
      );		
   }
}
export default App;

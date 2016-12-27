# frame.js
A Model View Framework es6-promise has been added to support html5 Promises.

# Starting
```
  App.start()
```

# Routing
```
  Router.addRoute("/your-route", "pagename")
  Router.addRoute("/your-route-two", "pagename")
```

# Model
Initialize Model
```
  User extends Model{
    schema () {
      return {
        first_name: String,
        last_name: String
      }
    }
  }
```

User Find Model
```
  User.find({}).then(function(users){
    console.log(users)
  })
```

User Find One Model
```
  User.findOne({}).then(function(user){
    console.log(user)
  })
```

User Save
```
  var userOne = User.findOne({id: 1})
  userOne.then(function(user){
    user.first_name = "Bill"
    user.save()
  })
```

User Create
```
  User.create({first_name: "Bob", last_name: "Nye"})
```

# Component
Add Component to App
```
  App.Component.add("My.Component", {
    render: function(){
      return (
        <div></div>
      )
    }  
  })
```

# View
Add View to App
```
  App.View.add("pagename", {
    render: function(){
      return (
        <My.Component></My.Component>
      )
    }  
  })
```

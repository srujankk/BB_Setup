/**
 * Created by srujan on 2/25/14.
 */
var BBsetupApp = {
    views:{},
    models:{},
    logFunction:function(msg){
        if(!msg) msg = "did this run during the start";
        console.log("-->"+msg);
    }
};

BBsetupApp.Router = Backbone.Router.extend({
   routes:{
       "":"home",
       "task":"task"
   },

   initialize:function(){
       BBsetupApp.logFunction("Router Intialize");
   },

   home:function(){
       BBsetupApp.logFunction("Router Home function");
       BBsetupApp.homeView = new BBsetupApp.HomeView();
       $("#mainContainer").html(BBsetupApp.homeView.render().el);
   },
    task:function(){

    }
});

$(function(){
    console.log("Running the BBSetup page");
    BBsetupApp.router = new BBsetupApp.Router();
    Backbone.history.start();
});
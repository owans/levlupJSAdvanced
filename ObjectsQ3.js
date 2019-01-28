const foo = {
    color : "red",
    getColor : function(){
      //make this function return foo.color
      //without using the word: "foo"
    let describe = "foo has a " + this.color + " color" + ".";
    return describe;
    }
  };
  
  console.log(foo.getColor());
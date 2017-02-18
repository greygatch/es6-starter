

class Foo {
  constructor() {
    this.foo = 'foo';
  }
}

class Bar extends Foo {
  constructor(props){
    super(props)
    this.bar = 'bar';
  }
}

const FooBar = new Bar();


console.log(`${FooBar.foo}${FooBar.bar}`);

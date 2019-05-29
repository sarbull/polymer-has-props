# polymer-will-receive-props

Polymer helper for running a callback after list of properties have value different from `undefined`.

# How to use

### Step 0: Pretend a property is being set later, check the demo folder
```html
<!doctype>
<html>
  <body>
    <polymer-will-receive-props></polymer-will-receive-props>

    <script>
      setTimeout(() => {
        let polymerWillReceiveProps = document.querySelector('polymer-will-receive-props');

        polymerWillReceiveProps.prop2 = 'prop2 value';
      }, 1200);
    </script>
  </body>
</html>
```

### Step 1: Extend `PolymerWillReceiveProps` mixin

```js
/*
 * Use second parameter for debug
 * class PolymerWillReceivePropsComponent extends PolymerWillReceiveProps(Polymer.Element, true) {
*/
class PolymerWillReceivePropsComponent extends PolymerWillReceiveProps(Polymer.Element) {
```

### Step 2: Add custom observers, watched properties on the web component

```js
static get observers() {
  return [
    'init(prop1, prop2)'
  ];
}
```

### Step 3: Implement the callback

```js
componentWillReceiveProps() {
  console.log('componentWillReceiveProps() -> Actual component ready');
  console.log(this.prop1, this.prop2);
}
```

# Demo

You can check the code example in the `polymer-will-receive-props.html` file
or start the component with the polymer-cli.

```bash
$ polymer serve -o -c
```

![Demo](https://raw.githubusercontent.com/sarbull/polymer-will-receive-props/master/docs/demo.gif)

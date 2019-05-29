const PolymerWillReceiveProps = (superClass, debug) => {
  return class extends superClass {
    checkIfAllPropsHaveValues(properties) {
      let result = true;

      Array.from(properties).forEach(p => {
        if (p === undefined) {
          result = false;
        }
      });

      return result;
    }

    ready() {
      super.ready();

      if(debug) {
        console.log('ready() called -> Class property values are set and local DOM is initialized.');
      }
    }

    init() {
      if(this.checkIfAllPropsHaveValues(arguments)) {
        if(debug) {
          console.log('i have all props = ', this.checkIfAllPropsHaveValues(arguments));
        }

        this.componentWillReceiveProps(arguments);

        if(debug) {
          console.log('componentWillReceiveProps() called -> Watched class properties values are set.');
        }
      }
    }
  }
};
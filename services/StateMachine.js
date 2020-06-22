class State {
    constructor(name, renderFn) {
        this.availableStates = {}
        this.render = renderFn
        this.name = name
    }

    linkState(state) {
        this.availableStates[state.name] = state
        return this
    }

    addState(name, renderFn) {
        this.availableStates[name] = new State(name, renderFn)
        return this
    }

    switchState(name) {
        if (!(name in this.availableStates)) {
            console.log("no can do bro,", name, "ain't there")
            return this
        }
        console.log("switching to", name)
        return this.availableStates[name]
    }

    render() {
        // must be replaced in constructor
    }
}

export default State
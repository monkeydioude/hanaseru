class State {
    constructor(name, renderFn) {
        this.availableStates = {}
        this.availableStatesLabel = []
        this.renderFn = renderFn
        this.name = name

        this.listIt = 0
    }

    linkState(state) {
        this.availableStates[state.name] = state
        this.availableStatesLabel.push(state.name)
        return this
    }

    addState(name, renderFn) {
        this.availableStates[name] = new State(name, renderFn)
        this.availableStatesLabel.push(name)
        return this
    }

    getState(name) {
        if (!(name in this.availableStates)) {
            console.log("no can do bro,", name, "ain't there in", this.name)
            return null
        }
        console.log("getting state", name)
        return this.availableStates[name]
    }

    // listState will return, with each call to the method, one of the State Object stored in this.availableStates by entry order.
    // listState will return null once the end of the list is reached.
    listState() {
        if (this.listIt + 1 >= this.availableStatesLabel.length) {
            return null
        }
        return this.availableStates[this.availableStatesLabel[this.listIt++]]
    }

    render(entity) {
        return this.renderFn(this, entity)
    }
}

export default State
export default class {
    constructor(options, className, attrs) {
        this.options = options
        this.attrs = attrs
        this.className = className
        this.cb = []
    }
    // tsudzuku
    optionChange(e) {
        
    }


    triggerSelectChange() {
        this.cb.forEach((cb) => cb)
    }


    onSelectChange(cb) {
        this.cb.push(cb)
    }

    render() {
        let attrs = ''
        let options = []

        this.attrs.forEach((item) => {
            attrs += ' '+ item[0] +'="'+ item[1] + '"'
        })

        this.options.forEach((item) => {
            options.push(<option value={item[1]}>{item[0]}</option>)
        })

        return (
            <select 
                className={this.className ? this.className : ""}
                {...attrs}
                >

                </select>
                
        )
    }
}
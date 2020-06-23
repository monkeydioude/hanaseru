function NavLink(label, shortPath) {
    this.label = label
    this.shortPath = shortPath
}

const GetCompleteNavigation = () => {
    return [new NavLink("Kanagemu", "/kanagemu")]
}

export {
    GetCompleteNavigation as GetCompleteNavigation,
    NavLink as Navlink
}
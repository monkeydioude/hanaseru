function NavLink(label, shortPath) {
    this.label = label
    this.shortPath = shortPath
}

const GetCompleteNavigation = () => {
    return [new NavLink("Kana", "/kana")]
}

export {
    GetCompleteNavigation as GetCompleteNavigation,
    NavLink as Navlink
}
const words = {
    LEARN: ["learn", "apprendre"],
    TRAIN: ["train", "s'entrainer"]
}

export default (word, lang) => {
    return !word in words || words[word][lang] == undefined ? "" : words[word][lang]
}
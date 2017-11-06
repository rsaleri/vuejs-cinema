function checkedFilter(category, title, checked) {
    if (checked) {
        this[category].push(title);
    } else {
        let index = this[category].indexOf(title);
        if (index > -1) {
            this[category].splice(this[category].indexOf(title), 1);
        }
    }
}

function setDay(day) {
    this.day = day;
}

export {checkedFilter, setDay}
const searchBtn = document.querySelector(".search-button")
const searchEditBTN = document.querySelector("#czasownik-search-edit")
const btnSubmit = document.querySelector(".btn")
const osoby = document.querySelectorAll(".osoba")
const zwrotneCheckbox = document.querySelector("#zwrotne")

searchEditBTN.addEventListener("keypress", function (event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        searchBtn.click();
    }
});

searchBtn.addEventListener("click", async (e) => {
    e.preventDefault()
    const data = await getData()
    populateForm(data)

})

btnSubmit.addEventListener("click", async (e) => {
    e.preventDefault()
    try {
        const verbFromDb = await getData()
        const verbFromForm = formObject()
        const { data } = await axios.patch(`/api/v1/admin/${verbFromDb._id}`, verbFromForm)
        console.log(data.msg)
        location.reload()
    } catch (e) {
        alert(e.response.data.msg)

    }
})


const populateForm = async (data) => {
    const czasownikField = document.querySelector("#czasownik")
    const tlumaczenieField = document.querySelector("#tlumaczenie")


    try {

        if (data.zwrotne === true) {
            zwrotneCheckbox.checked = true
        }


        czasownikField.value = data.czasownik
        tlumaczenieField.value = data.tlumaczenie
        osoby.forEach(osoba => {
            try {
                data.osoba.forEach(el => {
                    if (osoba.children[1].textContent === el.tense) {
                        // set category
                        osoba.children[2].value = el.category
                        // set IO
                        osoba.children[3].value = el.IO
                        // set TU
                        osoba.children[4].value = el.TU
                        // set LUI
                        osoba.children[5].value = el.LUI
                        // set LEI
                        osoba.children[6].value = el.LEI
                        // set NOI
                        osoba.children[7].value = el.NOI
                        // set VOI
                        osoba.children[8].value = el.VOI
                        // set LORO
                        osoba.children[9].value = el.LORO

                    }
                })
            } catch (e) {
                console.log(e)
            }

        })
    } catch (e) {
        console.log(e)
    }
}


const getData = async () => {
    const czasownikValue = searchEditBTN.value
    if (!czasownikValue) {
        alert("Please input CZASOWNIK")
    }
    try {
        const url = `/api/v1/admin/${czasownikValue}`
        const res = await axios.get(url)
        return res.data
    } catch (e) {
        alert("Nie ma takiego czasownika w bazie danych")
    }
}




const formObject = () => {
    const verb = {
        "czasownik": "",
        "tlumaczenie": "",
        "osoba": [],
    }
    osoby.forEach(osoba => {
        try {
            const group = osoba.children[0].textContent
            const tense = osoba.children[1].textContent
            const category = osoba.children[2].value
            const io = osoba.children[3].value
            const tu = osoba.children[4].value
            const lui = osoba.children[5].value
            const lei = osoba.children[6].value
            const noi = osoba.children[7].value
            const voi = osoba.children[8].value
            const loro = osoba.children[9].value


            verb.osoba.push({
                "tense": tense,
                "category": category,
                "group": group,
                "IO": io,
                "TU": tu,
                "LUI": lui,
                "LEI": lei,
                "NOI": noi,
                "VOI": voi,
                "LORO": loro,

            })

        } catch (e) {
            console.log(e)
        }

    })
    verb.czasownik = czasownik.value
    verb.tlumaczenie = tlumaczenie.value
    verb.zwrotne = false

    if (zwrotneCheckbox.checked) {
        verb.zwrotne = true
    }

    return verb
}
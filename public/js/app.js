const osoby = document.querySelectorAll(".osoba")
const sections = document.querySelectorAll(".section")
const czasownik = document.getElementById("czasownik")
const tlumaczenie = document.getElementById("tlumaczenie")
const categoria = document.getElementById("categoria")
const btn = document.querySelector(".btn")


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

    return verb
}

btn.addEventListener("click", async (e) => {
    e.preventDefault()
    try {
        const verb = formObject()
        const { data } = await axios.post('/api/v1/admin', verb)
        alert(`Nowy czasownik "${verb.czasownik}" został dodany `)
        location.reload()
    } catch (e) {
        alert(e.response.data.msg)

    }

})

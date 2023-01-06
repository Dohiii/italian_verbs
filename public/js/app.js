const osoby = document.querySelectorAll(".osoba")
const sections = document.querySelectorAll(".section")
const czasownik = document.getElementById("czasownik")
const tlumaczenie = document.getElementById("tlumaczenie")
const zwrotne = document.getElementById("zwrotne")
const categoria = document.getElementById("categoria")
const btn = document.querySelector(".btn")

const avere = document.querySelector("#avere")
const essere = document.querySelector("#essere")


avere.addEventListener("click", (e) => {
    e.preventDefault()

    try {
        osoby.forEach(osoba => {
            if (osoba.children[1].textContent === "Passato Prossimo") {
                osoba.children[3].value = "ho"
                // set TU
                osoba.children[4].value = "hai"
                // set LUI
                osoba.children[5].value = "hai"
                // set LEI
                osoba.children[6].value = "hai"
                // set NOI
                osoba.children[7].value = "abbiamo"
                // set VOI
                osoba.children[8].value = "avete"
                // set LORO
                osoba.children[9].value = "hanno"
            }
            if (osoba.children[1].textContent === "Trapassato Prossimo") {
                osoba.children[3].value = "avevo"
                // set TU
                osoba.children[4].value = "avevi"
                // set LUI
                osoba.children[5].value = "aveva"
                // set LEI
                osoba.children[6].value = "aveva"
                // set NOI
                osoba.children[7].value = "avevamo"
                // set VOI
                osoba.children[8].value = "avevate"
                // set LORO
                osoba.children[9].value = "avevano"

            }
            if (osoba.children[1].textContent === "Trapassato Remoto") {
                osoba.children[3].value = "ebbia"
                // set TU
                osoba.children[4].value = "avesti"
                // set LUI
                osoba.children[5].value = "ebbe"
                // set LEI
                osoba.children[6].value = "ebbe"
                // set NOI
                osoba.children[7].value = "avemmo"
                // set VOI
                osoba.children[8].value = "aveste"
                // set LORO
                osoba.children[9].value = "ebbero"

            }
            if (osoba.children[1].textContent === "Futuro Anteriore") {
                osoba.children[3].value = "avrò"
                // set TU
                osoba.children[4].value = "avrai"
                // set LUI
                osoba.children[5].value = "avrà"
                // set LEI
                osoba.children[6].value = "avrà"
                // set NOI
                osoba.children[7].value = "avremo"
                // set VOI
                osoba.children[8].value = "avrete"
                // set LORO
                osoba.children[9].value = "avranno"

            }
            if (osoba.children[1].textContent === "Passato Congiuntivo") {
                osoba.children[3].value = "abbia"
                // set TU
                osoba.children[4].value = "abbia"
                // set LUI
                osoba.children[5].value = "abbia"
                // set LEI
                osoba.children[6].value = "abbia"
                // set NOI
                osoba.children[7].value = "abbiamo"
                // set VOI
                osoba.children[8].value = "abbiate"
                // set LORO
                osoba.children[9].value = "abbiano"

            }
            if (osoba.children[1].textContent === "Trapassato Congiuntivo") {
                osoba.children[3].value = "avessi"
                // set TU
                osoba.children[4].value = "avessi"
                // set LUI
                osoba.children[5].value = "avesse"
                // set LEI
                osoba.children[6].value = "avesse"
                // set NOI
                osoba.children[7].value = "avessimo"
                // set VOI
                osoba.children[8].value = "aveste"
                // set LORO
                osoba.children[9].value = "avessero"

            }
            if (osoba.children[1].textContent === "Passato Condizionale") {
                osoba.children[3].value = "avrei"
                // set TU
                osoba.children[4].value = "avresti"
                // set LUI
                osoba.children[5].value = "avrebbe"
                // set LEI
                osoba.children[6].value = "avrebbe"
                // set NOI
                osoba.children[7].value = "avremmo"
                // set VOI
                osoba.children[8].value = "avreste"
                // set LORO
                osoba.children[9].value = "avrebbero"

            }
        })
    } catch (e) {
        console.log(e)
    }
})


essere.addEventListener("click", (e) => {
    e.preventDefault()

    try {
        osoby.forEach(osoba => {
            if (osoba.children[1].textContent === "Passato Prossimo") {
                osoba.children[3].value = "sono"
                // set TU
                osoba.children[4].value = "sei"
                // set LUI
                osoba.children[5].value = "è"
                // set LEI
                osoba.children[6].value = "è"
                // set NOI
                osoba.children[7].value = "siamo"
                // set VOI
                osoba.children[8].value = "siete"
                // set LORO
                osoba.children[9].value = "sono"
            }
            if (osoba.children[1].textContent === "Trapassato Prossimo") {
                osoba.children[3].value = "ero"
                // set TU
                osoba.children[4].value = "eri"
                // set LUI
                osoba.children[5].value = "era"
                // set LEI
                osoba.children[6].value = "era"
                // set NOI
                osoba.children[7].value = "eravamo"
                // set VOI
                osoba.children[8].value = "eravate"
                // set LORO
                osoba.children[9].value = "erano"

            }
            if (osoba.children[1].textContent === "Trapassato Remoto") {
                osoba.children[3].value = "fui"
                // set TU
                osoba.children[4].value = "fosti"
                // set LUI
                osoba.children[5].value = "fu"
                // set LEI
                osoba.children[6].value = "fu"
                // set NOI
                osoba.children[7].value = "fummo"
                // set VOI
                osoba.children[8].value = "foste"
                // set LORO
                osoba.children[9].value = "furono"

            }
            if (osoba.children[1].textContent === "Futuro Anteriore") {
                osoba.children[3].value = "sarò"
                // set TU
                osoba.children[4].value = "sarai"
                // set LUI
                osoba.children[5].value = "sarà"
                // set LEI
                osoba.children[6].value = "sarà"
                // set NOI
                osoba.children[7].value = "saremo"
                // set VOI
                osoba.children[8].value = "sarete"
                // set LORO
                osoba.children[9].value = "saranno"

            }
            if (osoba.children[1].textContent === "Passato Congiuntivo") {
                osoba.children[3].value = "sia"
                // set TU
                osoba.children[4].value = "sia"
                // set LUI
                osoba.children[5].value = "sia"
                // set LEI
                osoba.children[6].value = "sia"
                // set NOI
                osoba.children[7].value = "siamo"
                // set VOI
                osoba.children[8].value = "siate"
                // set LORO
                osoba.children[9].value = "siano"

            }
            if (osoba.children[1].textContent === "Trapassato Congiuntivo") {
                osoba.children[3].value = "fossi"
                // set TU
                osoba.children[4].value = "fossi"
                // set LUI
                osoba.children[5].value = "fosse"
                // set LEI
                osoba.children[6].value = "fosse"
                // set NOI
                osoba.children[7].value = "fossimo"
                // set VOI
                osoba.children[8].value = "foste"
                // set LORO
                osoba.children[9].value = "fossero"

            }
            if (osoba.children[1].textContent === "Passato Condizionale") {
                osoba.children[3].value = "sarei"
                // set TU
                osoba.children[4].value = "saresti"
                // set LUI
                osoba.children[5].value = "sarebbe"
                // set LEI
                osoba.children[6].value = "sarebbe"
                // set NOI
                osoba.children[7].value = "saremmo"
                // set VOI
                osoba.children[8].value = "sareste"
                // set LORO
                osoba.children[9].value = "sarebbero"

            }
        })
    } catch (e) {
        console.log(e)
    }
})






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

    if (zwrotne.checked) {
        verb.zwrotne = true
    }


    return verb
}

btn.addEventListener("click", async (e) => {
    e.preventDefault()
    try {
        const verb = formObject()
        console.log(verb)
        const { data } = await axios.post('/api/v1/admin', verb)
        alert(`Nowy czasownik "${verb.czasownik}" został dodany `)
        location.reload()
    } catch (e) {
        alert(e.response.data.msg)

    }

})

import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Osoba from './Osoba'
import OsobaSection from './OsobaSection'
import Page from './Page'


function AddVerb() {
  const [czasownik, setCzasownik] = useState("")
  const [tlumaczenie, setTlumaczenie] = useState("")
  const [zwrotny, setZwrotny] = useState(false)

  const allSections = useRef(null)

  // Refs sections

  const sectionIndicativo = useRef(null)
  const sectionCongiuntivo = useRef(null)
  const sectionCondizionale = useRef(null)
  const sectionImperativo = useRef(null)


  // Ref osoby
  const presenteIndecativo = useRef(null)
  const passatoProssimo = useRef(null)
  const imperfettoIndicativo = useRef(null)
  const trapassatoProssimo = useRef(null)
  const passatoRemoto = useRef(null)
  const trapassatoRemoto = useRef(null)
  const futuroSemplice = useRef(null)
  const futuroAnteriore = useRef(null)
  const presenteCongiuntivo = useRef(null)
  const passatoCongiuntivo = useRef(null)
  const imperfettoCongiuntivo = useRef(null)
  const trapassatoCongiuntivo = useRef(null)
  const presenteCondizionale = useRef(null)
  const passatoCondizionale = useRef(null)
  const presenteImperativo = useRef(null)



  const dataToPost = {
    "czasownik": czasownik,
    "tlumaczenie": tlumaczenie,
    "zwrotne": zwrotny,
    "osoba": []
  }



  function handleAvere(e) {
    e.preventDefault()
    try {
      passatoProssimo.current.children[3].value = "ho"
      // set TU
      passatoProssimo.current.children[4].value = "hai"
      // set LUI
      passatoProssimo.current.children[5].value = "ha"
      // set LEI
      passatoProssimo.current.children[6].value = "ha"
      // set NOI
      passatoProssimo.current.children[7].value = "abbiamo"
      // set VOI
      passatoProssimo.current.children[8].value = "avete"
      // set LORO
      passatoProssimo.current.children[9].value = "hanno"



      trapassatoProssimo.current.children[3].value = "avevo"
      // set TU
      trapassatoProssimo.current.children[4].value = "avevi"
      // set LUI
      trapassatoProssimo.current.children[5].value = "aveva"
      // set LEI
      trapassatoProssimo.current.children[6].value = "aveva"
      // set NOI
      trapassatoProssimo.current.children[7].value = "avevamo"
      // set VOI
      trapassatoProssimo.current.children[8].value = "avevate"
      // set LORO
      trapassatoProssimo.current.children[9].value = "avevano"



      trapassatoRemoto.current.children[3].value = "ebbi"
      // set TU
      trapassatoRemoto.current.children[4].value = "avesti"
      // set LUI
      trapassatoRemoto.current.children[5].value = "ebbe"
      // set LEI
      trapassatoRemoto.current.children[6].value = "ebbe"
      // set NOI
      trapassatoRemoto.current.children[7].value = "avemmo"
      // set VOI
      trapassatoRemoto.current.children[8].value = "aveste"
      // set LORO
      trapassatoRemoto.current.children[9].value = "ebbero"



      futuroAnteriore.current.children[3].value = "avrò"
      // set TU
      futuroAnteriore.current.children[4].value = "avrai"
      // set LUI
      futuroAnteriore.current.children[5].value = "avrà"
      // set LEI
      futuroAnteriore.current.children[6].value = "avrà"
      // set NOI
      futuroAnteriore.current.children[7].value = "avremo"
      // set VOI
      futuroAnteriore.current.children[8].value = "avrete"
      // set LORO
      futuroAnteriore.current.children[9].value = "avranno"


      passatoCongiuntivo.current.children[3].value = "abbia"
      // set TU
      passatoCongiuntivo.current.children[4].value = "abbia"
      // set LUI
      passatoCongiuntivo.current.children[5].value = "abbia"
      // set LEI
      passatoCongiuntivo.current.children[6].value = "abbia"
      // set NOI
      passatoCongiuntivo.current.children[7].value = "abbiamo"
      // set VOI
      passatoCongiuntivo.current.children[8].value = "abbiate"
      // set LORO
      passatoCongiuntivo.current.children[9].value = "abbiano"


      trapassatoCongiuntivo.current.children[3].value = "avessi"
      // set TU
      trapassatoCongiuntivo.current.children[4].value = "avessi"
      // set LUI
      trapassatoCongiuntivo.current.children[5].value = "avesse"
      // set LEI
      trapassatoCongiuntivo.current.children[6].value = "avesse"
      // set NOI
      trapassatoCongiuntivo.current.children[7].value = "avessimo"
      // set VOI
      trapassatoCongiuntivo.current.children[8].value = "aveste"
      // set LORO
      trapassatoCongiuntivo.current.children[9].value = "avessero"


      passatoCondizionale.current.children[3].value = "avrei"
      // set TU
      passatoCondizionale.current.children[4].value = "avresti"
      // set LUI
      passatoCondizionale.current.children[5].value = "avrebbe"
      // set LEI
      passatoCondizionale.current.children[6].value = "avrebbe"
      // set NOI
      passatoCondizionale.current.children[7].value = "avremmo"
      // set VOI
      passatoCondizionale.current.children[8].value = "avreste"
      // set LORO
      passatoCondizionale.current.children[9].value = "avrebbero"
    } catch (e) {
      console.log(e)
    }
  }

  function handleEsere(e) {
    e.preventDefault()
    try {


      passatoProssimo.current.children[3].value = "sono"
      // set TU
      passatoProssimo.current.children[4].value = "sei"
      // set LUI
      passatoProssimo.current.children[5].value = "è"
      // set LEI
      passatoProssimo.current.children[6].value = "è"
      // set NOI
      passatoProssimo.current.children[7].value = "siamo"
      // set VOI
      passatoProssimo.current.children[8].value = "siete"
      // set LORO
      passatoProssimo.current.children[9].value = "sono"


      trapassatoProssimo.current.children[3].value = "ero"
      // set TU
      trapassatoProssimo.current.children[4].value = "eri"
      // set LUI
      trapassatoProssimo.current.children[5].value = "era"
      // set LEI
      trapassatoProssimo.current.children[6].value = "era"
      // set NOI
      trapassatoProssimo.current.children[7].value = "eravamo"
      // set VOI
      trapassatoProssimo.current.children[8].value = "eravate"
      // set LORO
      trapassatoProssimo.current.children[9].value = "erano"


      trapassatoRemoto.current.children[3].value = "fui"
      // set TU
      trapassatoRemoto.current.children[4].value = "fosti"
      // set LUI
      trapassatoRemoto.current.children[5].value = "fu"
      // set LEI
      trapassatoRemoto.current.children[6].value = "fu"
      // set NOI
      trapassatoRemoto.current.children[7].value = "fummo"
      // set VOI
      trapassatoRemoto.current.children[8].value = "foste"
      // set LORO
      trapassatoRemoto.current.children[9].value = "furono"



      futuroAnteriore.current.children[3].value = "sarò"
      // set TU
      futuroAnteriore.current.children[4].value = "sarai"
      // set LUI
      futuroAnteriore.current.children[5].value = "sarà"
      // set LEI
      futuroAnteriore.current.children[6].value = "sarà"
      // set NOI
      futuroAnteriore.current.children[7].value = "saremo"
      // set VOI
      futuroAnteriore.current.children[8].value = "sarete"
      // set LORO
      futuroAnteriore.current.children[9].value = "saranno"


      passatoCongiuntivo.current.children[3].value = "sia"
      // set TU
      passatoCongiuntivo.current.children[4].value = "sia"
      // set LUI
      passatoCongiuntivo.current.children[5].value = "sia"
      // set LEI
      passatoCongiuntivo.current.children[6].value = "sia"
      // set NOI
      passatoCongiuntivo.current.children[7].value = "siamo"
      // set VOI
      passatoCongiuntivo.current.children[8].value = "siate"
      // set LORO
      passatoCongiuntivo.current.children[9].value = "siano"


      trapassatoCongiuntivo.current.children[3].value = "fossi"
      // set TU
      trapassatoCongiuntivo.current.children[4].value = "fossi"
      // set LUI
      trapassatoCongiuntivo.current.children[5].value = "fosse"
      // set LEI
      trapassatoCongiuntivo.current.children[6].value = "fosse"
      // set NOI
      trapassatoCongiuntivo.current.children[7].value = "fossimo"
      // set VOI
      trapassatoCongiuntivo.current.children[8].value = "foste"
      // set LORO
      trapassatoCongiuntivo.current.children[9].value = "fossero"


      passatoCondizionale.current.children[3].value = "sarei"
      // set TU
      passatoCondizionale.current.children[4].value = "saresti"
      // set LUI
      passatoCondizionale.current.children[5].value = "sarebbe"
      // set LEI
      passatoCondizionale.current.children[6].value = "sarebbe"
      // set NOI
      passatoCondizionale.current.children[7].value = "saremmo"
      // set VOI
      passatoCondizionale.current.children[8].value = "sareste"
      // set LORO
      passatoCondizionale.current.children[9].value = "sarebbero"


    } catch (e) {
      console.log(e)
    }
  }

  function loopAndAddOsobaToObject(arr) {
    arr.forEach(osoba => {
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

        dataToPost.osoba.push({
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
  }

  const formObject = () => {
    const sectionIndicativoArr = Array.from(sectionIndicativo.current.children)
    const sectionCongiuntivoArr = Array.from(sectionCongiuntivo.current.children)
    const sectionCondizionaleArr = Array.from(sectionCondizionale.current.children)
    const sectionImperativoArr = Array.from(sectionImperativo.current.children)
    sectionIndicativoArr.shift()
    sectionCongiuntivoArr.shift()
    sectionCondizionaleArr.shift()
    sectionImperativoArr.shift()

    loopAndAddOsobaToObject(sectionIndicativoArr)
    loopAndAddOsobaToObject(sectionCongiuntivoArr)
    loopAndAddOsobaToObject(sectionCondizionaleArr)
    loopAndAddOsobaToObject(sectionImperativoArr)
  }

  async function handleSubmit(e) {
    e.preventDefault()
    await formObject()

    try {
      const response = await fetch(
        "https://italian-verbs.onrender.com/api/v1/admin", {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem("verbAppToken")}`
        },
        body: JSON.stringify(dataToPost)
      })

      console.log(response)


      if (response.status === 401) {
        alert("You need to be logged in to post verb")
      }

    } catch (e) {
      console.log(e)
    }

  }


  return (
    <Page title="Add Verb">
      <Link className='btn' to={"/"}>powrót</Link>
      <main>
        <form className="form contact-form" onSubmit={handleSubmit} ref={allSections}>
          <section className="top-container">

            <input
              type="text"
              className="form-input czasownik-input"
              placeholder="czasownik"
              id="czasownik"
              onChange={e => setCzasownik(e.target.value)}
            />

            <input
              type="text"
              className="form-input tlumaczenie-input"
              placeholder="tlumaczenie"
              id="tlumaczenie"
              onChange={e => setTlumaczenie(e.target.value)}
            />

            <div className="zwrotne_checkboxes">
              <div className="checkbox-wrapper-32 zwrotne">
                <input type="radio" name="checkbox_zwrotne" id="zwrotne-tak" onChange={e => setZwrotny(true)} />
                <label htmlFor="zwrotne-tak">
                  Zwrotne
                </label>
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <path d="M 10 10 L 90 90" stroke="#000" strokeDasharray="113" strokeDashoffset="113"></path>
                  <path d="M 90 10 L 10 90" stroke="#000" strokeDasharray="113" strokeDashoffset="113"></path>
                </svg>
              </div>

              {" "}

              <div className="checkbox-wrapper-32 zwrotne">
                <input type="radio" name="checkbox_zwrotne" id="zwrotne-nie" checked={true} onChange={e => setZwrotny(false)} />
                <label htmlFor="zwrotne-nie">
                  Nie zwrotne
                </label>
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <path d="M 10 10 L 90 90" stroke="#000" strokeDasharray="113" strokeDashoffset="113"></path>
                  <path d="M 90 10 L 10 90" stroke="#000" strokeDasharray="113" strokeDashoffset="113"></path>
                </svg>
              </div>


            </div>
          </section>


          <button onClick={handleAvere} id="avere" className="btn-add">avere</button>
          {" "}
          <button onClick={handleEsere} id="essere" className="btn-add">essere</button>








          <hr />
          <OsobaSection group="indicativo" innerRef={sectionIndicativo}>
            <Osoba group="indicativo" tense="Presente Indicativo" innerRef={presenteIndecativo} />
            <Osoba group="indicativo" tense="Passato Prossimo" innerRef={passatoProssimo} />
            <Osoba group="indicativo" tense="Imperfetto Indicativo" innerRef={imperfettoIndicativo} />
            <Osoba group="indicativo" tense="Trapassato Prossimo" innerRef={trapassatoProssimo} />
            <Osoba group="indicativo" tense="Passato Remoto" innerRef={passatoRemoto} />
            <Osoba group="indicativo" tense="Trapassato Remoto" innerRef={trapassatoRemoto} />
            <Osoba group="indicativo" tense="Futuro Semplice" innerRef={futuroSemplice} />
            <Osoba group="indicativo" tense="Futuro Anteriore" innerRef={futuroAnteriore} />
          </OsobaSection>


          <hr />

          <OsobaSection group="congiuntivo" innerRef={sectionCongiuntivo}>
            <Osoba group="congiuntivo" tense="Presente Congiuntivo" innerRef={presenteCongiuntivo} />
            <Osoba group="congiuntivo" tense="Passato Congiuntivo" innerRef={passatoCongiuntivo} />
            <Osoba group="congiuntivo" tense="Imperfetto Congiuntivo" innerRef={imperfettoCongiuntivo} />
            <Osoba group="congiuntivo" tense="Trapassato Congiuntivo" innerRef={trapassatoCongiuntivo} />
          </OsobaSection>


          <hr />
          <OsobaSection group="condizionale" innerRef={sectionCondizionale}>
            <Osoba group="condizionale" tense="Presente Condizionale" innerRef={presenteCondizionale} />
            <Osoba group="condizionale" tense="Passato Condizionale" innerRef={passatoCondizionale} />
          </OsobaSection>


          <hr />
          <OsobaSection group="imperativo" innerRef={sectionImperativo}>
            <Osoba group="imperativo" tense="Presente Imperativo" innerRef={presenteImperativo} />
          </OsobaSection>

          <button type='submit' className="btn btn-block">Dodaj czasownik</button>


        </form>

      </main>

    </Page >
  )
}

export default AddVerb
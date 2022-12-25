const search = document.querySelector(".search-button")
const reset = document.querySelector(".reset-button")
const czasownikSearch = document.querySelector("#czasownik-search")
const searchResults = document.querySelector(".search-results")

console.log(searchResults.children.length)



search.addEventListener("click", async (e) => {
  e.preventDefault()

  if (searchResults.children.length <= 0) {
    const czasownikValue = czasownikSearch.value
    const url = `/api/v1/admin?search=${czasownikValue}`
    const res = await axios.get(url)
    const verbs = res.data.verbs
    verbs.forEach(verb => {
      let div = document.createElement("div")
      let h5 = document.createElement("h5")
      let p = document.createElement("p")
      let p2 = document.createElement("p")
      div.className = "verb"
      h5.textContent = verb.czasownik
      p.textContent = verb.tlumaczenie
      p2.textContent = verb.zwrotne
      div.append(h5)
      div.append(p)
      div.append(p2)
      searchResults.append(div)
    }
    );
  }
})

reset.addEventListener("click", async (e) => { })
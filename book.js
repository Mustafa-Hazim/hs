
const urlParams = new URLSearchParams(window.location.search)
const bookId = urlParams.get('id')
const script = document.createElement('script')
script.src = `./scripts/${bookId}.js`

document.head.appendChild(script) 

script.onload = () => {
    // set book title in the web page title : 
    document.title = book.bookName
    const root = document.getElementById('root')
    // book title
    const h1BookTitle = document.createElement('h1')
    h1BookTitle.className = 'book-title'
    h1BookTitle.textContent = book.bookName
    root.appendChild(h1BookTitle)

    // check if the book has no fasl
    if(!book.hasFasls){
        // inflate themas : 
        const themas = document.createElement('div')
        themas.className = 'themas'
        book.themas.forEach(th => {
            const thema = document.createElement('div')
            thema.className = 'thema'
            themas.appendChild(thema)
            // thema title : 
            const h3ThemaTitle = document.createElement('h3')
            h3ThemaTitle.className = 'thema-title'
            h3ThemaTitle.textContent = th.name
            thema.appendChild(h3ThemaTitle)
            book.ahadith_sharefa.forEach(has => {
                if(has.themaId === th.id) {
                    const hs = document.createElement('div')
                    hs.className = 'hs'
                    thema.appendChild(hs)
                    // hs number: 
                    const hsNumber = document.createElement('div')
                    hsNumber.textContent = `#  ${has.numberInSite}`
                    hsNumber.className = 'hs-number'
                    hs.appendChild(hsNumber)
                    // hs content:
                    const hsContent = document.createElement('div')
                    hsContent.innerHTML = has.text
                    hs.appendChild(hsContent)
                    // hs info
                    const hsInfo = document.createElement('div')
                    hsInfo.className = 'hs-info'
                    hsInfo.innerHTML = has.info
                    hs.appendChild(hsInfo)
                    // hs number in masnad 
                    const hsNumberInMasnad = document.createElement('div')
                    hsNumberInMasnad.textContent = 'رقم الحديث في مسند الإمام أحمد بن حنبل: ' + has.numberInMasnad
                    hsNumberInMasnad.className = 'hs-n-m'
                    hs.appendChild(hsNumberInMasnad)
                }
            })
        })
        root.appendChild(themas)
    }
}

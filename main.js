
document.addEventListener("DOMContentLoaded", () => {
    const body = document.body
    body.className = 'test'
    console.log(body)
    const siteInfo = document.createElement('div')
    siteInfo.className = 'site-info'
    siteInfo.innerHTML = 'آخر تحديث للموقع في 11/02  <br> كتاب الإسلام والإيمان'
    const secondEl = body.children[1]
    body.insertBefore(siteInfo, secondEl)

    // navigate form 
    const container = document.createElement('div')
    container.className = 'navigate-container'
    const input = document.createElement('input')
    input.placeholder = 'رقم الحديث للتوجه إليه'
    const btn = document.createElement('button')
    btn.textContent = 'ابحث'
    btn.addEventListener('click', () => {
        const hsNr = parseInt(input.value)
        const obj = book_hs.find(e => e.hs === hsNr)
        if(obj)
        window.location.href = 'http://hadith-shareef.psdn.be/hs/book.html?id='+obj.book+"#hs"+obj.hs
    })

    container.appendChild(input)
    container.appendChild(btn)  

    body.insertBefore(container, secondEl)
    
})
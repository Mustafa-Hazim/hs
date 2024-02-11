
document.addEventListener("DOMContentLoaded", () => {
    const body = document.body
    body.className = 'test'
    console.log(body)
    const siteInfo = document.createElement('div')
    siteInfo.className = 'site-info'
    siteInfo.innerHTML = 'آخر تحديث للموقع في 11/02  <br> كتاب الإسلام والإيمان'
    const secondEl = body.children[1]
    body.insertBefore(siteInfo, secondEl)
    
})
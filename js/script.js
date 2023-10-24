// one way of doing if using defer with script tag in html
window.addEventListener('load', init)
function init(){
    document.getElementById("empForm").addEventListener('submit', (e) => {
        e.preventDefault() // prevent fefaut form behavior on submit
      
        //way3 use single console log statement and read form value directly without using variable
        console.log(`
        ID: ${document.getElementById('id').value} 
        Name: ${document.getElementById('name').value}
        Extension: ${document.getElementById('ext').value}
        Email: ${document.getElementById('email').value}
        Department: ${document.getElementById('department').value}`)
    })
}




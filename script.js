let container = document.createElement('div')
container.className = 'container';

let row = document.createElement('div');
row.className = 'row';
container.append(row)

let button2 = document.createElement('button')
button2.setAttribute('type', 'button')
button2.setAttribute('id', 'butt2')
button2.innerHTML = 'Fox Random Images'
row.append(button2)


let br = document.createElement('br')
row.append(br)


document.body.append(container)




document.getElementById("butt2").onclick = async function randomFox () {
    try {

    let foxres = (await (fetch('https://randomfox.ca/floof/')))    //random fox
    let foxres2 = await foxres.json()
    console.log(foxres2.image)
    let image = document.createElement('img')
    image.setAttribute('src', foxres2.image)
    row.append(image)
    } catch (error) {
        
    }
}





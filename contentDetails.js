console.clear()

let id = location.search.split('?')[1]
console.log(id)

if(document.cookie.indexOf(',counter=')>=0)
{
    let counter = document.cookie.split(',')[1].split('=')[1]
    document.getElementById("badge").innerHTML = counter
}

function dynamicContentDetails(ob)
{
    let mainContainer = document.createElement('div')
    mainContainer.id = 'containerD'
    document.getElementById('containerProduct').appendChild(mainContainer);

    let imageSectionDiv = document.createElement('div')
    imageSectionDiv.id = 'imageSection'

    let imgTag = document.createElement('img')
     imgTag.id = 'imgDetails'
   
     imgTag.src = ob.preview

    imageSectionDiv.appendChild(imgTag)

    let productDetailsDiv = document.createElement('div')
    productDetailsDiv.id = 'productDetails'

    

    let h1 = document.createElement('h1')
    let h1Text = document.createTextNode(ob.name)
    h1.appendChild(h1Text)

    let h4 = document.createElement('h4')
    let h4Text = document.createTextNode(ob.brand)
    h4.appendChild(h4Text)
    console.log(h4);

    let detailsDiv = document.createElement('div')
    detailsDiv.id = 'details'


    let h3DetailsDiv1 = document.createElement('span')
    let h3DetailsText1 = document.createTextNode('Price: Rs')
    h3DetailsDiv1.id = 'price1'
    h3DetailsDiv1.appendChild(h3DetailsText1)


    let h3DetailsDiv = document.createElement('span')
    let h3DetailsText = document.createTextNode(ob.price )
    h3DetailsDiv.id = 'price'
    h3DetailsDiv.appendChild(h3DetailsText)
    // h3DetailsDiv1.appendChild(h3DetailsText)

    let h3 = document.createElement('h3')
    let h3Text = document.createTextNode('Description')
    h3.id = 'des'
    h3.appendChild(h3Text)

    let para = document.createElement('p')
    let paraText = document.createTextNode(ob.description)
    para.id= 'para'
    para.appendChild(paraText)

    let productPreviewDiv = document.createElement('div')
    productPreviewDiv.id = 'productPreview'

    let h3ProductPreviewDiv = document.createElement('h3')
    let h3ProductPreviewText = document.createTextNode('Product Preview')
    h3ProductPreviewDiv.id = 'pdes'
    h3ProductPreviewDiv.appendChild(h3ProductPreviewText)
    productPreviewDiv.appendChild(h3ProductPreviewDiv)

    let i;
    //var selectedImage = "previewImg0"
    for(i=0; i<ob.photos.length; i++)
    {
        
    //      if(i==0){

    //     let imgTagProductPreviewDiv = document.createElement('img')
    //     imgTagProductPreviewDiv.id = `previewImg${i}`
    //     imgTagProductPreviewDiv.src = ob.photos[i]
    //    // imgTagProductPreviewDiv.class = 'active'
    //    $("img").addClass("active");


    //     imgTagProductPreviewDiv.onclick =  function (i)
    //     {
    //        // document.getElementById(selectedImage).class.remove("active")
    //        $("#selectedImage").removeClass("active");
    //             let id = "previewImg"+i
    //             selectedImage = id
    //             //document.getElementById(id).class.add("active")
    //             $("#id").addClass("active");

    //         console.log("clicked" + this.src)
    //         imgTag.src = ob.photos[i]
    //         document.getElementById("imgDetails").src = this.src 
            
    //     }

    //     productPreviewDiv.appendChild(imgTagProductPreviewDiv)
    //     //  document.getElementById("productPreview").innerHTML += 
    //     // `
    //     //     <img src=${ob.photos[i]} class="image active" id="previewImg${i}" onclick="imageClicked(${i})"/>
    //     // `
    // }
    // else{
    //     let imgTagProductPreviewDiv = document.createElement('img')
    //     imgTagProductPreviewDiv.id = `previewImg${i}`
    //     imgTagProductPreviewDiv.src = ob.photos[i]
    //     //imgTagProductPreviewDiv.classList.add = 'active'

    //     imgTagProductPreviewDiv.onclick =  function (i)
    //     {
    //         //document.getElementById(selectedImage).class.remove("active")
    //         $("#selectedImage").removeClass("active");
    //             let id = "previewImg"+i
    //             selectedImage = id
    //            // document.getElementById(id).class.add("active")
    //            $("#id").addClass("active");

    //         console.log("clicked" + this.src)
    //         imgTag.src = ob.photos[i]
    //         document.getElementById("imgDetails").src = this.src 
            
    //     }
  
    //     productPreviewDiv.appendChild(imgTagProductPreviewDiv)

    //     // document.getElementById("productPreview").innerHTML += 
    //     // `
    //     //     <img src=${ob.photos[i]} class="image" id="previewImg${i}" onclick="imageClicked(${i})"/>
    //     // `
    // }

    // function imageClicked (i)
    // {
    //     document.getElementById(selectedImage).classList.remove("active")
    //         let id = "previewImg"+i
    //         selectedImage = id
    //         document.getElementById(id).classList.add("active")
    //     console.log("clicked" + this.src)
    //     imgTag.src = ob.photos[i]
    //     document.getElementById("imgDetails").src = this.src 
        
    // }


       
        let imgTagProductPreviewDiv = document.createElement('img')
        imgTagProductPreviewDiv.id = `previewImg${i}`
        imgTagProductPreviewDiv.src = ob.photos[i]
    //     imgTagProductPreviewDiv.classList.add = 'active'
    //    if(i==0){   imgTagProductPreviewDiv.classList.add = 'active' }
        imgTagProductPreviewDiv.onclick = function(event)
        {

            console.log("clicked" + this.src)
            imgTag.src = ob.photos[i]
            document.getElementById("imgDetails").src = this.src 
            
        }
       productPreviewDiv.appendChild(imgTagProductPreviewDiv)
    }

    let buttonDiv = document.createElement('div')
    buttonDiv.id = 'button'

    let buttonTag = document.createElement('button')
    buttonDiv.appendChild(buttonTag)

    buttonText = document.createTextNode('Add to Cart')
    buttonTag.onclick  =   function()
    {
        let order = id+" "
        let counter = 1
        if(document.cookie.indexOf(',counter=')>=0)
        {
            order = id + " " + document.cookie.split(',')[0].split('=')[1]
            counter = Number(document.cookie.split(',')[1].split('=')[1]) + 1
        }
        document.cookie = "orderId=" + order + ",counter=" + counter
        document.getElementById("badge").innerHTML = counter
        console.log(document.cookie)
    }
    buttonTag.appendChild(buttonText)


    console.log(mainContainer.appendChild(imageSectionDiv));
    mainContainer.appendChild(imageSectionDiv)
    mainContainer.appendChild(productDetailsDiv)
    productDetailsDiv.appendChild(h1)
    productDetailsDiv.appendChild(h4)
    productDetailsDiv.appendChild(detailsDiv)
    detailsDiv.appendChild(h3DetailsDiv1)
    detailsDiv.appendChild(h3DetailsDiv)
    detailsDiv.appendChild(h3)
    detailsDiv.appendChild(para)
    productDetailsDiv.appendChild(productPreviewDiv)
    
    
    productDetailsDiv.appendChild(buttonDiv)


    return mainContainer
}





let httpRequest = new XMLHttpRequest()
{
    httpRequest.onreadystatechange = function()
    {
        if(this.readyState === 4 && this.status == 200)
        {
            console.log('connected!!');
            let contentDetails = JSON.parse(this.responseText)
            {
                console.log(contentDetails);
                dynamicContentDetails(contentDetails)
            }
        }
        else
        {
            console.log('not connected!');
        }
    }
}

httpRequest.open('GET', 'https://5d76bf96515d1a0014085cf9.mockapi.io/product/'+id, true)
httpRequest.send()  

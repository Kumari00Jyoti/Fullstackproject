const myPromise = async()=>{
    const response = await fetch("https://fakestoreapi.in/api/products")

    const res = await response.json()
    const data =res.products;
    showData(data)
   // console.log(res.products)
}
myPromise()

async function showData(data){
    data.forEach((ele,index)=>{
  const parent =document.getElementById("parent")
 

  const h2 = document.createElement("h2")
  h2.innerText=ele.brand;
h2.style.paddingLeft="30px"
  const img=document.createElement("img")
  img.src = ele.image;
  img.style.width="200px"
  img.style.height="200px"

  const p1 = document.createElement("p")
  p1.innerText=ele.title;
  p1.style.paddingLeft="30px"
  const p2 = document.createElement("p")
  p2.innerText=ele.price;
  p2.style.paddingLeft="30px"
  const p3 = document.createElement("p")
  p3.innerText=ele.category;
  p3.style.paddingLeft="30px"
  const p4 = document.createElement("p")
  p4.innerText=ele.discount;
  p4.style.paddingLeft="30px"
 
  })

  const productDiv=document.createElement("div")
  productDiv.style.border="1px solid grey"
  
   productDiv.append(h2,img,p1,p2,p3,p4);
   parent.append(productDiv);

   parent.append(productDiv)
  
}
   




  


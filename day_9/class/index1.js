const myPromise = async()=>{
    const response = await fetch("https://fakestoreapi.com/products")

    const data = await response.json()
   console.log(data);
    showData(data)
}
myPromise()

async function showData(data){
    const parent =document.getElementById("parent")
    data.forEach((ele,index)=>{
 
 

  const h2 = document.createElement("h2")
  h2.innerText=ele.title;
h2.style.paddingLeft="30px"
  const img=document.createElement("img")
  img.src = ele.image;
  img.style.width="200px"
  img.style.height="200px"

  const p1 = document.createElement("p")
  p1.innerText=`Rating :${ele.rating.rate}`
  p1.style.paddingLeft="30px"
  p1.className="p"

  const p2 = document.createElement("p")
  p2.innerText=`Price :${ele.price}`
  p2.style.paddingLeft="30px"
  p2.className="p"

  const p3 = document.createElement("p")
  p3.innerText=ele.category;
  p3.style.paddingLeft="30px"
  p3.className="p"
  
  const button = document.createElement("button")
  button.textContent="Add to Cart"
  button.className="btn"
  button.addEventListener("click",()=>{
   alert(`Item added to cart:${ele.title}`)
  })


  const productDiv=document.createElement("div")
  productDiv.style.border="1px solid grey"
  productDiv.style.fontSize="10px"
  productDiv.style.color="grey"
  productDiv.style.textAlign="center"
   productDiv.append(h2,img,p1,p2,p3,button);

   parent.append(productDiv);

   parent.append(productDiv)
 
  })

  
  
}
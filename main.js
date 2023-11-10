let datae = "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"

let inp =document.getElementById("inp")
let div =document.getElementById("div")


let fun = async ()=>{
    let methods = {
        method:"POST",
        headers:{ 
            "Content-Type": "application/json",
        "Authorization":` Bearer ${datae}`},
        body:JSON.stringify(
            {
                "prompt":inp.value,
                "n":3,
                "size":"256x256"
            }
        )
    }
    let res = await fetch("https://api.openai.com/v1/images/generations",methods)
    let datas = await res.json()
    console.log(datas.data);
    let imegs = datas.data
    imegs.map((img)=>{
        inp.value = ""
        let conterner = document.createElement("div")
        conterner.className = "imge"
        div.append(conterner)
        let photo = document.createElement("img")
        conterner.append(photo)
        photo.src = img.url
    })
}
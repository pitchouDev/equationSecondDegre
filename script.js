const bouton = document.getElementById("bouton");

const reponseDelta = document.getElementById("delta");
const reponseXUn = document.getElementById("xUn");
const reponseXDeux = document.getElementById("xDeux")

document.addEventListener("click", (event) => {
    if (event.target === bouton) {
        
        let a = parseFloat(document.getElementById("a").value)
        let b = parseFloat(document.getElementById("b").value)
        let c = parseFloat(document.getElementById("c").value)
        if (!a || a === 0) {
            alert('"a" ne peut pas être égal à 0')
            return;
        }
        if (!b) {
            b = 0
        }
        if (!c) {
            c = 0
        }

        let xUn;
        let xDeux;

        let delta = Math.pow(b, 2) - 4 * a * c;
        reponseDelta.innerText = `Δ = ${delta}`

        if (delta < 0) {
            afficherAucuneSolution()
        }
        else if (delta === 0) {
            xUn = (- b - Math.sqrt(delta)) / (2 * a)
            afficherPremiereSolution(a, b, delta, xUn)

        } else {
            xUn = (- b - Math.sqrt(delta)) / (2 * a)
            xDeux = (- b + Math.sqrt(delta)) / (2 * a)
            afficherPremiereSolution(a, b, delta, xUn)
            afficherDeuxiemeSolution(a, b, delta, xDeux)

        }

    }
})

function afficherAucuneSolution() {
    reponseXUn.innerText = "Aucune solution dans ℝ"
    reponseXDeux.innerText = ""
}

function afficherPremiereSolution(a, b, delta, xUn) {
    if (Number.isInteger(xUn)) {
        reponseXUn.innerText = `x = ${xUn}`
    } else if(Number.isInteger(Math.sqrt(delta))) {
        reponseXUn.innerHTML = `x = <math><mfrac><mn>${- b - Math.sqrt(delta)}</mn><mn>${2 * a}</mn></mfrac></math>`
    } else {
        reponseXUn.innerHTML = `x = <math><mfrac><mn>${-b} - <msqrt><mi>${delta}</mi></msqrt></mn><mn>${2 * a}</mn></mfrac></math>`
    }
}

function afficherDeuxiemeSolution(a, b, delta, xDeux) {
    if (Number.isInteger(xDeux)) {
        reponseXDeux.innerText = `x = ${xDeux}`
    } else if( Number.isInteger(Math.sqrt(delta))) {
        reponseXDeux.innerHTML = `x = <math><mfrac><mn>${- b + Math.sqrt(delta)}</mn><mn>${2 * a}</mn></mfrac></math>`
    } else {
        reponseXDeux.innerHTML = `x = <math><mfrac><mn>${-b} + <msqrt><mi>${delta}</mi></msqrt></mn><mn>${2 * a}</mn></mfrac></math>`
    }
}
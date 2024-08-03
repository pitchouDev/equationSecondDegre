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
            afficherUneSolution(xUn)
        } else {
            xUn = (- b - Math.sqrt(delta)) / (2 * a)
            xDeux = (- b + Math.sqrt(delta)) / (2 * a)
            afficherDeuxSolution(xUn, xDeux)

        }

    }
})

function afficherAucuneSolution() {
    reponseXUn.innerText = "Aucune solution dans ℝ"
    reponseXDeux.innerText = ""
}


function afficherUneSolution(xUn) {
    reponseXUn.innerText = `x = ${xUn}`
    reponseXDeux.innerText = ""
}

function afficherDeuxSolution(xUn, xDeux) {
    reponseXUn.innerText = `x = ${xUn}`
    reponseXDeux.innerText = `x = ${xDeux}`
}
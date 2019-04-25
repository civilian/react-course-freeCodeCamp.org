import React from "react"
import ReactDom from "react-dom"

function MyInfo (){
    return (
        <div>
            <h1>Óscar</h1>
            <p>I am cute</p>
            <ol>
                <li>Paris</li>
                <li>Machu pichu</li>
                <li>La india</li>
            </ol>
        </div>
    )
}

ReactDom.render(< MyInfo/>, document.getElementById("root"))
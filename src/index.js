import './assets/style.css';
import ico from './assets/icon_edit.svg';


const createImage = `<div>
<img src="${ico}" />
<img src="/static/images/arrow-alt-left2.png" />
</div>

`

document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("#root").innerHTML = createImage;
});


console.log(
    "webpack2"
)

import './assets/style.css';
import ico from './assets/icon_edit.svg';
import ico2 from './assets/wampstack.png';

const createImage = `<div>
<img src="${ico}" />
<img src="/static/images/arrow-alt-left2.png" />
</div>
<h1>폰트 테스트1</h1>
<h2>폰트 테스트2</h2>
`

document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("#root").innerHTML = createImage;
});


console.log(
    "webpack2"
)

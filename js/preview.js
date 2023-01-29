gsap.registerPlugin(SplitText);

const url = new URL(location);
const urlParams = url.searchParams;

document.getElementById('title').innerHTML = urlParams.get('title');

const colorStyle = document.querySelector('.color');
colorStyle.setAttribute('style', `background-color : ${urlParams.get('color') }`);
console.log(urlParams.get('color'));

gsap.set(".color", { opacity: 1, scaleX: 0, scaleY: 0.005 });
gsap.set(".heading", { opacity: 0.1, transformOrigin: "center" });


let splitHeading = new SplitText(".heading h1", { type: "chars" });
let chars = splitHeading.chars;

let intro = gsap.timeline({
    onComplete: () => {
        gsap.set(".heading", { overflow: "visible" });
    }
});

intro
    .to(".color", {
        scaleX: 1.5,
        ease: "expo.out",
        transformOrigin: "center center"
    })
    .to(".color", {
        delay: 0.1,
        scaleY: 1,
        duration: 0.8,
        ease: "expo.out",
        transformOrigin: "center center"
    })
    .to(".color", {
        scaleY: 0,
        ease: "sine.out",
        transformOrigin: "top center"
    })
    .from(chars, {
        opacity: 0,
        duration: 0.8,
        yPercent: 100,
        ease: "expo.out",
        stagger: 0.03
    });


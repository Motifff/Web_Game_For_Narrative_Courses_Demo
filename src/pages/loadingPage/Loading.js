import React from "react";
import Sketch from "react-p5";
import i0 from "../../assets/01.png"
import i1 from "../../assets/01line.png"
import i2 from "../../assets/04.png"
import i3 from "../../assets/04line.png"
import i4 from "../../assets/02.png"
import i5 from "../../assets/02line.png"
import i6 from "../../assets/03.png"
import i7 from "../../assets/03line.png"
import cld from "../../assets/cloud.png"



let img0,img1,img2,img3,img4,img5,img6,img7,cloud

export default (props) => {
    const preload = (p5) => {
        img0 = p5.loadImage(i0);
        img1 = p5.loadImage(i1);
        img2 = p5.loadImage(i2);
        img3 = p5.loadImage(i3);
        img4 = p5.loadImage(i4);
        img5 = p5.loadImage(i5);
        img6 = p5.loadImage(i6);
        img7 = p5.loadImage(i7);
        cloud = p5.loadImage(cld);
    }

    const setup = (p5, canvasParentRef) => {
		// use parent to render the canvas in this ref
		// (without that p5 will render the canvas outside of your component)
        p5.createCanvas(1920,1080).parent(canvasParentRef);
	};

	const draw = (p5) => {
        p5.background(p5.frameCount);
		let mousexslow = p5.map(p5.mouseX,0,1920,-400,0);
        let mousexfront = p5.map(p5.mouseX,0,1920,-2000,0);
        let mousexmiddle = p5.map(p5.mouseX,0,1920,-1000,0);
        let mousexback = p5.map(p5.mouseX,0,1920,-500,0);
        let mousexCloud = p5.map(p5.mouseX,0,1920,-3000,0);

        p5.image(img2, mousexslow, 0);
        p5.image(img3, mousexslow, 0);

        p5.image(img6, mousexback, 0);
        p5.image(img7, mousexback, 0);

        p5.image(img4, mousexmiddle, 0);
        p5.image(img5, mousexmiddle, 0);

        p5.image(img0, mousexfront, 0);
        p5.image(img1, mousexfront, 0);

        p5.image(cloud, mousexCloud, 0);
	};

	return (
		<Sketch preload={preload} setup={setup} draw={draw} />
	);
};
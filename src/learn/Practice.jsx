import React, { createRef, useState } from "react";

const FancyButton = React.forwardRef((props, ref) => {
    return (
    <button ref={ref} onClick={props.clicked}>
        {props.children}
    </button>);
});

FancyButton.displayName = `forwadRef(FancyButton)`;

const NotFancy = ({clicked}) => {
    return (
        <div onClick={clicked}>
            <p>Not that fancy yo...</p>
        </div>
    );
}

// class Higher extends React.Component {

//     innerClass () {
//         class InnerCommponent extends React.Component {
//             render () {
//                 return (
//                     <div>
//                         Inner class
//                     </div>
//                 );
//             }
//         }
//     return InnerCommponent;
//     }

//     render () {
//         return this.innerClass();
//     }
// }

const Fake = ({name, life}) => {

    return <div>{name} {life}</div>
}

function higher (WrappedComponent) {
    return (props) => {

            return <WrappedComponent {...props} />;
        }
    }

const HigherFake = higher(Fake);

const Mouse = (props) => {
    const [posX, setPosX] = useState(0);
    const [posY, setPosY] = useState(0);

    const handleMouse = (e) => {
        setPosX(e.clientX);
        setPosY(e.clientY);
    }

    return (
    <div onMouseMove={handleMouse} style={{height: "100vh"}}>
        <h1>Move the mouse around</h1>
        {props.render(posX, posY)}
    </div>
    );
}

const Box = ({posX, posY}) => {
    return (
        <div style={{backgroundColor: 'red', width: '10px', height: '10px', position: 'absolute', top: posY, left: posX}}></div>
    );
}

export const OuterComponent = () => {
    const ref = createRef();
    const ref1 = createRef();

    const handleClick = () => {
        console.log(ref.current);
    }
    const handleClick1 = () => {
        console.log(ref1.current);
    }

    return (
        <>
            <FancyButton ref={ref} clicked={handleClick}>Click me</FancyButton>
            <NotFancy clicked={handleClick1} />
            <HigherFake name='kim' life='love' />
            <Mouse render={(x, y) => <Box posX={x} posY={y} />} />
        </>
    );
}
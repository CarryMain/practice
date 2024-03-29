// import {Component, useState, useEffect, useCallback, useMemo, useRef, useReducer} from 'react';
// import {Container} from 'react-bootstrap';
// import './App.css';
// class Slider extends Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             autoplay: false,
//             slide: 0
//         }
//     }

//     componentDidMount() {
//         document.title = `Slide: ${this.state.slide}`
//     }

//     componentDidUpdate() {
//         document.title = `Slide: ${this.state.slide}`
//     }

//     changeSlide = (i) => {
//         this.setState(({slide}) => ({
//             slide: slide + i
//         }))
//     }

//     toggleAutoplay = () => {
//         this.setState(({autoplay}) => ({
//             autoplay: !autoplay
//         }))
//     }

//     render() {
//         return (
//             <Container>
//                 <div className="slider w-50 m-auto">
//                     <img className="d-block w-100" src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg" alt="slide" />
//                     <div className="text-center mt-5">Active slide {this.state.slide} <br/> {this.state.autoplay ? 'auto' : null}</div>
//                     <div className="buttons mt-3">
//                         <button 
//                             className="btn btn-primary me-2"
//                             onClick={() => this.changeSlide(-1)}>-1</button>
//                         <button 
//                             className="btn btn-primary me-2"
//                             onClick={() => this.changeSlide(1)}>+1</button>
//                         <button 
//                             className="btn btn-primary me-2"
//                             onClick={this.toggleAutoplay}>toggle autoplay</button>
//                     </div>
//                 </div>
//             </Container>
//         )
//     }
// }


// const calcValue = () => {
//     console.log('random')

//     return Math.random() * (50 - 1) + 1
// }

// const countTotal = (num) => {
//     console.log('counting...')
//     return num + 10
// }

 // const [state, setState] = useState({slide: 0, autoplay: false})

    // function changeSlide(i) {
    //     setState( state => ({...state, slide: state.slide + i}))
    // }    

    // function toggleAutoplay() {
    //     setState(state => ({...state, autoplay: !state.autoplay}))
    // }


    // const getSomeImages = useCallback(() => {
    //     console.log('fetching')
    //     return [
    //         "https://avatars.mds.yandex.net/i?id=4468427efb4fd4e22c7104358569f98ec6d58d3a-10981924-images-thumbs&n=13",
    //         "https://avatars.mds.yandex.net/i?id=5cc1ceeb581c38948ddba1289937b4bb192ba71a-10092505-images-thumbs&n=13",
    //     ]
    // }, [slide])
    
    // function logging() {
    //     console.log('log!')
    // }
    
    // useEffect(() => {
    //     console.log('effect')
    //     document.title = `Slide: ${slide}`
    //     // window.addEventListener('click', logging)
    //     // return () => {
    //     //     window.removeEventListener('click', logging)
    //     // }
    // }, [slide])

    // useEffect(() => {
    //     console.log('change autoplay')
    // }, [autoplay])
    
      

    // function toggleAutoplay() {
    //     setAutoplay(autoplay => !autoplay)
    // }

    // const total = useMemo(() => {
    //     return countTotal(slide)
    // }, [slide])

    // const style = useMemo(() => ({ 
    //     color: slide > 4 ? 'red' : 'black'
    // }), [slide])

    // useEffect(() => {
    //     console.log('styles') 
    // }, [style])
    
    

// const Slide = ({getSomeImages}) => {
//     const [images, setImages] = useState([])
//     useEffect(() => {
//         setImages(getSomeImages())
//     }, [getSomeImages])

//     return ( 
//         <>
//             {images.map((url, i) => <img className="d-block w-100" key={i} src={url} alt="slide" />)}
//         </>
//     )
// }


// function reducer(state, action) {
//     switch(action.type) {
//         case 'toggle': 
//             return {autoplay: !state.autoplay}
//         case 'slow' :
//             return {autoplay: 300}
//         case 'fast' : 
//             return {autoplay: 5000}
//         case 'custom': 
//             return {autoplay: action.payload}
//         default: 
//             throw new Error()
//     }
// }

// function init (initial) {

//     return {autoplay: initial}
// }

// const Slider = ({initial}) => {
    
//     const [slide, setSlide] = useState(0)
//     // const [autoplay, setAutoplay] = useState(false)
//     const [autoplay, dispatch] = useReducer(reducer, initial, init)

    
//     function changeSlide(i) {
//         setSlide( slide => slide + i)
//     }  

//     return (
//         <Container>
//             <div className="slider w-50 m-auto">
//                 <img className="d-block w-100" src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg" alt="slide" />
//                 <div className="text-center mt-5">Active slide {slide} <br/>{autoplay.autoplay ? 'auto' : null} </div>
//                 <div className="buttons mt-3">
//                     <button 
//                         className="btn btn-primary me-2"
//                         onClick={() => changeSlide(-1)}>-1</button>
//                     <button 
//                         className="btn btn-primary me-2"
//                         onClick={() => changeSlide(1)}>+1</button>
//                     <button 
//                         className="btn btn-primary me-2"
//                         onClick={() => dispatch({type: 'toggle'})}>toggle autoplay</button>
//                     <button 
//                         className="btn btn-primary me-2"
//                         onClick={() => dispatch({type: 'slow'})}>slow</button>
//                     <button 
//                         className="btn btn-primary me-2"
//                         onClick={() => dispatch({type: 'fast'})}>fast</button>
//                     <button 
//                         className="btn btn-primary me-2"
//                         onClick={(e) => dispatch({type: 'custom', payload: +e.target.textContent})}>1000</button>
//                 </div>
//             </div>
//         </Container>
//     )
// }
    
   

// function App() {
    // const [slider, setSlider] = useState(true)
//   return (
    // <Slider initial={false}/>
    // <>
    //     <button onClick={() => setSlider(false)}>Click</button>
    //     {slider ? <Slider/> : null}
    // </>  
//   );
// }

// export default App;


import {useState, useEffect, Component} from 'react';
import {Container} from 'react-bootstrap';
import './App.css';

const withSlider = (BaseComponent, getData) => {
    return (props) => {
        const [slide, setSlide] = useState(0);
        const [autoplay, setAutoplay] = useState(false)
    
        useEffect(() => {
            setSlide(getData());
        }, [])
    
        function changeSlide(i) {
            setSlide(slide => slide + i);
        }

        return <BaseComponent {...props} slide={slide} autoplay={autoplay} changeSlide={changeSlide} setAutoplay={setAutoplay}/>
    }
}

const getDataFromFirstFetch = () => {return 10};
const getDataFromSecondFetch = () => {return 20};

const SliderFirst = (props) => {
    return (
        <Container>
            <div className="slider w-50 m-auto">
                <img className="d-block w-100" src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg" alt="slide" />
                <div className="text-center mt-5">Active slide {props.slide}</div>
                <div className="buttons mt-3">
                    <button 
                        className="btn btn-primary me-2"
                        onClick={() => props.changeSlide(-1)}>-1</button>
                    <button 
                        className="btn btn-primary me-2"
                        onClick={() => props.changeSlide(1)}>+1</button>
                </div>
            </div>
        </Container>
    )
}

const SliderSecond = (props) => {
    return (
        <Container>
            <div className="slider w-50 m-auto">
                <img className="d-block w-100" src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg" alt="slide" />
                <div className="text-center mt-5">Active slide {props.slide} <br/>{props.autoplay ? 'auto' : null} </div>
                <div className="buttons mt-3">
                    <button 
                        className="btn btn-primary me-2"
                        onClick={() => props.changeSlide(-1)}>-1</button>
                    <button 
                        className="btn btn-primary me-2"
                        onClick={() => props.changeSlide(1)}>+1</button>
                    <button 
                        className="btn btn-primary me-2"
                        onClick={() => props.setAutoplay(autoplay => !props.autoplay)}>toggle autoplay</button>
                </div>
            </div>
        </Container>
    )
}

const SliderWithFirstFetch = withSlider(SliderFirst, getDataFromFirstFetch)
const SliderWithSecondFetch = withSlider(SliderSecond, getDataFromSecondFetch)

const withLogger = (WrappendComponent) => props => {
    useEffect(() => {
        console.log('first render!')
    }, [])
    
    return <WrappendComponent {...props}/>
}

const Hello = () => {
    return ( 
        <h1>Hello</h1>
    )
}

const HelloWithLogger = withLogger(Hello)

function App() {
    return (
        <>
            <HelloWithLogger/>
            <SliderWithFirstFetch/>
            <SliderWithSecondFetch/>
        </>
    );
}

export default App;
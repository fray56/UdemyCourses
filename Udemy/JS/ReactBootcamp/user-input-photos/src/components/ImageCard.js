import React from 'react'

class ImageCard extends React.Component {

    constructor(props) {
        super(props)

        //initialising state
        this.state = { spans: 0 };

        // creating a ref
        // we call React.createRef() to create a new ref on an element in the dom
        // we assign it to an instance variable so we can call back to it and use it later within our class.
        // a ref will show all the dom elements/details of the element that we want to use.
        this.imageRef = React.createRef();
    }

    // this is the lifecycle method we use to show or do something once the component has been rendered. 
    // it only runs once.
    componentDidMount() {
        // this will log out the details of each img tag that we display after the user has searched.
        // we are displaying the react ref we assigned to the img tag.
        // we can use the data returned . eg. the height of the img with .clientheight.
        // this wont cause an error but it will return the height value of 0.
        // this is because the componentDidMount runs the very milisecond after the component is loaded, 
        // before the api call has been made and the images have been rendered to the page.
        // so the console log will show a height of 0 because when it runs there are no images on the page! 
        // console.log(this.imageRef.current.clientHeight);

        // to fix this we can add an event listener to the imageRef so that when the element its set to is loaded, the componentDidMount function 
        // will then run.
        // we need to add the .current so we can access the height of each element. 
        this.imageRef.current.addEventListener('load', this.setSpans);
        
    }

    // remember it has to be an arrow function so the value of the 'this' keyword doesnt get changed.
    setSpans = () => {
        // we can now log out the height of the img because this log wont run until the img element is loaded.
        // console.log(this.imageRef.current.clientHeight);

        // get the height of each img
        const height = this.imageRef.current.clientHeight;

        // take the height of each img and devide with with the height of the span height(10px)
        // use math.ceil to cap its value.
        const spans = Math.ceil(height / 10);
        // we used 10px so that each img will take up lots of small 10px rows but means we can fine tune where the imgs sit on the page.

        // then we use the setstate method to update state
        // we can then use the state value to determine the amount of spans needed for each img.
        this.setState({ spans });
    }


    render () {

        // we can destructor the props we need out of image so we dont have to type 'this.props' everytime we need to reference them.
        const { description, urls } = this.props.image;

        return (
            // this inline style takes the height state has been set to and sets it as the amount of spans needed for each img.
            <div style={{ gridRowEnd: `span ${ this.state.spans }` }}>
                <img 
                    // react wants us to use alt tags for accesability
                    // wont break the application if not used!
                    alt={ description }
                    src={ urls.regular }

                    // we can use the ref we created above by referencing it inside the tag we want to use it in.
                    // this is a special jsx tag - not a dom element.
                    // it gives us access to the DOM Node so we can use the properties set on the element.
                    ref={ this.imageRef }
                />
            </div>
        );
    }
}

export default ImageCard;
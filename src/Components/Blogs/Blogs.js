import React from 'react';
import Navbar from '../Navbar/Navbar';

const Blogs = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-4">
                        <h2>What is Context API and How it works?</h2>
                        <p>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
                        <p>React createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state.</p>
                    </div>
                    <div className="col-md-4">
                        <h2>What is semantic tag?</h2>
                        <p>Semantic HTML or semantic markup is HTML that introduces meaning to the web page rather than just presentation. For example, a p tag indicates that the enclosed text is a paragraph. This is both semantic and presentational because people know what paragraphs are, and browsers know how to display them.</p>
                        <p>Semantic HTML tags provide information about the contents of those tags that goes beyond just how they look on a page. Text that is enclosed in the code tag is immediately recognized by the browser as some type of coding language.</p>
                    </div>
                    <div className="col-md-4">
                        <h2>What is difference between inline and block elements?</h2>
                        <p><b>Inline elements:</b> are those which only occupy the space bounded by the tags defining the element, instead of breaking the flow of the content. Note: An inline element does not start on a new line and only takes up as much width as necessary.</p>
                        <p><b>Inline block:</b> A Block-level element occupies the entire horizontal space of its parent element (container), and vertical space equal to the height of its contents, thereby creating a "block". Browsers typically display the block-level element with a newline both before and after the element.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;
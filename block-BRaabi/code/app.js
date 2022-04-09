import React from "react"

class App extends React.Component {
    constructor(props) {
    super(props)
    this.state = {
        
    }

render() {
        return (
            <>
            <div className="App">
                <div>
                <button
                    className={`question-section ${active}`}
                    onClick={toggleAccordion}
                >
                    <div>
                    <div className="question-align">
                        <h4 className="question-style">
                        Why do you like web developemnt
                        </h4>
                        <FiPlus
                        className={active ? `question-icon rotate` : `question-icon`}
                        />
                    </div>
                    <div
                        ref={contentRef}
                        className={active ? `answer answer-divider` : `answer`}
                    >
                        <p>Because I love coding</p>
                    </div>
                    </div>
                </button>
                </div>
            </div>
            </>
            );
        }
    }
}

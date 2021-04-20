import React from "react";

export default function InlineStyleDemo(){
    const style = {
        container: {
            display: 'flex',
            justifyContent:'center',
            alignItems: 'center',
            flexDirection: 'column',
            borderRadius: '8px',
            backgroundColor: '#282c34',
            width: '80vw',
            minHeight: '200px',
            margin: '0 auto',
            boxShadow: '4px 4px 8px rgba(110,110,110,0.75)'
        },
        title: {
            fontSize: '5vw',
            fontWeight: 'bold',
            color: '#61dafb'
        },
        description: {
            fontSize: '4vw',
            color: '#61dafb',
            textShadow: '2px 2px 4px #61dafb'
}
    }


    return <div style={style.container}>
        <h1 style={style.title}>CSS Solutions For React</h1>
        <p style={style.description}>Inline Style</p>
    </div>
}